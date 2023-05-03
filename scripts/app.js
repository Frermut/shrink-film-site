
function onlyNumbers (str){
	str = String(str); //
	var regexp = /[\d]/g; //выбираем только цифры
	var NumbersArr = String(str.match(regexp)); //делаем из элемента массива с цфрами - строку, получаем их через запятую
	var NumbersStr = NumbersArr.replace( /,/g, "" ); //убираем запятую

	return +NumbersStr;
};

function clear(halftube,cost,type,num = 1) {
    document.querySelector(`#resultForm${type}`).innerHTML = "";
    document.querySelector(`#resultMicron${type}`).innerHTML = ""
    document.querySelector(`#resultHalftubeWidth${type}`).innerHTML = "";
    document.querySelector(`#resultHalftubeLength${type}`).innerHTML = "";
    document.querySelector(`#resultHalftubeCount${type}`).innerHTML = "";
    document.querySelector(`#resultHalftubeWidth${type}`).innerHTML = "";

    halftube.shape = "";
    halftube.thickness = "";
    halftube.width = "";
    halftube.length = "";
    halftube.halftubeCount = num;
    halftube.cost = cost;


      console.log(halftube);
}

function get_markup(shape, thickness, width, length, halftubeCount, resultKilo, resultOrder,shrink_type, id) {
    return `
    <form action="send.php" method="post" class="" id="${id}">
    <div class="d-flex row justify-content-center gap-3">
    <div class="col-lg col-md-12">
      <ul class="list-group list-group-horizontal w-100">
        <li class="list-group-item w-75">Форма плёнки:</li>
        <li class="list-group-item w-25" style="font-size:14px" >${shape}</li>
        <input type="hidden" name="shrink_type" value="${shrink_type}">
        <input type="hidden" name="shape" value="${shape}">
      </ul>
      <ul class="list-group list-group-horizontal w-100">
        <li class="list-group-item w-75">Толщина пленки:</li>
        <li class="list-group-item w-25" style="font-size:14px" >${thickness}</li>
        <input type="hidden" name="thickness" value="${thickness}">
      </ul>
      <ul class="list-group list-group-horizontal w-100">
        <li class="list-group-item w-75">Ширина пленки:</li>
        <li class="list-group-item w-25" name="width">${width}</li>
        <input type="hidden" name="width" value="${width}">
      </ul>
      <ul class="list-group list-group-horizontal w-100">
        <li class="list-group-item w-75">Длина пленки:</li>
        <li class="list-group-item w-25" >${length}</li>
        <input type="hidden" name="length" value="${length}">
      </ul>
      <ul class="list-group list-group-horizontal w-100">
        <li class="list-group-item w-75">Количество рулонов:</li>
        <li class="list-group-item w-25" >${halftubeCount}</li>
        <input type="hidden" name="halftubeCount" value="${halftubeCount}">
      </ul>
    </div>
    
    <div class="col-lg col-md-12">
      <div class="row">
       
          <div class="row ">
            <div class="col-md-12 col-lg">
              <div class="input-group mb-3 w-100">
                <span class="input-group-text" id="basic-addon1">Имя</span>
                <input type="text" name="name" class="form-control"  aria-label="Username" aria-describedby="basic-addon1">
              </div>
              <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon2">Телефон</span>
              <input type="text" name="mobile" class="form-control"  aria-label="Recipient's username" aria-describedby="basic-addon2" required>
            </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon2">Email</span>
                <input type="text" name="email" class="form-control"  aria-label="Recipient's username" aria-describedby="basic-addon2">
              </div>
            </div>
          </div>
        </div>

        
      
      <div class="row">
          <p>Стоймость за килограмм: <span>${resultKilo}</span></p>
          <p>Стоймость заказа: <span >${resultOrder}</span></p>
          <input type="hidden" name="price" value="${resultOrder}">
      </div>
      </form>
    </div>
  </div>
        `
}

