/**
 * * Слайдер на странице media-center
 */
const mediaSwiper = () => {

	const mediaSwiperSlide = document.querySelector('.page-media-swiper .swiper-slide');
	let activateSlideLoop = false;

	/**
	 * * Активируем бесконечную прокрутку если новостей больше 2
	 */
	if (mediaSwiperSlide.length > 1) {
		activateSlideLoop = true;
	}

	const swiper = new Swiper('.page-media-swiper', {
		// Optional parameters
		loop: activateSlideLoop,
		slidesPerView: 1,
		loop: true,
		direction: 'horizontal',
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
	
		// Navigation arrows
		navigation: {
			nextEl: '.page-media-content__swiper-news-button-next',
			prevEl: '.page-media-content__swiper-news-button-prev',
		},
	});

};

export default mediaSwiper;