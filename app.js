
function onlyNumbers (str){
	str = String(str); //
	var regexp = /[\d]/g; //выбираем только цифры
	var NumbersArr = String(str.match(regexp)); //делаем из элемента массива с цфрами - строку, получаем их через запятую
	var NumbersStr = NumbersArr.replace( /,/g, "" ); //убираем запятую

	return +NumbersStr;
	
};


function calcPvx() {
    let ratio = {
        '1-4': 1.24,
        '5': 1.16,
    }
    let weight_15 = {
        150: 4.40,
        200: 5.80,
        250: 7.30,
        300: 8.80,
        350: 10.20,
        400: 11.70,
        450: 13.20,
    }

    let weight_19 = {
        250: 7.80,
        350: 10.90,
        450: 14.00,
        500: 15.50,
        550: 17.10,
    }

    let weight_25 = {
        300: 9.40,
        350: 10.90,
        400: 12.50,
        450: 14.00,
        500: 15.50,
    }

    let halftube = {
        'shape': '',
        'thickness': '' ,
        'width': '',
        'length': '',
        'halftubeCount': '',
        'cost': 265,
    };

    document.querySelector("#accordionPVX").addEventListener("click", event => {
   
        if (event.target.matches("input.halftubeThickness")) {    
            halftube.thickness = event.target.value
        } else if (event.target.matches("input.halftubeWidth")) {
            halftube.width = event.target.value
        } else if (event.target.matches("input.halftubeLength")) {
            halftube.length = event.target.value
        } else if (event.target.matches("input.halftube")) {
            halftube.shape = event.target.value
        }
        
        halftube.halftubeCount = document.querySelector("input.halftubeCount").value
       


        console.log(halftube);
    });
function render() {
    let weight = 0;
    let costTape = 0;

    if (document.querySelector("input.halftubeCount").value >= 5)  {
        if (onlyNumbers(halftube.thickness) == 15) {
            costTape = halftube.cost * ratio["5"] * weight_15[onlyNumbers(halftube.width)];  
            weight = weight_15[onlyNumbers(halftube.width)]; 
        }
        if (onlyNumbers(halftube.thickness) == 19) {
            costTape = halftube.cost * ratio["5"] * weight_19[onlyNumbers(halftube.width)];  
            weight = weight_19[onlyNumbers(halftube.width)]; 
        }
        if (onlyNumbers(halftube.thickness) == 25) {
            costTape = halftube.cost * ratio["5"] * weight_25[onlyNumbers(halftube.width)];  
            weight = weight_25[onlyNumbers(halftube.width)]; 
        }
    }

    if (document.querySelector("input.halftubeCount").value <= 4) {
        if (onlyNumbers(halftube.thickness) == 15) {
            costTape = halftube.cost * ratio["1-4"] * weight_15[onlyNumbers(halftube.width)];  
            weight = weight_15[onlyNumbers(halftube.width)]; 
        }
        if (onlyNumbers(halftube.thickness) == 19) {
            costTape = halftube.cost * ratio["1-4"] * weight_19[onlyNumbers(halftube.width)];  
            weight = weight_19[onlyNumbers(halftube.width)]; 
        }
        if (onlyNumbers(halftube.thickness) == 25) {
            costTape = halftube.cost * ratio["1-4"] * weight_25[onlyNumbers(halftube.width)];  
            weight = weight_25[onlyNumbers(halftube.width)]; 
        }
                    
    } 
       
    let markup = `
        <div class="col-6">
            <p>Стоймость за рулон: <span>${costTape / weight }</span>руб.</p>
        </div>
        <div class="col-6">
            <p>Стоймость плёнки: <span>${costTape}</span>руб.</p>
        </div>
        `;

        document.querySelector(".PVX-TBody").innerHTML = markup;
    
        
}
    document.querySelector(".PVX-T").addEventListener("click", render)
}

calcPvx();

