document.querySelector(".formPVXWrapper").addEventListener("click", event => {

    if (event.target.matches(".formPVX")) {
        if (event.target.value == "Полурукав" ) {
            let micronWrapperPVX = document.querySelector(".micronWrapperPVX");
            micronWrapperPVX.innerHTML = `
            <input type="button" class="btn btn-primary halftubeThickness halftubeThicknessPVX" value="15 мкм">
            <input type="button" class="btn btn-primary halftubeThickness halftubeThicknessPVX" value="19 мкм">
            <input type="button" class="btn btn-primary halftubeThickness halftubeThicknessPVX" value="25 мкм">
                `;

            document.querySelector(".micronWrapperPVX").addEventListener("click", event => {
                let widthWrapper = document.querySelector(".halftubeWidthWrapper");
                let lengthWrapper = document.querySelector(".halftubeLengthWrapper");
                let countWrapper = document.querySelector(".halftubeCountWrapper");


                if (event.target.matches(".halftubeThickness")) {
                    console.log(event.target.value);
                    if (event.target.value == "15 мкм") {
                        widthWrapper.innerHTML = `
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPVX" value="150 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPVX" value="200 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPVX" value="250 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPVX" value="300 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPVX" value="350 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPVX" value="400 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPVX" value="450 мм">`;
                    
                        lengthWrapper.innerHTML = `<input type="button" class="btn btn-primary halftubeLength halftubeLengthPVX" value="750 м">`;
                    
                        countWrapper.innerHTML = `<span class='input-group-text' id='basic-addon1'><i class='bi bi-braces-asterisk'></i></span> 
                                                <input type='text' class='form-control halftubeCount halftubeCountPVX' placeholder='1' aria-label='1' aria-describedby='basic-addon1'>`; 
                    } 
            
                    if (event.target.value == "19 мкм") {
                        widthWrapper.innerHTML = `
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPVX" value="250 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPVX" value="350 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPVX" value="450 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPVX" value="500 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPVX" value="550 мм">`;
            
                        lengthWrapper.innerHTML = `<input type="button" class="btn btn-primary halftubeLength halftubeLengthPVX" value="630 м">`;
            
                        countWrapper.innerHTML = `<span class="input-group-text" id="basic-addon1"><i class="bi bi-braces-asterisk"></i></span>
                                                <input type="text" class="form-control halftubeCount halftubeCountPVX" placeholder="1" aria-label="1" aria-describedby="basic-addon1">`;
                    }
            
                    if (event.target.value == "25 мкм") {
                        widthWrapper.innerHTML = `
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPVX" value="300 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPVX" value="350 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPVX" value="400 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPVX" value="450 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPVX" value="500 мм">`;
            
                        lengthWrapper.innerHTML = `<input type="button" class="btn btn-primary halftubeLength halftubeLengthPVX" value="480 м">`;
            
                        countWrapper.innerHTML = `<span class="input-group-text" id="basic-addon1"><i class="bi bi-braces-asterisk"></i></span>
                                                <input type="text" class="form-control halftubeCount halftubeCountPVX" placeholder="1" aria-label="1" aria-describedby="basic-addon1">`;
                    }
                }
            });
        }

        if (event.target.value == "Рукав" || event.target.value == "Полотно") {
            let micronWrapperPOF = document.querySelector(".micronWrapperPVX");
            micronWrapperPOF.innerHTML = `
                <input type="button" class="btn btn-primary halftubeThickness halftubeThicknessPVX" value="12,5 мкм">
                <input type="button" class="btn btn-primary halftubeThickness halftubeThicknessPVX" value="15 мкм">
                <input type="button" class="btn btn-primary halftubeThickness halftubeThicknessPVX" value="19 мкм">
                <input type="button" class="btn btn-primary halftubeThickness halftubeThicknessPVX halftubeThicknessPVX25" value="25 мкм">
                <input type="button" class="btn btn-primary halftubeThickness halftubeThicknessPVX" value="35 мкм">

                `;
            document.querySelector(".micronWrapperPVX").addEventListener("click", event => {
    
                let widthWrapper = document.querySelector(".halftubeWidthWrapperPVX");
                let lengthWrapper = document.querySelector(".halftubeLengthWrapperPVX");
                let countWrapper = document.querySelector(".halftubeCountWrapperPVX");
                
            
                if (event.target.matches(".halftubeThickness")) {
                    console.log(event.target.value);
                    if (event.target.value == "12,5 мкм" || event.target.value == "15 мкм" || event.target.value == "19 мкм" || event.target.value == "25 мкм" || event.target.value == "35 мкм") {
                        widthWrapper.innerHTML = `
                            <p style="color:rgb(255, 255, 255); text-align: center; margin:0;"><i class="bi bi-exclamation-circle"></i> Ширину можно указать от 150 мм</p>
                            <input type="text" class="form-control halftubeWidth halftubeWidthPVXinput" placeholder="1" value="150" aria-label="1" aria-describedby="basic-addon1" required >`;
                    
                        lengthWrapper.innerHTML = `<input type="button" class="btn btn-primary halftubeLength halftubeLengthPVX" value="500 м">`;
                    
                        countWrapper.innerHTML = `<span class='input-group-text' id='basic-addon1'><i class='bi bi-braces-asterisk'></i></span> 
                                                <input type='text' class='form-control halftubeCount halftubeCountPVX' placeholder='1'  value="1" aria-label='1' aria-describedby='basic-addon1' required >`; 
                    } 
                }
            });
        }
    }



    
});


