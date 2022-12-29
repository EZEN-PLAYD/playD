/********************** scroll event **********************/
// header
const headerInner = document.querySelector("#headerInner");
const logo = document.querySelector("#logo");
// sub_menu
const navmenu1 = document.querySelector("#navmenu1");
const navmenu2 = document.querySelector("#navmenu2");
const navmenu3 = document.querySelector("#navmenu3");
const navmenu4 = document.querySelector("#navmenu4");

addEventListener("scroll", () => {
  let num = headerInner.offsetTop;
  if (scrollY > num) {
    logo.style.width = "108px";
    headerInner.classList.add("active");
    // navmenu1
    navmenu1.style.top = "60px";
    navmenu1.style.height = "60px";
    // navmenu2
    navmenu2.style.top = "60px";
    navmenu2.style.height = "60px";
    // navmenu3
    navmenu3.style.top = "60px";
    navmenu3.style.height = "60px";
    // navmenu4
    navmenu4.style.top = "60px";
    navmenu4.style.height = "60px";
  } else if (scrollY <= num) {
    logo.style.width = "139px";
    headerInner.classList.remove("active");
    // navmenu1
    navmenu1.style.top = "100px";
    navmenu1.style.height = "100px";
    // navmenu2
    navmenu2.style.top = "100px";
    navmenu2.style.height = "100px";
    // navmenu3
    navmenu3.style.top = "100px";
    navmenu3.style.height = "100px";
    // navmenu4
    navmenu4.style.top = "100px";
    navmenu4.style.height = "100px";
  }
});

// top_button
const footer = document.querySelector("footer");
const topBtn = document.querySelector("#topBtn");

topBtn.style.display = "none";
addEventListener("scroll", () => {
  let footerOffsetTop = footer.offsetTop;
  let clientHt = document.documentElement.clientHeight;
  let result = footerOffsetTop - clientHt - footer.clientHeight - headerInner.clientHeight;
  if (scrollY > result) {
    topBtn.style.display = "block";
  } else if (scrollY <= result) {
    topBtn.style.display = "none";
  }
});

/********************** click event **********************/
// toggle_button
const toggleBtn = document.querySelector("#toggleBtn");
const gnbBtn = document.querySelector("#gnbBtn");
const cancel = document.querySelector("#cancel");

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  gnbBtn.classList.toggle("active");
});
cancel.addEventListener("click", (e) => {
  e.preventDefault();
  gnbBtn.classList.remove("active");
});