(function calcPvx() {
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
        'halftubeCount': 1,
        'cost': 265,
    };

    document.querySelector("#accordionPVX").addEventListener("click", event => {
        if (event.target.matches("input.formPVX")) { 
            clear(halftube,halftube.cost, "PVX");  
            document.querySelector("#resultFormPVX").innerHTML = `&nbsp; ${event.target.value}`; 
            halftube.shape = event.target.value

        } else if (event.target.matches("input.halftubeThickness")) { 
            document.querySelector("#resultMicronPVX").innerHTML = `&nbsp; ${event.target.value}`; 
            halftube.thickness = event.target.value

        } else if (event.target.matches("input.halftubeWidth")) {
            document.querySelector("#resultHalftubeWidthPVX").innerHTML = `&nbsp; ${event.target.value}`; 
            halftube.width = event.target.value

        } else if (event.target.matches("input.halftubeLength")) {
            document.querySelector("#resultHalftubeLengthPVX").innerHTML = `&nbsp; ${event.target.value}`; 
            halftube.length = event.target.value

        }

    });

    document.querySelector("#accordionPVX").addEventListener("input", () => {
        document.querySelector("#resultHalftubeCountPVX").innerHTML = `&nbsp; ${document.querySelector(".halftubeCountPVX").value}`; 
        halftube.halftubeCount = document.querySelector(".halftubeCountPVX").value;
    
        document.querySelector("#resultHalftubeWidthPVX").innerHTML = `&nbsp; ${document.querySelector(".halftubeWidthPVXinput").value}`; 
        halftube.width = document.querySelector(".halftubeWidthPVXinput").value;
    });


    document.querySelector(".PVX-T").addEventListener("click", render)


    function render() {
        let weight = 0;
        let costTape = 0;
        let resultKilo;
        let resultOrder;

        if (halftube.shape == "Полурукав") {
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

            resultKilo = (costTape / weight).toFixed(2) + "руб.";
            resultOrder = (costTape * onlyNumbers(halftube.halftubeCount)).toFixed(2)+ "руб.";

        }

        if (halftube.shape == "Рукав" || halftube.shape == "Полотно") {
            if (halftube.width < 150) {
                halftube.width = 150 + "мм";
            } else {
                halftube.width = halftube.width + "мм";
            }
            resultKilo = "Цена по запросу";  
            resultOrder = "Цена по запросу"; 
        }

        let markup = get_markup(halftube.shape, halftube.thickness, halftube.width, halftube.length, halftube.halftubeCount, resultKilo, resultOrder, "ПВХ-Т","pvxSend");
        document.querySelector(".PVX-TBody").innerHTML = markup;
            
    }
    
}());

(function calcPOF() {
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
        'halftubeCount': 1,
        'cost': 235,
    };

    document.querySelector("#accordionPOF").addEventListener("click", event => {
        if (event.target.matches("input.formPof")) {   
            clear(halftube,halftube.cost, "POF");
            document.querySelector("#resultFormPOF").innerHTML = `&nbsp; ${event.target.value}`; 
            halftube.shape = event.target.value 
        } else if (event.target.matches("input.halftubeThickness")) {    
            
            document.querySelector("#resultMicronPOF").innerHTML = `&nbsp; ${event.target.value}`; 
            halftube.thickness = event.target.value 
        } else if (event.target.matches("input.halftubeWidth")) {
            
            document.querySelector("#resultHalftubeWidthPOF").innerHTML = `&nbsp; ${event.target.value}`; 
            halftube.width = event.target.value
        } else if (event.target.matches("input.halftubeLength")) {
            
            document.querySelector("#resultHalftubeLengthPOF").innerHTML = `&nbsp; ${event.target.value}`; 
            halftube.length = event.target.value
        }
 
    });

    document.querySelector("#accordionPOF").addEventListener("input", () => {
        document.querySelector("#resultHalftubeCountPOF").innerHTML = `&nbsp; ${document.querySelector(".halftubeCountPOF").value}`; 
        halftube.halftubeCount = document.querySelector(".halftubeCountPOF").value;

        document.querySelector("#resultHalftubeWidthPOF").innerHTML = `&nbsp; ${document.querySelector(".halftubeWidthPOFinput").value}`; 
        halftube.width = document.querySelector(".halftubeWidthPOFinput").value;
        
       
    });



    document.querySelector(".POF").addEventListener("click", render)


    function render() {
        let weight = 0;
        let costTape = 0;
        let resultKilo;
        let resultOrder;
        if (halftube.shape == "Полурукав") {
            
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

           

           
                resultKilo = (costTape / weight).toFixed(2) + "руб.";
                resultOrder = (costTape * onlyNumbers(halftube.halftubeCount)).toFixed(2)+ "руб.";
            
        }
        
        if (halftube.shape == "Рукав" || halftube.shape == "Полотно") {
            if (halftube.width < 150) {
                halftube.width = 150 + "мм";
            } else {
                halftube.width = halftube.width + "мм";
            }
            resultKilo = "Цена по запросу";  
            resultOrder = "Цена по запросу"; 
        }

        

        

        
        let markup = get_markup(halftube.shape, halftube.thickness, halftube.width, halftube.length, halftube.halftubeCount, resultKilo, resultOrder, "ПОФ", "pofSend");

            document.querySelector(".POF-body").innerHTML = markup;
        
            
    }
    
}());

