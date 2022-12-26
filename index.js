/* visual  배경 색, 이미지 전환*/
window.addEventListener('load',()=>{

const visual = document.querySelector("#container #visual");
const visualImg = document.querySelectorAll(".visual_text_img");

const Bg = () =>{
    let r = Math.random() * 256;
    r = Math.trunc(r);
    let g = Math.random() * 256;
    g = Math.trunc(g);
    let b = Math.random() * 256;
    b = Math.trunc(b);
    let visualBg = `rgb(${r},${g},${b})`;

    visual.style.setProperty(`--bg`,visualBg);
};

i = 0;
let cycle = () => { // 배열 순환
    i++;
    visualImg.forEach(()=>{
        if ( visualImg.length == i){ // 초기값으로 
            visualImg.forEach(item => {
                item.style.opacity = 0;
            });
            visualImg[0].style.opacity = 1; 
            i=0;
        } else { //
            // console.log(i); 
            visualImg.forEach(item => {
                item.style.opacity = 0; // 이전 요소 스타일 초기화
            });
            visualImg[i].style.opacity = 1;
        }
    })
}

    setInterval(cycle,1750);
    setInterval(Bg,1750);
    visualImg[0].style.opacity = 1; 
    
})
/* top_btn */
const Top = document.querySelector('.top_button');
let clientHt = document.documentElement.clientHeight;
let service = document.querySelector('#content .content_service')
let serviceTop = service.getBoundingClientRect().top;

// console.log(serviceRect)
// console.log(scrollY);
addEventListener('scroll',()=>{
    if (window.pageYOffset >= serviceTop){
        Top.classList.add('on')
    } else if (window.pageYOffset < serviceTop){
        Top.classList.remove('on')
    }
});

// console.log(window.innerHeight)

/* service */
let serviceBottom = service.getBoundingClientRect().bottom;
const serviceBox = document.querySelectorAll('.content_service_wrap_box');

addEventListener('scroll',()=>{
    for(i=0;i < serviceBox.length;i++){
        // console.log(serviceBox[0].getBoundingClientRect().top);
        // console.log(innerHeight+150);
        if (serviceBox[i].getBoundingClientRect().top <= innerHeight - 200){
            serviceBox[i].classList.add('slides');
        }
    }
})


/* perfomance */

const boxItem = document.querySelectorAll('.content_performance_left, .content_performance_right');
boxItem.forEach(item => {
    item.addEventListener('mouseover', () => { 
        item.classList.add('box_visible')
    });
    item.addEventListener('mouseout', () => {
        item.classList.remove('box_visible')
    });
    // item.querySelector('.left_title_box').addEventListener('focus', () => {item.classList.add('item--is-visible');})
    // item.querySelector('.left_title_box').addEventListener('!focus', () => {item.classList.remove('item--is-visible');})
})  


// const listItem = document.querySelectorAll('.accordian_item');
// listItem.forEach(item=>{
//     item.addEventListener('mouseenter', () => {
//         listItem.forEach(list => {
//             list.classList.remove('.accordian_active');
//         });
//         let result = item.classList.contains('accordian_active')
//         !result ? item.classList.add('accordian_active') : item.classList.remove('accordian_active');
//     });
//     item.addEventListener('mouseleave', () => {
//         list.forEach(list =>{ list.classList.remove('.accordian_active')})
// });


/* partner */


// let wdH = window.innerHeight;
// console.log(wdH)
// window.addEventListener('resize', () => {
//     wdH = window.innerHeight;
// })
// console.log(wdH)

window.addEventListener('scroll', () => {
    const graph = document.querySelector('.content_partners_wrap');
    let graphAbt;
    graphAbt = window.pageYOffset + graph.getBoundingClientRect().top;
    // console.log(graphAbt);
    // console.log(window.pageYOffset);
    // console.log(window.innerHeight);
    window.pageYOffset > (graphAbt - window.innerHeight) ? graph.classList.add('active') : graph.classList.remove('active') ;

})

const swiperr = new Swiper('#swiper',{
    loop: true,
	spaceBetween: 20,
	autoplay: {
		delay: 1,
		disableOnInteraction: false
	},
	slidesPerView: 'auto',
	speed: 12000,
	grabCursor: true,
	mousewheelControl: true,
	keyboardControl: true,
	observer: true,
	observeParents: true,
    watchSlidesProgress: false,
});