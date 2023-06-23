
document.querySelector(".formPOFWrapper").addEventListener('click', event => {
    toggleActiveBtn(event, ".formPof");
});
document.querySelector(".micronWrapperPOF").addEventListener('click', event => {
    toggleActiveBtn(event, ".halftubeThicknessPOF");
});
document.querySelector(".halftubeWidthWrapperPOF").addEventListener('click', event => {
    toggleActiveBtn(event, ".halftubeWidthPOF");
});
document.querySelector(".halftubeLengthWrapperPOF").addEventListener('click', event => {
    toggleActiveBtn(event, ".halftubeLengthPOF");
});
document.querySelector(".halftubeCountWrapperPOF").addEventListener('click', event => {

});

// -------------POF----------------------


document.querySelector(".formPOFperfWrapper").addEventListener('click', event => {
    toggleActiveBtn(event, ".formPOFperf");
});
document.querySelector(".micronWrapperPOFperf").addEventListener('click', event => {
    toggleActiveBtn(event, ".halftubeThicknessPOFperf");
});
document.querySelector(".halftubeWidthWrapperPOFperf").addEventListener('click', event => {
    toggleActiveBtn(event, ".halftubeWidthPOFperf");
});
document.querySelector(".halftubeLengthWrapperPOFperf").addEventListener('click', event => {
    toggleActiveBtn(event, ".halftubeLengthPOFperf");
});
document.querySelector(".halftubeCountWrapperPOFperf").addEventListener('click', event => {

});

//------------POFperf---------------

document.querySelector(".formPVXWrapper").addEventListener('click', event => {
    toggleActiveBtn(event, ".formPVX");
});
document.querySelector(".micronWrapperPVX").addEventListener('click', event => {
    toggleActiveBtn(event, ".halftubeThicknessPVX");
});
document.querySelector(".halftubeWidthWrapperPVX").addEventListener('click', event => {
    toggleActiveBtn(event, ".halftubeWidthPVX");
});
document.querySelector(".halftubeLengthWrapperPVX").addEventListener('click', event => {
    toggleActiveBtn(event, ".halftubeLengthPVX");
});
document.querySelector(".halftubeCountWrapper").addEventListener('click', event => {

});

//-------------PVX----------------

document.querySelector(".formPVXLiteWrapper").addEventListener('click', event => {
    toggleActiveBtn(event, ".formPVXLite");
});
document.querySelector(".micronWrapperPVXLite").addEventListener('click', event => {
    toggleActiveBtn(event, ".halftubeThicknessPVXLite");
});
document.querySelector(".halftubeWidthWrapperPVXLite").addEventListener('click', event => {
    toggleActiveBtn(event, ".halftubeWidthPVXLite");
});
document.querySelector(".halftubeLengthWrapperPVXLite").addEventListener('click', event => {
    toggleActiveBtn(event, ".halftubeLengthPVXLite");
});
document.querySelector(".halftubeCountWrapperPVXLite").addEventListener('click', event => {

});

//-------------PVXLite----------------


function toggleActiveBtn(event, className) {
    const allBtns = document.querySelectorAll(className);
    allBtns.forEach(button => {
    if (button === event.target) {
        button.classList.add('active_btn');
        } else {
        button.classList.remove('active_btn'); 
        } 
    });

}


const handleWindowResize = () => {
    const mobileMarkup = `
    <div class=" d-md-flex mb-2 d-lg-none">

                <div class="d-flex w-75 row">
                  <div class="d-flex  gap-2 " >
                    <button class="btn active typeOfShrinkBtn" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">ПОФ</button>
                    <button class="btn typeOfShrinkBtn" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">ПОФ-Перфорированный</button>
                  </div>
            
                  <div class="d-flex  gap-2  ">
                    <button class="btn typeOfShrinkBtn" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">ПВХ-Т</button>
                    <button class="btn typeOfShrinkBtn" id="nav-lite-tab" data-bs-toggle="tab" data-bs-target="#nav-lite" type="button" role="tab" aria-controls="nav-lite" aria-selected="false" >ПВХ-Т Lite</button>
                  </div>
            
                  <div class="d-flex gap-2  ">
                    <button class="btn typeOfShrinkBtn" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">ПВД</button>
                    <button class="btn typeOfShrinkBtn" id="nav-lite-tab" data-bs-toggle="tab" data-bs-target="#nav-lite" type="button" role="tab" aria-controls="nav-lite" aria-selected="false">БОПП</button>
                  </div>
                </div>
               
              </div>
    `;
    const desktopMarkup = `
    <div class="d-none d-lg-flex  justify-content-center gap-2 flex-wrap">
                <button class="btn active typeOfShrinkBtn" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">ПОФ</button>
                <button class="btn typeOfShrinkBtn" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">ПОФ-Перфорированный</button>
                <button class="btn typeOfShrinkBtn" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">ПВХ-Т</button>
                <button class="btn typeOfShrinkBtn" id="nav-lite-tab" data-bs-toggle="tab" data-bs-target="#nav-lite" type="button" role="tab" aria-controls="nav-lite" aria-selected="false" >ПВХ-Т Lite</button>
                <button class="btn typeOfShrinkBtn" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">ПВД</button>
                <button class="btn typeOfShrinkBtn" id="nav-lite-tab" data-bs-toggle="tab" data-bs-target="#nav-lite" type="button" role="tab" aria-controls="nav-lite" aria-selected="false">БОПП</button>
              </div>
    `;
    const windowWidth = window.innerWidth
    if (windowWidth >= 960) {
        document.querySelector(".nav-type-of-shrink").innerHTML = desktopMarkup
    } else {
      document.querySelector(".nav-type-of-shrink").innerHTML = mobileMarkup
    }
  }
  
  window.addEventListener('resize', handleWindowResize)
  
  // запускаем один раз, чтобы сразу проверить начальную ширину окна
  handleWindowResize()