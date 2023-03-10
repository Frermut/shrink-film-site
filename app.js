
function onlyNumbers (str){
	str = String(str); //
	var regexp = /[\d]/g; //выбираем только цифры
	var NumbersArr = String(str.match(regexp)); //делаем из элемента массива с цфрами - строку, получаем их через запятую
	var NumbersStr = NumbersArr.replace( /,/g, "" ); //убираем запятую

	return +NumbersStr;
	
};


function getDateFromHalftube() {
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
                if (onlyNumbers(halftube.width) == 150) {
                    costTape = halftube.cost * ratio["5"] * weight_15[150];  
                    weight = weight_15[150];
                }else if (onlyNumbers(halftube.width) == 200) {
                    costTape = halftube.cost * ratio["5"] * weight_15[200];  
                    weight = weight_15[200];
                }else if (onlyNumbers(halftube.width) == 250) {
                    costTape = halftube.cost * ratio["5"] * weight_15[250];  
                    weight = weight_15[250];
                }else if (onlyNumbers(halftube.width) == 300) {
                    costTape = halftube.cost * ratio["5"] * weight_15[300];  
                    weight = weight_15[300];
                }else if (onlyNumbers(halftube.width) == 350) {
                    costTape = halftube.cost * ratio["5"] * weight_15[350];
                    weight = weight_15[350];  
                }else if (onlyNumbers(halftube.width) == 400) {
                    costTape = halftube.cost * ratio["5"] * weight_15[400];  
                    weight = weight_15[400];
                }else if (onlyNumbers(halftube.width) == 450) {
                    costTape = halftube.cost * ratio["5"] * weight_15[450]; 
                    weight = weight_15[450]; 
                }
            } 
            if (onlyNumbers(halftube.thickness) == 19) {
                if (onlyNumbers(halftube.width) == 250) {
                    costTape = halftube.cost * ratio["5"] * weight_19[250];  
                    weight = weight_19[250]; 
                }else if (onlyNumbers(halftube.width) == 350) {
                    costTape = halftube.cost * ratio["5"] * weight_19[350];  
                    weight = weight_19[350];
                }else if (onlyNumbers(halftube.width) == 450) {
                    costTape = halftube.cost * ratio["5"] * weight_19[450];  
                    weight = weight_19[450]; 
                }else if (onlyNumbers(halftube.width) == 500) {
                    costTape = halftube.cost * ratio["5"] * weight_19[500];  
                    weight = weight_19[500]; 
                }else if (onlyNumbers(halftube.width) == 550) {
                    costTape = halftube.cost * ratio["5"] * weight_19[550];  
                    weight = weight_19[550];
                }
            } 
            if (onlyNumbers(halftube.thickness) == 25) {
                if (onlyNumbers(halftube.width) == 300) {
                    costTape = halftube.cost * ratio["5"] * weight_25[300];  
                    weight = weight_25[300];  
                }else if (onlyNumbers(halftube.width) == 350) {
                    costTape = halftube.cost * ratio["5"] * weight_25[350];  
                    weight = weight_25[350]; 
                }else if (onlyNumbers(halftube.width) == 400) {
                    costTape = halftube.cost * ratio["5"] * weight_25[400];  
                    weight = weight_25[400]; 
                }else if (onlyNumbers(halftube.width) == 450) {
                    costTape = halftube.cost * ratio["5"] * weight_25[450];  
                    weight = weight_25[450]; 
                }else if (onlyNumbers(halftube.width) == 500) {
                    costTape = halftube.cost * ratio["5"] * weight_25[500]; 
                    weight = weight_25[500]; 
                }
            }
        }

        if (document.querySelector("input.halftubeCount").value <= 4) {
            if (onlyNumbers(halftube.thickness) == 15) {
                if (onlyNumbers(halftube.width) == 150) {
                    costTape = halftube.cost * ratio["1-4"] * weight_15[150];  
                    weight = weight_15[150];
                }else if (onlyNumbers(halftube.width) == 200) {
                    costTape = halftube.cost * ratio["1-4"] * weight_15[200];  
                    weight = weight_15[200];
                }else if (onlyNumbers(halftube.width) == 250) {
                    costTape = halftube.cost * ratio["1-4"] * weight_15[250];  
                    weight = weight_15[250];
                }else if (onlyNumbers(halftube.width) == 300) {
                    costTape = halftube.cost * ratio["1-4"] * weight_15[300];  
                    weight = weight_15[300];
                }else if (onlyNumbers(halftube.width) == 350) {
                    costTape = halftube.cost * ratio["1-4"] * weight_15[350];
                    weight = weight_15[350];  
                }else if (onlyNumbers(halftube.width) == 400) {
                    costTape = halftube.cost * ratio["1-4"] * weight_15[400];  
                    weight = weight_15[400];
                }else if (onlyNumbers(halftube.width) == 450) {
                    costTape = halftube.cost * ratio["1-4"] * weight_15[450]; 
                    weight = weight_15[450]; 
                }
            } 
            if (onlyNumbers(halftube.thickness) == 19) {
                if (onlyNumbers(halftube.width) == 250) {
                    costTape = halftube.cost * ratio["1-4"] * weight_19[250];  
                    weight = weight_19[250]; 
                }else if (onlyNumbers(halftube.width) == 350) {
                    costTape = halftube.cost * ratio["1-4"] * weight_19[350];  
                    weight = weight_19[350];
                }else if (onlyNumbers(halftube.width) == 450) {
                    costTape = halftube.cost * ratio["1-4"] * weight_19[450];  
                    weight = weight_19[450]; 
                }else if (onlyNumbers(halftube.width) == 500) {
                    costTape = halftube.cost * ratio["1-4"] * weight_19[500];  
                    weight = weight_19[500]; 
                }else if (onlyNumbers(halftube.width) == 550) {
                    costTape = halftube.cost * ratio["1-4"] * weight_19[550];  
                    weight = weight_19[550];
                }
            } 
            if (onlyNumbers(halftube.thickness) == 25) {
                if (onlyNumbers(halftube.width) == 300) {
                    costTape = halftube.cost * ratio["1-4"] * weight_25[300];  
                    weight = weight_25[300];  
                }else if (onlyNumbers(halftube.width) == 350) {
                    costTape = halftube.cost * ratio["1-4"] * weight_25[350];  
                    weight = weight_25[350]; 
                }else if (onlyNumbers(halftube.width) == 400) {
                    costTape = halftube.cost * ratio["1-4"] * weight_25[400];  
                    weight = weight_25[400]; 
                }else if (onlyNumbers(halftube.width) == 450) {
                    costTape = halftube.cost * ratio["1-4"] * weight_25[450];  
                    weight = weight_25[450]; 
                }else if (onlyNumbers(halftube.width) == 500) {
                    costTape = halftube.cost * ratio["1-4"] * weight_25[500]; 
                    weight = weight_25[500]; 
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

        let div = document.querySelector(".PVX-TBody");
    
        div.insertAdjacentHTML('beforeend',markup)
}
    document.querySelector(".PVX-T").addEventListener("click", render)
}

getDateFromHalftube()

