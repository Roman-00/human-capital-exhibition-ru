/**
 * * Слайдер для новостей на главной странице
 */
const newsSlider = () => {
	const swiperSlide = document.querySelectorAll('.news-block__swiper .swiper-slide');
	const newsBlockInterface = document.querySelector('.news-block__interface');
	const createNewsSliderNavigation = `
		<div class="news-block__swiper-navigation">
			<div class="news-block-swiper__button-prev"></div>
			<div class="news-block-swiper__button-next"></div>
		</div>
	`;
	let activateSlideLoop = false;


	/**
	 * * Добавляем пагинацию на страницу
	 */
	if (newsBlockInterface) {
		newsBlockInterface.insertAdjacentHTML('beforeend', createNewsSliderNavigation);	
	}

	/**
	 * * Активируем бесконечную прокрутку если новостей больше 2
	 */
	if (swiperSlide.length > 2) {
		activateSlideLoop = true;
	}

	/**
	 * * Инициализируем слайдер в блоке с новостями
	 */
	const swiper = new Swiper('.news-block__swiper', {
		// Optional parameters
		loop: activateSlideLoop,
		slidesPerView: 2,
		spaceBetween: 30,
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
				slidesPerView: 2,
			}
		},
	
		// Navigation arrows
		navigation: {
			nextEl: '.news-block-swiper__button-next',
			prevEl: '.news-block-swiper__button-prev',
		},
	});
}

export default newsSlider;