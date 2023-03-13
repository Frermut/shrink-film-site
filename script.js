document.querySelector(".micronWrapper").addEventListener("click", event => {
    let widthWrapper = document.querySelector(".halftubeWidthWrapper");
    let lengthWrapper = document.querySelector(".halftubeLengthWrapper");
    let countWrapper = document.querySelector(".halftubeCountWrapper");
    if (event.target.matches(".halftubeThickness")) {
        console.log(event.target.value);
        if (event.target.value == "15 мкм") {
            widthWrapper.innerHTML = `
                <input type="button" class="btn btn-primary halftubeWidth" value="150 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="200 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="250 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="300 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="350 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="400 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="450 мм">`;
        
            lengthWrapper.innerHTML = `<input type="button" class="btn btn-primary halftubeLength" value="750 м">`;
        
            countWrapper.innerHTML = `<span class='input-group-text' id='basic-addon1'><i class='bi bi-braces-asterisk'></i></span> 
                                    <input type='text' class='form-control halftubeCount' placeholder='123' aria-label='123' aria-describedby='basic-addon1'>`; 
        } 

        if (event.target.value == "19 мкм") {
            widthWrapper.innerHTML = `
                <input type="button" class="btn btn-primary halftubeWidth" value="250 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="350 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="450 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="500 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="550 мм">`;

            lengthWrapper.innerHTML = `<input type="button" class="btn btn-primary halftubeLength" value="630 м">`;

            countWrapper.innerHTML = `<span class="input-group-text" id="basic-addon1"><i class="bi bi-braces-asterisk"></i></span>
                                    <input type="text" class="form-control halftubeCount" placeholder="123" aria-label="123" aria-describedby="basic-addon1">`;
        }

        if (event.target.value == "25 мкм") {
            widthWrapper.innerHTML = `
                <input type="button" class="btn btn-primary halftubeWidth" value="300 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="350 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="400 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="450 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="500 мм">`;

            lengthWrapper.innerHTML = `<input type="button" class="btn btn-primary halftubeLength" value="480 м">`;

            countWrapper.innerHTML = `<span class="input-group-text" id="basic-addon1"><i class="bi bi-braces-asterisk"></i></span>
                                    <input type="text" class="form-control halftubeCount" placeholder="123" aria-label="123" aria-describedby="basic-addon1">`;
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
                <input type="button" class="btn btn-primary halftubeWidth" value="350 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="400 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="450 мм">`;
        
            lengthWrapper.innerHTML = `<input type="button" class="btn btn-primary halftubeLength" value="1000 м">`;
        
            countWrapper.innerHTML = `<span class='input-group-text' id='basic-addon1'><i class='bi bi-braces-asterisk'></i></span> 
                                    <input type='text' class='form-control halftubeCount' placeholder='123' aria-label='123' aria-describedby='basic-addon1'>`; 
        } 
        if (event.target.value == "15 мкм") {
            widthWrapper.innerHTML = `
                <input type="button" class="btn btn-primary halftubeWidth" value="200 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="250 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="300 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="350 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="400 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="450 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="500 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="550 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="600 мм">`;
        
            lengthWrapper.innerHTML = `
                <input type="button" class="btn btn-primary halftubeLength" value="750 м">
                <input type="button" class="btn btn-primary halftubeLength" value="1250 м">`;
        
            countWrapper.innerHTML = `<span class='input-group-text' id='basic-addon1'><i class='bi bi-braces-asterisk'></i></span> 
                                    <input type='text' class='form-control halftubeCount' placeholder='123' aria-label='123' aria-describedby='basic-addon1'>`; 
        } 

        if (event.target.value == "19 мкм") {
            widthWrapper.innerHTML = `
                <input type="button" class="btn btn-primary halftubeWidth" value="200 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="250 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="300 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="350 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="400 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="450 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="500 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="550 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="600 мм">`;

            lengthWrapper.innerHTML = `
                <input type="button" class="btn btn-primary halftubeLength" value="650 м">
                <input type="button" class="btn btn-primary halftubeLength" value="1000 м">`;

            countWrapper.innerHTML = `<span class="input-group-text" id="basic-addon1"><i class="bi bi-braces-asterisk"></i></span>
                                    <input type="text" class="form-control halftubeCount" placeholder="123" aria-label="123" aria-describedby="basic-addon1">`;
        }

        if (event.target.value == "23,5 мкм") {
            widthWrapper.innerHTML = `
                <input type="button" class="btn btn-primary halftubeWidth" value="400 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="450 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="500 мм">`;

            lengthWrapper.innerHTML = `
                <input type="button" class="btn btn-primary halftubeLength" value="400 м">
                <input type="button" class="btn btn-primary halftubeLength" value="800 м">`;

            countWrapper.innerHTML = `<span class="input-group-text" id="basic-addon1"><i class="bi bi-braces-asterisk"></i></span>
                                    <input type="text" class="form-control halftubeCount" placeholder="123" aria-label="123" aria-describedby="basic-addon1">`;
        }

        if (event.target.value == "25 мкм") {
            widthWrapper.innerHTML = `
                <input type="button" class="btn btn-primary halftubeWidth" value="300 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="350 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="400 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="450 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="500 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="550 мм">`;

            lengthWrapper.innerHTML = `
                <input type="button" class="btn btn-primary halftubeLength" value="400 м">
                <input type="button" class="btn btn-primary halftubeLength" value="600 м">
                <input type="button" class="btn btn-primary halftubeLength" value="800 м">`;

            countWrapper.innerHTML = `<span class="input-group-text" id="basic-addon1"><i class="bi bi-braces-asterisk"></i></span>
                                    <input type="text" class="form-control halftubeCount" placeholder="123" aria-label="123" aria-describedby="basic-addon1">`;
        }

        if (event.target.value == "35 мкм") {
            widthWrapper.innerHTML = `
                <input type="button" class="btn btn-primary halftubeWidth" value="150 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="200 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="250 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="300 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="450 мм">`;

            lengthWrapper.innerHTML = `
                <input type="button" class="btn btn-primary halftubeLength" value="750 м">`;

            countWrapper.innerHTML = `<span class="input-group-text" id="basic-addon1"><i class="bi bi-braces-asterisk"></i></span>
                                    <input type="text" class="form-control halftubeCount" placeholder="123" aria-label="123" aria-describedby="basic-addon1">`;
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
                <input type="button" class="btn btn-primary halftubeWidth" value="200 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="250 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="300 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="350 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="400 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="450 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="500 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="550 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="600 мм">`;
        
            lengthWrapper.innerHTML = `
                <input type="button" class="btn btn-primary halftubeLength" value="650 м">
                <input type="button" class="btn btn-primary halftubeLength" value="1000 м">`;
        
            countWrapper.innerHTML = `<span class='input-group-text' id='basic-addon1'><i class='bi bi-braces-asterisk'></i></span> 
                                    <input type='text' class='form-control halftubeCount' placeholder='123' aria-label='123' aria-describedby='basic-addon1'>`; 
        } 

        if (event.target.value == "23,5 мкм") {
            widthWrapper.innerHTML = `
                <input type="button" class="btn btn-primary halftubeWidth" value="400 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="450 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="500 мм">`;

            lengthWrapper.innerHTML = `<input type="button" class="btn btn-primary halftubeLength" value="400 м">
            <input type="button" class="btn btn-primary halftubeLength" value="800 м">`;

            countWrapper.innerHTML = `<span class="input-group-text" id="basic-addon1"><i class="bi bi-braces-asterisk"></i></span>
                                    <input type="text" class="form-control halftubeCount" placeholder="123" aria-label="123" aria-describedby="basic-addon1">`;
        }

        if (event.target.value == "25 мкм") {
            widthWrapper.innerHTML = `
                <input type="button" class="btn btn-primary halftubeWidth" value="300 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="350 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="400 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="450 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="500 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="550 мм">`;

            lengthWrapper.innerHTML = `
                <input type="button" class="btn btn-primary halftubeLength" value="400 м">
                <input type="button" class="btn btn-primary halftubeLength" value="600 м">
                <input type="button" class="btn btn-primary halftubeLength" value="800 м">`;

            countWrapper.innerHTML = `<span class="input-group-text" id="basic-addon1"><i class="bi bi-braces-asterisk"></i></span>
                                    <input type="text" class="form-control halftubeCount" placeholder="123" aria-label="123" aria-describedby="basic-addon1">`;
        }

        if (event.target.value == "35 мкм") {
            widthWrapper.innerHTML = `
                <input type="button" class="btn btn-primary halftubeWidth" value="150 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="200 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="250 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="300 мм">
                <input type="button" class="btn btn-primary halftubeWidth" value="450 мм">`;

            lengthWrapper.innerHTML = `
                <input type="button" class="btn btn-primary halftubeLength" value="750 м">`;

            countWrapper.innerHTML = `<span class="input-group-text" id="basic-addon1"><i class="bi bi-braces-asterisk"></i></span>
                                    <input type="text" class="form-control halftubeCount" placeholder="123" aria-label="123" aria-describedby="basic-addon1">`;
        }
    }
});