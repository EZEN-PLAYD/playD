const main = document.querySelector('main');
const footer = document.querySelector('footer');
// - 60은 margin-top의 값
main.style.height = `${main.offsetHeight - footer.offsetHeight - 60}px`;

const mySwiper = new Swiper('#mySwiper', {
  scrollbar: {// 스크롤바
    el: ".swiper-scrollbar",
  },
  loop:true,
  slidesPerView: 1,
  breakpoints: {
    415 : {// 화면의 사이즈가 415보다 크거나 같으면 실행
      slidesPerView: 2,// 화면에 보여지는 이미지 갯수
    },
    1200 : {
      slidesPerView: 3,
    }
  },
  autoplay: {
    delay: 2000,
  }
});

const menuA = document.querySelectorAll('#gnb a');
menuA.forEach( (menu, idx) => {
  menu.addEventListener('click', e => {
    e.preventDefault();
    mySwiper.slideToLoop(idx);
    mySwiper.autoplay.run();
  })
});
