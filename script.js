document.querySelector(".micronWrapper").addEventListener("click", event => {
    let widthWrapper = document.querySelector(".halftubeWidthWrapper");
    let lengthWrapper = document.querySelector(".halftubeLengthWrapper");
    let countWrapper = document.querySelector(".halftubeCountWrapper");
    if (event.target.matches(".halftubeThickness")) {
        console.log(event.target.value);
        if (event.target.value == "15 мкм") {
            let widthMarkup = `
            <input type="button" class="btn btn-primary halftubeWidth" value="150 мм">
                    <input type="button" class="btn btn-primary halftubeWidth" value="200 мм">
                    <input type="button" class="btn btn-primary halftubeWidth" value="250 мм">
                    <input type="button" class="btn btn-primary halftubeWidth" value="300 мм">
                    <input type="button" class="btn btn-primary halftubeWidth" value="350 мм">
                    <input type="button" class="btn btn-primary halftubeWidth" value="400 мм">
                    <input type="button" class="btn btn-primary halftubeWidth" value="450 мм">
            `;

            let lengthMarkup = `
            <input type="button" class="btn btn-primary halftubeLength" value="750 м">
            `
            
            let countMarkup = `
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-braces-asterisk"></i></span>
            <input type="text" class="form-control halftubeCount" placeholder="123" aria-label="123" aria-describedby="basic-addon1">
            `
            widthWrapper.innerHTML = widthMarkup;
            lengthWrapper.innerHTML = lengthMarkup;
            countWrapper.innerHTML = countMarkup;
        }

        if (event.target.value == "19 мкм") {
            let widthMarkup = `
                    <input type="button" class="btn btn-primary halftubeWidth" value="250 мм">
                    <input type="button" class="btn btn-primary halftubeWidth" value="350 мм">
                    <input type="button" class="btn btn-primary halftubeWidth" value="450 мм">
                    <input type="button" class="btn btn-primary halftubeWidth" value="500 мм">
                    <input type="button" class="btn btn-primary halftubeWidth" value="550 мм">
            `;
            let lengthMarkup = `
            <input type="button" class="btn btn-primary halftubeLength" value="630 м">
            `;
            let countMarkup = `
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-braces-asterisk"></i></span>
            <input type="text" class="form-control halftubeCount" placeholder="123" aria-label="123" aria-describedby="basic-addon1">
            `;
            widthWrapper.innerHTML = widthMarkup;
            lengthWrapper.innerHTML = lengthMarkup;
            countWrapper.innerHTML = countMarkup;
        }

        if (event.target.value == "25 мкм") {
            let widthMarkup = `
                    <input type="button" class="btn btn-primary halftubeWidth" value="300 мм">
                    <input type="button" class="btn btn-primary halftubeWidth" value="350 мм">
                    <input type="button" class="btn btn-primary halftubeWidth" value="400 мм">
                    <input type="button" class="btn btn-primary halftubeWidth" value="450 мм">
                    <input type="button" class="btn btn-primary halftubeWidth" value="500 мм">
            `;
            let lengthMarkup = `
            <input type="button" class="btn btn-primary halftubeLength" value="480 м">
            `;
            let countMarkup = `
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-braces-asterisk"></i></span>
            <input type="text" class="form-control halftubeCount" placeholder="123" aria-label="123" aria-describedby="basic-addon1">
            `;
            widthWrapper.innerHTML = widthMarkup;
            lengthWrapper.innerHTML = lengthMarkup;
            countWrapper.innerHTML = countMarkup;
        }
    }
});