document.querySelector(".formPOFWrapper").addEventListener("click", event => {

    if (event.target.matches(".formPof")) {
        if (event.target.value == "Полурукав" ) {
            let micronWrapperPOF = document.querySelector(".micronWrapperPOF");
            micronWrapperPOF.innerHTML = `
                <input type="button" class="btn btn-primary halftubeThickness halftubeThicknessPOF" value="12,5 мкм">
                <input type="button" class="btn btn-primary halftubeThickness halftubeThicknessPOF" value="15 мкм">
                <input type="button" class="btn btn-primary halftubeThickness halftubeThicknessPOF" value="19 мкм">
                <input type="button" class="btn btn-primary halftubeThickness halftubeThicknessPOF" value="23,5 мкм">
                <input type="button" class="btn btn-primary halftubeThickness halftubeThicknessPOF halftubeThicknessPOF25" value="25 мкм">
                `;
                
            document.querySelector(".micronWrapperPOF").addEventListener("click", event => {
                let widthWrapper = document.querySelector(".halftubeWidthWrapperPOF");
                let lengthWrapper = document.querySelector(".halftubeLengthWrapperPOF");
                let countWrapper = document.querySelector(".halftubeCountWrapperPOF");

                
                if (event.target.matches(".halftubeThickness")) {
                    console.log(event.target.value);
                    if (event.target.value == "12,5 мкм") {
                        widthWrapper.innerHTML = `
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="200 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="250 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="300 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="350 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="400 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="450 мм">`;
                    
                        lengthWrapper.innerHTML = `<input type="button" class="btn btn-primary halftubeLength halftubeLengthPOF" value="1000 м">`;
                    
                        countWrapper.innerHTML = `<span class='input-group-text' id='basic-addon1'><i class='bi bi-braces-asterisk'></i></span> 
                                                <input type='text' class='form-control halftubeCount halftubeCountPOF' placeholder='1' value="1" aria-label='1' aria-describedby='basic-addon1' required > `; 
                    } 
                    if (event.target.value == "15 мкм") {
                        widthWrapper.innerHTML = `
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="200 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="250 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="300 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="350 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="400 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="450 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="500 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="550 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="600 мм">`;
                    
                        lengthWrapper.innerHTML = `
                            <input type="button" class="btn btn-primary halftubeLength halftubeLengthPOF" value="750 м">
                            <input type="button" class="btn btn-primary halftubeLength halftubeLengthPOF" value="1250 м">`;
                    
                        countWrapper.innerHTML = `<span class='input-group-text' id='basic-addon1'><i class='bi bi-braces-asterisk'></i></span> 
                                                <input type='text' class='form-control halftubeCount halftubeCountPOF' placeholder='1' value="1" aria-label='1' aria-describedby='basic-addon1' required >`; 
                    } 
            
                    // let isConditionMet19 = false;
                    if (event.target.value == "19 мкм") {
                        widthWrapper.innerHTML = `
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="200 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="250 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="300 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="350 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="400 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="450 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="500 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="550 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="600 мм">`;
            
                        lengthWrapper.innerHTML = `
                            <input type="button" class="btn btn-primary halftubeLength halftubeLengthPOF" value="650 м">
                            <input type="button" class="btn btn-primary halftubeLength halftubeLengthPOF" value="1000 м">`;
            
                        countWrapper.innerHTML = `<span class="input-group-text" id="basic-addon1"><i class="bi bi-braces-asterisk"></i></span>
                                                <input type="text" class="form-control halftubeCount halftubeCountPOF" placeholder="1" value="1" aria-label="1" aria-describedby="basic-addon1" required >`;
                    }
            
            
                    if (event.target.value == "23,5 мкм") {
                        widthWrapper.innerHTML = `
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="400 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="450 мм">
                            <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="500 мм">`;
            
                        lengthWrapper.innerHTML = `
                            <input type="button" class="btn btn-primary halftubeLength halftubeLengthPOF" value="800 м">`;
            
                        countWrapper.innerHTML = `<span class="input-group-text" id="basic-addon1"><i class="bi bi-braces-asterisk"></i></span>
                                                <input type="text" class="form-control halftubeCount halftubeCountPOF" placeholder="1"  value="1" aria-label="1" aria-describedby="basic-addon1" required >`;
                    }
            
            
                    let isConditionMet25 = false;
            
                    if (event.target.value == "25 мкм") {
                        lengthWrapper.innerHTML = `
                        <input type="button" class="btn btn-primary halftubeLength halftubeLengthPOF" value="600 м">
                            <input type="button" class="btn btn-primary halftubeLength halftubeLengthPOF" value="800 м">
                            `;
                            widthWrapper.innerHTML = `
                            <p style="color: rgba(255, 255, 255, 0.800);">Выберите длинну пленки.</p>
                            `;
                            countWrapper.innerHTML = `
                            <p style="color: rgba(255, 255, 255, 0.800);">Выберите длинну пленки.</p>
                            `;
                        isConditionMet25 = true;
                    }
                    
                    if (isConditionMet25) {
                        document.addEventListener("click", e => {
                        
                        if (document.querySelector(".halftubeThicknessPOF25").classList.contains("active_btn")) {
                            if (e.target.value == "800 м") {
                                widthWrapper.innerHTML = `
                                <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="300 мм">
                                <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="450 мм">
                                <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="550 мм">
                                `;
                                countWrapper.innerHTML = `<span class="input-group-text" id="basic-addon1"><i class="bi bi-braces-asterisk"></i></span>
                                                <input type="text" class="form-control halftubeCount halftubeCountPOF" placeholder="1"  value="1" aria-label="1" aria-describedby="basic-addon1" required >`;
                                
                            }
                            if (e.target.value == "600 м") {
                                widthWrapper.innerHTML = `
                                <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="350 мм">
                                <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="400 мм">
                                <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="450 мм">
                                <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="500 мм">
                                `;
                                countWrapper.innerHTML = `<span class="input-group-text" id="basic-addon1"><i class="bi bi-braces-asterisk"></i></span>
                                                <input type="text" class="form-control halftubeCount halftubeCountPOF" placeholder="1" value="1" aria-label="1" aria-describedby="basic-addon1" required >`;
                                
                            } 
                        }
                            
                        });
                    }
                    
                }
            });
        }

        if (event.target.value == "Рукав" || event.target.value == "Полотно") {
            let micronWrapperPOF = document.querySelector(".micronWrapperPOF");
            micronWrapperPOF.innerHTML = `
                <input type="button" class="btn btn-primary halftubeThickness halftubeThicknessPOF" value="12,5 мкм">
                <input type="button" class="btn btn-primary halftubeThickness halftubeThicknessPOF" value="15 мкм">
                <input type="button" class="btn btn-primary halftubeThickness halftubeThicknessPOF" value="19 мкм">
                <input type="button" class="btn btn-primary halftubeThickness halftubeThicknessPOF halftubeThicknessPOF25" value="25 мкм">
                <input type="button" class="btn btn-primary halftubeThickness halftubeThicknessPOF" value="35 мкм">

                `;
            document.querySelector(".micronWrapperPOF").addEventListener("click", event => {
    
                let widthWrapper = document.querySelector(".halftubeWidthWrapperPOF");
                let lengthWrapper = document.querySelector(".halftubeLengthWrapperPOF");
                let countWrapper = document.querySelector(".halftubeCountWrapperPOF");
                
            
                if (event.target.matches(".halftubeThickness")) {
                    console.log(event.target.value);
                    if (event.target.value == "12,5 мкм" || event.target.value == "15 мкм" || event.target.value == "19 мкм" || event.target.value == "25 мкм" || event.target.value == "35 мкм") {
                        widthWrapper.innerHTML = `
                            <p style="color:rgb(255, 255, 255); text-align: center; margin:0;"><i class="bi bi-exclamation-circle"></i> Ширину можно указать от 150 мм</p>
                            <input type="text" class="form-control halftubeWidth halftubeWidthPOFinput" placeholder="1" value="150" aria-label="1" aria-describedby="basic-addon1" required >`;
                    
                        lengthWrapper.innerHTML = `<input type="button" class="btn btn-primary halftubeLength halftubeLengthPOF" value="500 м">`;
                    
                        countWrapper.innerHTML = `<span class='input-group-text' id='basic-addon1'><i class='bi bi-braces-asterisk'></i></span> 
                                                <input type='text' class='form-control halftubeCount halftubeCountPOF' placeholder='1'  value="1" aria-label='1' aria-describedby='basic-addon1' required >`; 
                    } 
                }
            });
        }

    }
});


