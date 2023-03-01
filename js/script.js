window.onload = function () {
  let burger = document.querySelector(".burger"),
    menu = document.querySelector(".menu-list"),
    close = document.querySelector(".close");

  burger.onclick = function () {
    menu.classList.add("active");
  };

  close.onclick = function () {
    menu.classList.remove("active");
  };
};
