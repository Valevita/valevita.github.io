(function () {
  "use strict";
  var button = document.querySelector(".button--contacts");
  var popup = document.querySelector(".popup");
  var close = document.querySelector(".popup__close");
  var overlay = document.querySelector(".page-overlay");

  button.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("popup--show");
    overlay.classList.add("page-overlay-show");
  });

  close.addEventListener("click", function (event){
    event.preventDefault();
    popup.classList.remove("popup--show");
    overlay.classList.remove("page-overlay-show");
  })
}());