document.querySelector(".formPOFperfWrapper").addEventListener("click", event => {

    if (event.target.matches(".formPOFperf")) {
        if (event.target.value == "Полурукав" ) {
            let micronWrapperPOFperf = document.querySelector(".micronWrapperPOFperf");
            micronWrapperPOFperf.innerHTML = `
                <input type="button" class="btn btn-primary halftubeThickness halftubeThicknessPOFperf" value="12,5 мкм">
                <input type="button" class="btn btn-primary halftubeThickness halftubeThicknessPOFperf" value="15 мкм">
                <input type="button" class="btn btn-primary halftubeThickness halftubeThicknessPOFperf" value="19 мкм">
                <input type="button" class="btn btn-primary halftubeThickness halftubeThicknessPOFperf" value="23,5 мкм">
                <input type="button" class="btn btn-primary halftubeThickness halftubeThicknessPOFperf halftubeThicknessPOFperf25" value="25 мкм">
                `;
            document.querySelector(".micronWrapperPOFperf").addEventListener("click", event => {
            let widthWrapper = document.querySelector(".halftubeWidthWrapperPOFperf");
            let lengthWrapper = document.querySelector(".halftubeLengthWrapperPOFperf");
            let countWrapper = document.querySelector(".halftubeCountWrapperPOFperf");



            if (event.target.matches(".halftubeThickness")) {
                console.log(event.target.value);
                if (event.target.value == "12,5 мкм") {
                    widthWrapper.innerHTML = `
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="200 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="250 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="300 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="350 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="400 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="450 мм">`;
                
                    lengthWrapper.innerHTML = `<input type="button" class="btn btn-primary halftubeLength halftubeLengthPOFperf" value="1000 м">`;
                
                    countWrapper.innerHTML = `
                    <span class='input-group-text' id='basic-addon1'><i class='bi bi-braces-asterisk'></i></span> 
                                            <input type='text' class='form-control halftubeCount halftubeCountPOFperf' placeholder='10' value="10" aria-label='10' aria-describedby='basic-addon1' required >`; 
                } 
                if (event.target.value == "15 мкм") {
                    widthWrapper.innerHTML = `
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="200 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="250 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="300 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="350 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="400 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="450 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="500 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="550 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="600 мм">`;
                
                    lengthWrapper.innerHTML = `
                        <input type="button" class="btn btn-primary halftubeLength halftubeLengthPOFperf" value="750 м">
                        <input type="button" class="btn btn-primary halftubeLength halftubeLengthPOFperf" value="1250 м">`;
                
                    countWrapper.innerHTML = `
                    <span class='input-group-text' id='basic-addon1'><i class='bi bi-braces-asterisk'></i></span> 
                                            <input type='text' class='form-control halftubeCount halftubeCountPOFperf' placeholder='10' value="10" aria-label='10' aria-describedby='basic-addon1' required >`; 
                } 


                if (event.target.value == "19 мкм") {
                    widthWrapper.innerHTML = `
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="200 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="250 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="300 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="350 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="400 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="450 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="500 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="550 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="600 мм">`;
                
                    lengthWrapper.innerHTML = `
                        <input type="button" class="btn btn-primary halftubeLength halftubeLengthPOFperf" value="650 м">
                        <input type="button" class="btn btn-primary halftubeLength halftubeLengthPOFperf" value="1000 м">`;
                
                    countWrapper.innerHTML = `
                    <span class='input-group-text' id='basic-addon1'><i class='bi bi-braces-asterisk'></i></span> 
                                            <input type='text' class='form-control halftubeCount halftubeCountPOFperf' placeholder='10' value="10" aria-label='10' aria-describedby='basic-addon1' required >`; 
                } 

                if (event.target.value == "23,5 мкм") {
                    widthWrapper.innerHTML = `
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="400 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="450 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="500 мм">`;

                    lengthWrapper.innerHTML = `
                        <input type="button" class="btn btn-primary halftubeLength halftubeLengthPOFperf" value="400 м">
                        <input type="button" class="btn btn-primary halftubeLength halftubeLengthPOFperf" value="800 м">`;

                    countWrapper.innerHTML = `
                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-braces-asterisk"></i></span>
                                            <input type="text" class="form-control halftubeCount halftubeCountPOFperf" placeholder="10" value="10" aria-label="10" aria-describedby="basic-addon1" required >`;
                }

                if (event.target.value == "25 мкм") {
                    widthWrapper.innerHTML = `
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="300 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="350 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="400 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="450 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="500 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="550 мм">`;

                    lengthWrapper.innerHTML = `
                        <input type="button" class="btn btn-primary halftubeLength halftubeLengthPOFperf" value="400 м">
                        <input type="button" class="btn btn-primary halftubeLength halftubeLengthPOFperf" value="600 м">
                        <input type="button" class="btn btn-primary halftubeLength halftubeLengthPOFperf" value="800 м">`;

                    countWrapper.innerHTML = `
                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-braces-asterisk"></i></span>
                                            <input type="text" class="form-control halftubeCount halftubeCountPOFperf" placeholder="10" value="10" aria-label="10" aria-describedby="basic-addon1" required >`;
                }

                if (event.target.value == "35 мкм") {
                    widthWrapper.innerHTML = `
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="150 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="200 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="250 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="300 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="450 мм">`;

                    lengthWrapper.innerHTML = `
                        <input type="button" class="btn btn-primary halftubeLength halftubeLengthPOFperf" value="750 м">`;

                    countWrapper.innerHTML = `
                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-braces-asterisk"></i></span>
                    <input type="text" class="form-control halftubeCount halftubeCountPOFperf" placeholder="10" value="10" aria-label="10" aria-describedby="basic-addon1" required >`;
                }
            }
            });    
        }

        if (event.target.value == "Рукав" || event.target.value == "Полотно") {
            let micronWrapperPOFperf = document.querySelector(".micronWrapperPOFperf");
            micronWrapperPOFperf.innerHTML = `
                <input type="button" class="btn btn-primary halftubeThickness halftubeThicknessPOFperf" value="12,5 мкм">
                <input type="button" class="btn btn-primary halftubeThickness halftubeThicknessPOFperf" value="15 мкм">
                <input type="button" class="btn btn-primary halftubeThickness halftubeThicknessPOFperf" value="19 мкм">
                <input type="button" class="btn btn-primary halftubeThickness halftubeThicknessPOFperf" value="25 мкм">
                <input type="button" class="btn btn-primary halftubeThickness halftubeThicknessPOFperf halftubeThicknessPOFperf25" value="35 мкм">
                `;

                document.querySelector(".micronWrapperPOFperf").addEventListener("click", event => {
    
                let widthWrapper = document.querySelector(".halftubeWidthWrapperPOFperf");
                let lengthWrapper = document.querySelector(".halftubeLengthWrapperPOFperf");
                let countWrapper = document.querySelector(".halftubeCountWrapperPOFperf");
                
            
                if (event.target.matches(".halftubeThickness")) {
                    console.log(event.target.value);
                    if (event.target.value == "12,5 мкм" || event.target.value == "15 мкм" || event.target.value == "19 мкм" || event.target.value == "25 мкм" || event.target.value == "35 мкм") {
                        widthWrapper.innerHTML = `
                            <p style="color:rgb(255, 255, 255); text-align: center; margin:0;"><i class="bi bi-exclamation-circle"></i> Ширину можно указать от 150 мм</p>
                            <input type="text" class="form-control halftubeWidth halftubeWidthPOFperfinput" placeholder="150" value="150" aria-label="1" aria-describedby="basic-addon1" required >`;
                    
                        lengthWrapper.innerHTML = `
                        <input type="button" class="btn btn-primary halftubeLength halftubeLengthPOF" value="500 м">`;
                    
                        countWrapper.innerHTML = `<span class='input-group-text' id='basic-addon1'><i class='bi bi-braces-asterisk'></i></span> 
                                                <input type='text' class='form-control halftubeCount halftubeCountPOFperf' placeholder='10' value="10" aria-label='10' aria-describedby='basic-addon1' required >`; 
                    } 
                }
                });
        }
        
    }

});



