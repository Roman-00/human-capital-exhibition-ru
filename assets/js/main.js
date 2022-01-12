window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	/**
	 * * Добавляем навигацию для слайдера
	 */
	const addNewsSliderNavigation = () => {
		const newsBlockInterface = document.querySelector('.news-block__interface');
		const createNewsSliderNavigation = `
			<div class="news-block__swiper-navigation">
				<div class="news-block-swiper__button-prev"></div>
				<div class="news-block-swiper__button-next"></div>
			</div>
		`;

		newsBlockInterface.insertAdjacentHTML('beforeend', createNewsSliderNavigation);
	};

	/**
	 * * Инициализируем слайдер новостей на главной.
	 */
	const newsSwiper = () => {
		const swiperSlide = document.querySelectorAll('.swiper-slide');
		let activateSlideLoop = false;

		/**
		 * * Активируем бесконечную прокрутку если новостей больше 2
		 */
		if (swiperSlide.length >= 2) {
			activateSlideLoop = true;
		}

		/**
		 * * Инициализируем слайдер в блоке с новостями
		 */
		const swiper = new Swiper('.news-block__swiper', {
			// Optional parameters
			loop: activateSlideLoop,
			slidesPerView: 2,
			direction: 'horizontal',
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
			},
		
			// Navigation arrows
			navigation: {
				nextEl: '.news-block-swiper__button-next',
				prevEl: '.news-block-swiper__button-prev',
			},
		});
	};

	/**
	 * ! Инициализация всех выше функций
	 */
	const init = () => {
		addNewsSliderNavigation();
		newsSwiper();
	};

	init();
});