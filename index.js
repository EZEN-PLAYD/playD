//header
const creativeHeader = document.querySelector("#creativeHeader");
const headerInner = document.querySelector("#headerInner");
const logo = document.querySelector("#logo");


/* visual  배경 색, 이미지 전환*/
window.addEventListener("load", () => {
  const visual = document.querySelector("#container #visual");
  const visualImg = document.querySelectorAll(".visual_text_img");

  const Bg = () => {
    let r = Math.random() * 256;
    r = Math.trunc(r);
    let g = Math.random() * 256;
    g = Math.trunc(g);
    let b = Math.random() * 256;
    b = Math.trunc(b);
    let visualBg = `rgb(${r},${g},${b})`;

    visual.style.setProperty(`--bg`, visualBg);
  };

  i = 0;
  let cycle = () => {
    // 배열 순환
    i++;
    visualImg.forEach(() => {
      if (visualImg.length == i) {
        // 초기값으로
        visualImg.forEach((item) => {
          item.style.opacity = 0;
        });
        visualImg[0].style.opacity = 1;
        i = 0;
      } else {
        //
        // console.log(i);
        visualImg.forEach((item) => {
          item.style.opacity = 0; // 이전 요소 스타일 초기화
        });
        visualImg[i].style.opacity = 1;
      }
    });
  };

  setInterval(cycle, 1750);
  setInterval(Bg, 1750);
  visualImg[0].style.opacity = 1;
});
/* top_btn */
const Top = document.querySelector(".top_button");
const header = document.querySelector('#header');
const headerBtnA = document.querySelector('#header .header_container .header_inner .nav .toggle_btn a i::after');
const headerBtnB = document.querySelector('#header .header_container .header_inner .nav .toggle_btn a i::before');
const headerBtnC = document.querySelector('#header .header_container .header_inner .nav .toggle_btn a span');
let clientHt = document.documentElement.clientHeight;
let service = document.querySelector("#content .content_service");
let serviceTop = service.getBoundingClientRect().top;
// console.log(serviceRect)
// console.log(scrollY);
addEventListener("scroll", () => {
  if (window.pageYOffset >= serviceTop) {
    Top.classList.add("on");
    header.classList.add("active");
    headerBtnA.classList.add("active");
    headerBtnB.classList.add("active");
    headerBtnC.classList.add("active");
  } else if (window.pageYOffset < serviceTop) {
    Top.classList.remove("on");
    // header.classList.remove("active");
    headerBtnA.classList.remove("active");
    headerBtnB.classList.remove("active");
    headerBtnC.classList.remove("active");
  }
});

// console.log(window.innerHeight)

/* service */
let serviceBottom = service.getBoundingClientRect().bottom;
const serviceBox = document.querySelectorAll(".content_service_wrap_list_box");

addEventListener("scroll", () => {
  for (i = 0; i < serviceBox.length; i++) {
    // console.log(serviceBox[0].getBoundingClientRect().top);
    // console.log(innerHeight+150);
    if (serviceBox[i].getBoundingClientRect().top <= innerHeight - 200) {
      serviceBox[i].classList.add("slides");
    }
  }
});

/* perfomance */

const boxItem = document.querySelectorAll(
  ".content_performance_left, .content_performance_right"
);
boxItem.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.classList.add("box_visible");
  });
  item.addEventListener("mouseout", () => {
    item.classList.remove("box_visible");
  });
});

/* left_box 마우스 이벤트 */
const listItem = document.querySelectorAll(".accordian_item");
listItem.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    listItem.forEach((list) => {
      list.classList.remove("accordian_active");
    }); // .accordian_active 남아있으면 삭제
    let result = item.classList.contains("accordian_active");
    !result
      ? item.classList.add("accordian_active")
      : item.classList.remove("accordian_active");
  });
  item.addEventListener("mouseleave", () => {
    listItem.forEach((list) => {
      list.classList.remove("accordian_active");
    });
  });
});

/* partner */
/* 순차적으로 나오는 페이드 효과 */
window.addEventListener("scroll", () => {
  const graph = document.querySelector(".content_partners_wrap");
  let graphAbt;
  // getBoundingClinetRect 뷰포트 상대적 정보
  graphAbt = window.pageYOffset + graph.getBoundingClientRect().top;
  // console.log(graphAbt);
  // console.log(window.pageYOffset);
  // console.log(window.innerHeight);
  window.pageYOffset > graphAbt - window.innerHeight
    ? graph.classList.add("active")
    : graph.classList.remove("active");
});

/* banner swiper */
const swiper = new Swiper("#swiper", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 1,
    disableOnInteraction: false, // 상호작용시 자동재생 stop
  },
  slidesPerView: "auto",
  speed: 12000,
  grabCursor: true,
});



/********************** scroll event **********************/
// addEventListener("scroll", () => {
//   let num = headerInner.offsetTop;
//   if (scrollY > num) {
//     logo.style.width = "108px";
//     headerInner.classList.add("active");
//     // navmenu1
//     navmenu1.style.top = "60px";
//     navmenu1.style.height = "60px";
//     // navmenu2
//     navmenu2.style.top = "60px";
//     navmenu2.style.height = "60px";
//     // navmenu3
//     navmenu3.style.top = "60px";
//     navmenu3.style.height = "60px";
//     // navmenu4
//     navmenu4.style.top = "60px";
//     navmenu4.style.height = "60px";
//   } else if (scrollY <= num) {
//     logo.style.width = "139px";
//     headerInner.classList.remove("active");
//     // navmenu1
//     navmenu1.style.top = "100px";
//     navmenu1.style.height = "100px";
//     // navmenu2
//     navmenu2.style.top = "100px";
//     navmenu2.style.height = "100px";
//     // navmenu3
//     navmenu3.style.top = "100px";
//     navmenu3.style.height = "100px";
//     // navmenu4
//     navmenu4.style.top = "100px";
//     navmenu4.style.height = "100px";
//   }
// });

// const topBtn = document.querySelector("#topBtn");
// topBtn.style.display = "none";
// addEventListener("scroll", () => {
//   let footerOffsetTop = footer.offsetTop;
//   let clientHt = document.documentElement.clientHeight;
//   let result = footerOffsetTop - clientHt - footer.clientHeight - headerInner.clientHeight;
//   if (scrollY > result) {
//     topBtn.style.display = "block";
//   } else if (scrollY <= result) {
//     topBtn.style.display = "none";
//   }
// });

/********************** click event **********************/
toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  gnbBtn.classList.toggle("active");
});
cancel.addEventListener("click", (e) => {
  e.preventDefault();
  gnbBtn.classList.remove("active");
});
