import "@babel/polyfill";
import 'formdata-polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'es6-promise';
import 'fetch-polyfill';

import openSubMenu from './modules/openSubMenu';
import newsSlider from './modules/newsSlider';
import parthnersSlider from './modules/parthnersSlider';
import timer from './modules/timer';

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	let deadline = '2022-09-21';

	/**
	 * * Открываем выпадающее меню
	 */
	openSubMenu();

	/**
	 * * Слайдер новостей на главной странице
	 */
	newsSlider();

	/**
	 * * Слайдер партнеров на главной странице
	 */
	parthnersSlider();

	/**
	 * * Таймер на главной странице
	 * 
	 * @param selector {Selector: ID, ClassNames}
	 * @param deadline {Data: String}
	 */
	timer('.hero-content__block-timer', deadline);
});