(function calcPOFperf() {
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
        'halftubeCount': 10,
        'cost': 235,
    };

    document.querySelector("#accordionPOFperf").addEventListener("click", event => {
        if (event.target.matches("input.formPOFperf")) {  
            clear(halftube,halftube.cost, "POFperf",10); 
            document.querySelector("#resultFormPOFperf").innerHTML = `&nbsp; ${event.target.value}`; 
            halftube.shape = event.target.value 
        } else if (event.target.matches("input.halftubeThickness")) {    
            document.querySelector("#resultMicronPOFperf").innerHTML = `&nbsp; ${event.target.value}`; 
            halftube.thickness = event.target.value 
        } else if (event.target.matches("input.halftubeWidth")) {
            document.querySelector("#resultHalftubeWidthPOFperf").innerHTML = `&nbsp; ${event.target.value}`; 
            halftube.width = event.target.value
        } else if (event.target.matches("input.halftubeLength")) {
            document.querySelector("#resultHalftubeLengthPOFperf").innerHTML = `&nbsp; ${event.target.value}`; 
            halftube.length = event.target.value
        }

    });

    document.querySelector("#accordionPOFperf").addEventListener("input", () => {
        document.querySelector("#resultHalftubeCountPOFperf").innerHTML = `&nbsp; ${document.querySelector(".halftubeCountPOFperf").value}`; 
        halftube.halftubeCount = document.querySelector(".halftubeCountPOFperf").value;
    
        document.querySelector("#resultHalftubeWidthPOFperf").innerHTML = `&nbsp; ${document.querySelector(".halftubeWidthPOFperfinput").value}`; 
        halftube.width = document.querySelector(".halftubeWidthPOFperfinput").value;
        
        document.querySelector("#resultHalftubeLengthPOFperf").innerHTML = `&nbsp; ${document.querySelector(".halftubeLengthPOFperfinput").value}`; 
        halftube.length = document.querySelector(".halftubeLengthPOFperfinput").value + "м";
    });

    document.querySelector(".POFperf").addEventListener("click", render)

    function render() {
        let weight = 0;
        let costTape = 0;
        let resultKilo;
        let resultOrder;
        console.log(halftube);
        if (halftube.shape == "Полурукав") {
            if (document.querySelector("input.halftubeCount").value >= 10)  {

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
            resultKilo = (costTape / weight).toFixed(2) + "руб.";
            resultOrder = (costTape * onlyNumbers(halftube.halftubeCount)).toFixed(2)+ "руб.";
            
        }

        if (halftube.shape == "Рукав" || halftube.shape == "Полотно") {
            if (halftube.width < 150) {
                halftube.width = 150 + "мм";
            } else {
                halftube.width = halftube.width + "мм";
            }
            resultKilo = "Цена по запросу";  
            resultOrder = "Цена по запросу"; 
        }

        

        let markup = get_markup(halftube.shape, halftube.thickness, halftube.width, halftube.length, halftube.halftubeCount, resultKilo, resultOrder, "ПОФ-Перфорированный", "pofPerfsend");

            document.querySelector(".POFperf-body").innerHTML = markup;
        
        
        
            
    }
    
}());

