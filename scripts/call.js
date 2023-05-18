window.onload = function () {
    if (navigator.userAgent.match (/iPhone/i)) {
      var a = document.querySelector(".mobileCall");
      for (var i = 0; i < a.length; i++) {
        if (a[i].getAttribute ('href').search (/callto:/i) === 0) {
          a[i].setAttribute ('href', a[i].getAttribute ('href').replace (/^callto:/, "tel:"));
        }
      }
    }
  };