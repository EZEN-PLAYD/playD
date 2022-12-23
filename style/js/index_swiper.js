
let swiper = new Swiper('#swiper',{
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
});