(function calcPvxLite() {
    let ratio = {
        '1-20': 5.39,
        '21-49': 5.06,
        '50': 4.73,
    }
    let weight_15 = {
        250: 5.90,
        300: 7.00,
        350: 8.20,
        400: 9.30,
        450: 10.50,
        500: 11.70,
    }

    

    let halftube = {
        'shape': '',
        'thickness': '' ,
        'width': '',
        'length': '',
        'halftubeCount': 1,
        'cost': 68,
    };

    document.querySelector("#accordionPVXLite").addEventListener("click", event => {
        if (event.target.matches("input.formPVXLite")) { 
            clear(halftube,halftube.cost, "PVXLite");  
            document.querySelector("#resultFormPVXLite").innerHTML = `&nbsp; ${event.target.value}`; 
            halftube.shape = event.target.value

        } else if (event.target.matches("input.halftubeThickness")) { 
            document.querySelector("#resultMicronPVXLite").innerHTML = `&nbsp; ${event.target.value}`; 
            halftube.thickness = event.target.value

        } else if (event.target.matches("input.halftubeWidth")) {
            document.querySelector("#resultHalftubeWidthPVXLite").innerHTML = `&nbsp; ${event.target.value}`; 
            halftube.width = event.target.value

        } else if (event.target.matches("input.halftubeLength")) {
            document.querySelector("#resultHalftubeLengthPVXLite").innerHTML = `&nbsp; ${event.target.value}`; 
            halftube.length = event.target.value

        }

    });

    document.querySelector("#accordionPVXLite").addEventListener("input", () => {
        document.querySelector("#resultHalftubeCountPVXLite").innerHTML = `&nbsp; ${document.querySelector(".halftubeCountPVXLite").value}`; 
        halftube.halftubeCount = document.querySelector(".halftubeCountPVXLite").value;
    
        document.querySelector("#resultHalftubeWidthPVXLite").innerHTML = `&nbsp; ${document.querySelector(".halftubeWidthPVXLiteinput").value}`; 
        halftube.width = document.querySelector(".halftubeWidthPVXLiteinput").value;
    });


    document.querySelector(".PVXLite").addEventListener("click", render)


    function render() {
        let weight = 0;
        let costTape = 0;
        let resultKilo;
        let resultOrder;

        if (halftube.shape == "Полурукав") {
            if (document.querySelector("input.halftubeCount").value <= 20 && document.querySelector("input.halftubeCount").value >= 1)  {
                if (onlyNumbers(halftube.thickness) == 15) {
                    costTape = halftube.cost * ratio["1-20"] * weight_15[onlyNumbers(halftube.width)];  
                    weight = weight_15[onlyNumbers(halftube.width)]; 
                }
            }

            if (document.querySelector("input.halftubeCount").value <= 49 && document.querySelector("input.halftubeCount").value >= 21) {
                if (onlyNumbers(halftube.thickness) == 15) {
                    costTape = halftube.cost * ratio["21-49"] * weight_15[onlyNumbers(halftube.width)];  
                    weight = weight_15[onlyNumbers(halftube.width)]; 
                }
                            
            } 

            if (document.querySelector("input.halftubeCount").value >= 50) {
                if (onlyNumbers(halftube.thickness) == 15) {
                    costTape = halftube.cost * ratio["50"] * weight_15[onlyNumbers(halftube.width)];  
                    weight = weight_15[onlyNumbers(halftube.width)]; 
                }           
            } 

            resultKilo = (costTape / weight).toFixed(2) + "руб.";
            resultOrder = (costTape * onlyNumbers(halftube.halftubeCount)).toFixed(2)+ "руб.";

        }

        if (halftube.shape == "Рукав" || halftube.shape == "Полотно") {
            if (halftube.width < 150) {
                halftube.width = 150 + "мм";
            } else {
                halftube.width = halftube.width + "мм";
            }
            resultKilo = "Цена по запросу";  
            resultOrder = "Цена по запросу"; 
        }

        let markup = get_markup(halftube.shape, halftube.thickness, halftube.width, halftube.length, halftube.halftubeCount, resultKilo, resultOrder, "ПВХ-Lite", "PVXLiteSend");

            document.querySelector(".PVXLite-body").innerHTML = markup;
        
            
    }
    
}());
