
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
    toggleActiveBtn(event, ".halftubeCountPOF");
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
    toggleActiveBtn(event, ".halftubeCountPOFperf");
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
    toggleActiveBtn(event, ".halftubeCount");
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
    toggleActiveBtn(event, ".halftubeCountPVXLite");
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