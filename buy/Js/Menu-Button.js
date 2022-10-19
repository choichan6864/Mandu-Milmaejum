const menu_Button = document.querySelector(".menu-button");
const side_Menu_Bar = document.querySelector(".side-menu-bar");

let side_Menu_TF = false;

/**If customer click this button */
function handleMenuButtonClick () {
    side_Menu_Bar.classList.toggle("hidden");
    side_Menu_TF = true;
}

function handleWindowResize() {
  if(side_Menu_TF == true)
    if(window.innerWidth >= 1000) {
      side_Menu_Bar.classList.add("hidden");
      side_Menu_TF = false;
  }
}

window.addEventListener("resize", handleWindowResize);
menu_Button.addEventListener("click", handleMenuButtonClick);