function calcPOF() {
    let ratio = {
        '1-4': 1.24,
        '5': 1.16,
    }
    let weight_12_1000 = {
        200: 4.70,
        250: 5.80,
        300: 6.95,
        350: 8.10,
        400: 9.24,
        450: 10.40,
    }

    let weight_15_750 = {
        200: 4.20,
        250: 5.20,
        300: 6.25,
        350: 7.30,
        400: 8.30,
        450: 9.40,
        500: 10.40,
        550: 11.45,
        600: 12.47,
    }

    let weight_15_1250 = {
        200: 7.00,
        250: 8.65,
        300: 10.40,
        350: 12.15,
        400: 13.90,
        450: 15.60,
        500: 17.35,
        550: 19.10,
        600: 20.70,
    }

    let weight_19_650 = {
        200: 4.56,
        250: 5.70,
        300: 6.85,
        350: 8.00,
        400: 9.15,
        450: 10.30,
        500: 11.40,
        550: 12.55,
        600: 13.70,
    }

    let weight_19_1000 = {
        200: 7.02,
        250: 8.80,
        300: 10.55,
        350: 12.30,
        400: 14.10,
        450: 15.80,
        500: 17.60,
        550: 19.23,
        600: 21.10,
    }

    let weight_23_800 = {
        400: 13.92,
        450: 15.62,
        500: 17.35,
    }

    let weight_25_600 = {
        350: 9.70,
        400: 11.06,
        450: 12.45,
        500: 13.83,
    }

    let weight_25_800 = {
        300: 11.10,
        450: 16.61,
        550: 20.33,
    }

    let halftube = {
        'shape': '',
        'thickness': '' ,
        'width': '',
        'length': '',
        'halftubeCount': '',
        'cost': 235,
    };

    document.querySelector("#accordionPOF").addEventListener("click", event => {
   
        if (event.target.matches("input.halftubeThickness")) {    
            halftube.thickness = event.target.value 
        } else if (event.target.matches("input.halftubeWidth")) {
            halftube.width = event.target.value
        } else if (event.target.matches("input.halftubeLength")) {
            halftube.length = event.target.value
        } else if (event.target.matches("input.halftube")) {
            halftube.shape = event.target.value
        }
        
        halftube.halftubeCount = document.querySelector("input.halftubeCount").value
       


        console.log(halftube);
    });
function render() {
    let weight = 0;
    let costTape = 0;

    if (document.querySelector("input.halftubeCount").value >= 5)  {

        if (onlyNumbers(halftube.length) == 1000) {
            if (onlyNumbers(halftube.thickness) == 125) {
                costTape = halftube.cost * ratio["5"] * weight_12_1000[onlyNumbers(halftube.width)];  
                weight = weight_12_1000[onlyNumbers(halftube.width)]; 
            }
            if (onlyNumbers(halftube.thickness) == 19) {
                costTape = halftube.cost * ratio["5"] * weight_19_1000[onlyNumbers(halftube.width)];  
                weight = weight_19_1000[onlyNumbers(halftube.width)]; 
            }
        }

        if (onlyNumbers(halftube.length) == 750) {
            if (onlyNumbers(halftube.thickness) == 15) {
                costTape = halftube.cost * ratio["5"] * weight_15_750[onlyNumbers(halftube.width)];  
                weight = weight_15_750[onlyNumbers(halftube.width)]; 
            }
        }
        if (onlyNumbers(halftube.length) == 1250) { 
            if (onlyNumbers(halftube.thickness) == 15) {
                costTape = halftube.cost * ratio["5"] * weight_15_1250[onlyNumbers(halftube.width)];  
                weight = weight_15_1250[onlyNumbers(halftube.width)]; 
            }
        }

        if (onlyNumbers(halftube.length) == 650) {
            if (onlyNumbers(halftube.thickness) == 19) {
                costTape = halftube.cost * ratio["5"] * weight_19_650[onlyNumbers(halftube.width)];  
                weight = weight_19_650[onlyNumbers(halftube.width)]; 
            }
        }
        
        if (onlyNumbers(halftube.length) == 800) {
            if (onlyNumbers(halftube.thickness) == 25) {
                costTape = halftube.cost * ratio["5"] * weight_25_800[onlyNumbers(halftube.width)];  
                weight = weight_25_800[onlyNumbers(halftube.width)]; 
            }
            if (onlyNumbers(halftube.thickness) == 235) {
                costTape = halftube.cost * ratio["5"] * weight_23_800[onlyNumbers(halftube.width)];  
                weight = weight_23_800[onlyNumbers(halftube.width)]; 
            }
        }

        if (onlyNumbers(halftube.length) == 600) {
            if (onlyNumbers(halftube.thickness) == 25) {
                costTape = halftube.cost * ratio["5"] * weight_25_600[onlyNumbers(halftube.width)];  
                weight = weight_25_600[onlyNumbers(halftube.width)]; 
            }
        } 

        
        
        
    }

    if (document.querySelector("input.halftubeCount").value <= 4) {
        if (onlyNumbers(halftube.length) == 1000) {
            if (onlyNumbers(halftube.thickness) == 125) {
                costTape = halftube.cost * ratio["1-4"] * weight_12_1000[onlyNumbers(halftube.width)];  
                weight = weight_12_1000[onlyNumbers(halftube.width)]; 
            }
        }

        if (onlyNumbers(halftube.length) == 750) {
            if (onlyNumbers(halftube.thickness) == 15) {
                costTape = halftube.cost * ratio["1-4"] * weight_15_750[onlyNumbers(halftube.width)];  
                weight = weight_15_750[onlyNumbers(halftube.width)]; 
            }
        } 

        if (onlyNumbers(halftube.length) == 1250) { 
            if (onlyNumbers(halftube.thickness) == 15) {
                costTape = halftube.cost * ratio["1-4"] * weight_15_1250[onlyNumbers(halftube.width)];  
                weight = weight_15_1250[onlyNumbers(halftube.width)]; 
            }
        }

        if (onlyNumbers(halftube.length) == 650) {
            if (onlyNumbers(halftube.thickness) == 19) {
                costTape = halftube.cost * ratio["1-4"] * weight_19_650[onlyNumbers(halftube.width)];  
                weight = weight_19_650[onlyNumbers(halftube.width)]; 
            }
        } 

        if (onlyNumbers(halftube.length) == 1000) {
            if (onlyNumbers(halftube.thickness) == 19) {
                costTape = halftube.cost * ratio["1-4"] * weight_19_1000[onlyNumbers(halftube.width)];  
                weight = weight_19_1000[onlyNumbers(halftube.width)]; 
            }
        }

        if (onlyNumbers(halftube.length)== 800) {
            if (onlyNumbers(halftube.thickness) == 235) {
                costTape = halftube.cost * ratio["1-4"] * weight_23_800[onlyNumbers(halftube.width)];  
                weight = weight_23_800[onlyNumbers(halftube.width)]; 
            }
            if (onlyNumbers(halftube.thickness) == 25) {
                costTape = halftube.cost * ratio["1-4"] * weight_25_800[onlyNumbers(halftube.width)];  
                weight = weight_25_800[onlyNumbers(halftube.width)]; 
            }
        }

        if (onlyNumbers(halftube.length) == 600) {
            if (onlyNumbers(halftube.thickness) == 25) {
                costTape = halftube.cost * ratio["1-4"] * weight_25_600[onlyNumbers(halftube.width)];  
                weight = weight_25_600[onlyNumbers(halftube.width)]; 
            }
        }

                    
    } 
       
    let markup = `
        <div class="col-6">
            <p>Стоймость за рулон: <span>${costTape / weight }</span>руб.</p>
        </div>
        <div class="col-6">
            <p>Стоймость плёнки: <span>${costTape}</span>руб.</p>
        </div>
        `;

        document.querySelector(".POF-body").innerHTML = markup;
    
        
}
    document.querySelector(".POF").addEventListener("click", render)
}

calcPOF();