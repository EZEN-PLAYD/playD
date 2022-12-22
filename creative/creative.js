const navMenus = document.querySelectorAll(".navmenu");
const navMenuLinks = document.querySelectorAll(".navmenu_link");
const menuA = document.querySelectorAll(".navmenu_link a");

let navMenu = navMenus[idx];
let navMenuLink = navMenuLinks[idx];
// menuA.forEach((menu) => {
//   menu.addEventListener("mouseover", (e) => {
//     e.preventDefault();
//   });
// });

addEventListener("mouseover", () => {
  if (navMenu == navMenuLink) {
    navMenus.classList.add("active");
  }
});