document.querySelector(".formPVXLiteWrapper").addEventListener("click", event => {

    if (event.target.matches(".formPVXLite")) {
        if (event.target.value == "Полурукав" ) {
            let micronWrapperPVXLite = document.querySelector(".micronWrapperPVXLite");
            micronWrapperPVXLite.innerHTML = `
                <input type="button" class="btn btn-primary halftubeThickness halftubeThicknessPVXLite" value="15 мкм">`;

            document.querySelector(".micronWrapperPVXLite").addEventListener("click", event => {
                let widthWrapper = document.querySelector(".halftubeWidthWrapperPVXLite");
                let lengthWrapper = document.querySelector(".halftubeLengthWrapperPVXLite");
                let countWrapper = document.querySelector(".halftubeCountWrapperPVXLite");


                if (event.target.matches(".halftubeThicknessPVXLite")) {
                    console.log(event.target.value);
                    if (event.target.value == "15 мкм") {
                        widthWrapper.innerHTML = `
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPVXLite" value="250 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPVXLite" value="300 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPVXLite" value="350 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPVXLite" value="400 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPVXLite" value="450 мм">
                        <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPVXLite" value="500 мм">`;
                    
                        lengthWrapper.innerHTML = `<input type="button" class="btn btn-primary halftubeLength halftubeLengthPVXLite" value="600 м">`;
                    
                        countWrapper.innerHTML = ` <span class="input-group-text" id="basic-addon1"><i class="bi bi-braces-asterisk"></i></span>
                        <input type="text" class="form-control halftubeCount halftubeCountPVXLite" placeholder="123" aria-label="123" aria-describedby="basic-addon1">`; 
                    } 
            
                }
            });
        }

        if (event.target.value == "Рукав" || event.target.value == "Полотно") {
            let micronWrapperPVXLite = document.querySelector(".micronWrapperPVXLite");
            micronWrapperPVXLite.innerHTML = `
                <input type="button" class="btn btn-primary halftubeThickness halftubeThicknessPVXLite" value="12,5 мкм">
                <input type="button" class="btn btn-primary halftubeThickness halftubeThicknessPVXLite" value="15 мкм">
                <input type="button" class="btn btn-primary halftubeThickness halftubeThicknessPVXLite" value="19 мкм">
                <input type="button" class="btn btn-primary halftubeThickness halftubeThicknessPVXLite halftubeThicknessPVXLite25" value="25 мкм">
                <input type="button" class="btn btn-primary halftubeThickness halftubeThicknessPVXLite" value="35 мкм">

                `;
            document.querySelector(".micronWrapperPVXLite").addEventListener("click", event => {
    
                let widthWrapper = document.querySelector(".halftubeWidthWrapperPVXLite");
                let lengthWrapper = document.querySelector(".halftubeLengthWrapperPVXLite");
                let countWrapper = document.querySelector(".halftubeCountWrapperPVXLite");
                
            
                if (event.target.matches(".halftubeThicknessPVXLite")) {
                    console.log(event.target.value);
                    if (event.target.value == "12,5 мкм" || event.target.value == "15 мкм" || event.target.value == "19 мкм" || event.target.value == "25 мкм" || event.target.value == "35 мкм") {
                        widthWrapper.innerHTML = `
                            <p style="color:rgb(255, 255, 255); text-align: center; margin:0;"><i class="bi bi-exclamation-circle"></i> Ширину можно указать от 150 мм</p>
                            <input type="text" class="form-control halftubeWidth halftubeWidthPVXLiteinput" placeholder="1" value="150" aria-label="1" aria-describedby="basic-addon1" required >`;
                    
                        lengthWrapper.innerHTML = `<input type="button" class="btn btn-primary halftubeLength halftubeLengthPVXLite" value="500 м">`;
                    
                        countWrapper.innerHTML = `<span class='input-group-text' id='basic-addon1'><i class='bi bi-braces-asterisk'></i></span> 
                                                <input type='text' class='form-control halftubeCount halftubeCountPVXLite' placeholder='1'  value="1" aria-label='1' aria-describedby='basic-addon1' required >`; 
                    } 
                }
            });
        }
    }



    
});





