/**
 * * Показываем и скрываем выподающее меню на странице по наведению
 */
const openSubMenu = () => {

	const menuItem = document.getElementsByClassName('menu-nav__item');
	
	/**
	 * * Перебираем все полученные элементы
	 */
	for (var i=0; i<menuItem.length; i++) {
		menuItem[i].addEventListener('mouseenter', showSubMenu, false);
		menuItem[i].addEventListener('mouseleave', hideSubMenu, false);
	}

	/**
	 * * Показываем меню при наведении
	 * 
	 * @param event
	 */
	function showSubMenu(event) {
		event.preventDefault();

		if (this.children.length > 1) {
			this.children[1].style.height = 'auto';
			this.children[1].style.visibility = 'visible';
			this.children[1].style.opacity = '1';
		} else {
			return false;
		}

	};
	/**
	 * * Скрываем меню при наведении
	 * 
	 * @param event
	 */
	function hideSubMenu(event) {
		if (this.children.length > 1) {
			this.children[1].style.height = 'auto';
			this.children[1].style.visibility = 'hidden';
			this.children[1].style.opacity = '0';
		} else {
			return false;
		}
	};
};

export default openSubMenu;