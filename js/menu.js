const menu = document.querySelector(".header");
const menuButton = document.querySelector("#menu-button");
const menuxButton = document.querySelector("#menux-button");
const menuOp = document.querySelector(".header--container--navigation--ul");

function hideShow() {
  if (menu.classList.contains("menu-is-active")) {
    menu.classList.remove("menu-is-active");
  } else {
    menu.classList.add("menu-is-active");
  }
}

function prueba() {
  console.log("boton");
}

menuButton.addEventListener("click", hideShow);
menuxButton.addEventListener("click", hideShow);
menuOp.addEventListener("click", hideShow);
