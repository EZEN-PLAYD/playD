// goal scroll
const goalSubTitle = document.querySelector(".goal_sub_title");
const goalWrapHead = document.querySelector(".goal_wrap_head");
const subHeader = document.querySelector(".sub_header");
const container = document.querySelector("#container");
const goalDownload = document.querySelector(".goal_box_download");

// sub_header scroll
addEventListener("scroll", () => {
  let goal = subHeader.offsetTop - 100;
  console.log(goal);
  if (scrollY >= goal) {
    container.classList.add("active");
  } else if (scrollY < goal) {
    container.classList.remove("active");
  }
});

//sub_header a
goalDownload.addEventListener("click", (e) => {
  e.preventDefault();
});

// history swiper
const mySwiper = new Swiper("#mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    // el: ".swiper-pagination",
    el: ".history_progressbar",
    type: "progressbar",
  },
  sliedsPerView: 3,
});
