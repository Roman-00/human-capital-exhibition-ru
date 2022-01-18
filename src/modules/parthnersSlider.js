/**
 * * Слайдер для партнеров на главной странице
 */
const parthnersSlider = () => {

	const swiperSlide = document.querySelectorAll('.hero-parthners__swiper .swiper-slide');
	let activateSlideLoop = false;

	/**
	 * * Активируем бесконечную прокрутку если новостей больше 2
	 */
	if (swiperSlide.length > 3) {
		activateSlideLoop = true;
	}

	const swiper = new Swiper('.hero-parthners__swiper', {
		// Optional parameters
		loop: activateSlideLoop,
		slidesPerView: 3,
		spaceBetween: 80,
		direction: 'horizontal',
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			860: {
				slidesPerView: 3,
			}
		},
	
		// Navigation arrows
		navigation: {
			nextEl: '.hero-parthners__swiper-button-next',
			prevEl: '.hero-parthners__swiper-button-prev',
		},
	});

};

export default parthnersSlider;