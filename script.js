document.querySelector(".micronWrapper").addEventListener("click", event => {
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
                                    <input type='text' class='form-control halftubeCount' placeholder='1' aria-label='1' aria-describedby='basic-addon1'>`; 
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
                                    <input type="text" class="form-control halftubeCount" placeholder="1" aria-label="1" aria-describedby="basic-addon1">`;
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
                                    <input type="text" class="form-control halftubeCount" placeholder="1" aria-label="1" aria-describedby="basic-addon1">`;
        }
    }
});

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
                                    <input type='text' class='form-control halftubeCount' placeholder='1' aria-label='1' aria-describedby='basic-addon1'>`; 
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
                                    <input type='text' class='form-control halftubeCount' placeholder='1' aria-label='1' aria-describedby='basic-addon1'>`; 
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
                                    <input type="text" class="form-control halftubeCount" placeholder="1" aria-label="1" aria-describedby="basic-addon1">`;
        }


        if (event.target.value == "23,5 мкм") {
            widthWrapper.innerHTML = `
                <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="400 мм">
                <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="450 мм">
                <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="500 мм">`;

            lengthWrapper.innerHTML = `
                <input type="button" class="btn btn-primary halftubeLength halftubeLengthPOF" value="800 м">`;

            countWrapper.innerHTML = `<span class="input-group-text" id="basic-addon1"><i class="bi bi-braces-asterisk"></i></span>
                                    <input type="text" class="form-control halftubeCount" placeholder="1" aria-label="1" aria-describedby="basic-addon1">`;
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
                                    <input type="text" class="form-control halftubeCount" placeholder="1" aria-label="1" aria-describedby="basic-addon1">`;
                    
                }
                if (e.target.value == "600 м") {
                    widthWrapper.innerHTML = `
                    <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="350 мм">
                    <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="400 мм">
                    <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="450 мм">
                    <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOF" value="500 мм">
                    `;
                    countWrapper.innerHTML = `<span class="input-group-text" id="basic-addon1"><i class="bi bi-braces-asterisk"></i></span>
                                    <input type="text" class="form-control halftubeCount" placeholder="1" aria-label="1" aria-describedby="basic-addon1">`;
                    
                } 
            }
                
            });
        }
        
    }
});

document.querySelector(".micronWrapperPOFperf").addEventListener("click", event => {
    let widthWrapper = document.querySelector(".halftubeWidthWrapperPOFperf");
    let lengthWrapper = document.querySelector(".halftubeLengthWrapperPOFperf");
    let countWrapper = document.querySelector(".halftubeCountWrapperPOFperf");
    if (event.target.matches(".halftubeThickness")) {
        console.log(event.target.value);
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
        
            countWrapper.innerHTML = `<span class='input-group-text' id='basic-addon1'><i class='bi bi-braces-asterisk'></i></span> 
                                    <input type='text' class='form-control halftubeCount' placeholder='1' aria-label='1' aria-describedby='basic-addon1'>`; 
        } 

        if (event.target.value == "23,5 мкм") {
            widthWrapper.innerHTML = `
                <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="400 мм">
                <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="450 мм">
                <input type="button" class="btn btn-primary halftubeWidth halftubeWidthPOFperf" value="500 мм">`;

            lengthWrapper.innerHTML = `
                <input type="button" class="btn btn-primary halftubeLength halftubeLengthPOFperf" value="400 м">
                <input type="button" class="btn btn-primary halftubeLength halftubeLengthPOFperf" value="800 м">`;

            countWrapper.innerHTML = `<span class="input-group-text" id="basic-addon1"><i class="bi bi-braces-asterisk"></i></span>
                                    <input type="text" class="form-control halftubeCount" placeholder="1" aria-label="1" aria-describedby="basic-addon1">`;
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

            countWrapper.innerHTML = `<span class="input-group-text" id="basic-addon1"><i class="bi bi-braces-asterisk"></i></span>
                                    <input type="text" class="form-control halftubeCount" placeholder="1" aria-label="1" aria-describedby="basic-addon1">`;
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

            countWrapper.innerHTML = `<span class="input-group-text" id="basic-addon1"><i class="bi bi-braces-asterisk"></i></span>
                                    <input type="text" class="form-control halftubeCount" placeholder="1" aria-label="1" aria-describedby="basic-addon1">`;
        }
    }
});
