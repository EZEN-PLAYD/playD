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
console.log(scrollY);
addEventListener('scroll',()=>{
    if (scrollY >= serviceTop){
        Top.classList.add('on')
    } else if (scrollY < serviceTop){
        Top.classList.remove('on')
    }
});

console.log(window.pageYOffset)
console.log(window.innerHeight)

/* service */
let serviceBottom = service.getBoundingClientRect().bottom;
const serviceBox = document.querySelectorAll('.content_service_wrap_box');

addEventListener('scroll',()=>{
    for(i=0;i < serviceBox.length;i++){
        // console.log(serviceBox[0].getBoundingClientRect().top);
        // console.log(innerHeight+150);
        if (serviceBox[i].getBoundingClientRect().top <= innerHeight - 200){
            serviceBox[i].style.opacity = 1;
        }
    }
})


/* perfomance */

const boxItem = document.querySelector('.content_performance_left');
const item = document.querySelector('.left_box');

boxItem.addEventListener('mouseover', () => { item.classList.add('left_box_visible')});
boxItem.addEventListener('mouseout', () => { item.classList.remove('left_box_visible')});
