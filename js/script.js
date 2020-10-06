/**
 * Script for control the burger menu in the index page
 */

const menu = document.querySelector(".menu");
const burgerButton = document.querySelector("#burguer-menu");
burgerButton.addEventListener("click", () => {
  menu.classList.toggle("is-active");
});
