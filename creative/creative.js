const creativeHeader = document.querySelector("#creativeHeader");
const headerInner = document.querySelector("#headerInner");
const logo = document.querySelector("#logo");

// navigation
const navList1 = document.querySelector(".nav_list.list1");
const navList2 = document.querySelector(".nav_list.list2");
const navList3 = document.querySelector(".nav_list.list3");
const navList4 = document.querySelector(".nav_list.list4");

// sub_menu
const navmenu1 = document.querySelector("#navmenu1");
const navmenu2 = document.querySelector("#navmenu2");
const navmenu3 = document.querySelector("#navmenu3");
const navmenu4 = document.querySelector("#navmenu4");

const navmenuBg = document.querySelector("#navmenuBg");

const toggleBtn = document.querySelector("#toggleBtn");
const gnbBtn = document.querySelector("#gnbBtn");
const cancel = document.querySelector("#cancel");

const mainBg = document.querySelector(".main_bg");
const topBtn = document.querySelector("#topBtn");

/********************** maouse event **********************/
navList1.style.overflow = "hidden";
navList2.style.overflow = "hidden";
navList3.style.overflow = "hidden";
navList4.style.overflow = "hidden";

// list1
navList1.addEventListener("mouseover", () => {
  navmenuBg.style.height = "100px";
  navmenuBg.style.borderTop = "1px solid #ddd";
  navList1.style.removeProperty("overflow");

  let i = headerInner.offsetTop;
  if (scrollY > i) {
    navmenuBg.style.height = "60px";
    navmenuBg.style.top = "60px";
  } else if (scrollY <= i) {
    navmenuBg.style.height = "100px";
    navmenuBg.style.top = "100px";
  }
});
navList1.addEventListener("mouseout", () => {
  navmenuBg.style.height = "0";
  navmenuBg.style.borderTop = "none";
  navList1.style.overflow = "hidden";
});

// list2
navList2.addEventListener("mouseover", () => {
  navmenuBg.style.height = "100px";
  navmenuBg.style.borderTop = "1px solid #ddd";
  navList2.style.removeProperty("overflow");

  let i = headerInner.offsetTop;
  if (scrollY > i) {
    navmenuBg.style.height = "60px";
    navmenuBg.style.top = "60px";
  } else if (scrollY <= i) {
    navmenuBg.style.height = "100px";
    navmenuBg.style.top = "100px";
  }
});
navList2.addEventListener("mouseout", () => {
  navmenuBg.style.height = "0";
  navmenuBg.style.borderTop = "none";
  navList2.style.overflow = "hidden";
});

// list3
navList3.addEventListener("mouseover", () => {
  navmenuBg.style.height = "100px";
  navmenuBg.style.borderTop = "1px solid #ddd";
  navList3.style.removeProperty("overflow");

  let i = headerInner.offsetTop;
  if (scrollY > i) {
    navmenuBg.style.height = "60px";
    navmenuBg.style.top = "60px";
  } else if (scrollY <= i) {
    navmenuBg.style.height = "100px";
    navmenuBg.style.top = "100px";
  }
});
navList3.addEventListener("mouseout", () => {
  navmenuBg.style.height = "0";
  navmenuBg.style.borderTop = "none";
  navList3.style.overflow = "hidden";
});

// list4
navList4.addEventListener("mouseover", () => {
  navmenuBg.style.height = "100px";
  navmenuBg.style.borderTop = "1px solid #ddd";
  navList4.style.removeProperty("overflow");

  let i = headerInner.offsetTop;
  if (scrollY > i) {
    navmenuBg.style.height = "60px";
    navmenuBg.style.top = "60px";
  } else if (scrollY <= i) {
    navmenuBg.style.height = "100px";
    navmenuBg.style.top = "100px";
  }
});
navList4.addEventListener("mouseout", () => {
  navmenuBg.style.height = "0";
  navmenuBg.style.borderTop = "none";
  navList4.style.overflow = "hidden";
});

/********************** scroll event **********************/
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

topBtn.style.display = "none";
addEventListener("scroll", () => {
  let bg = mainBg.offsetTop;
  if (scrollY > bg) {
    topBtn.style.display = "block";
  } else if (scrollY <= bg) {
    topBtn.style.display = "none";
  }
});

/********************** click event **********************/
toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  gnbBtn.classList.toggle("active");
});
cancel.addEventListener("click", (e) => {
  e.preventDefault();
  gnbBtn.classList.remove("active");
});
