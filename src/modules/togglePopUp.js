/**
 * * Модальное окно
 */
const togglePopUp = () => {
	const popup = document.querySelector('.popup');
	const popupContent = document.querySelector('.popup-content');
	const popupBtn = document.querySelectorAll('.popup-btn');

	popupBtn.forEach((item) => {
		item.addEventListener('click', () => {
			popup.classList.add('popup--active');
		});
	});

	popup.addEventListener('click', (event) => {
		let target = event.target;

		if (target.classList.contains('popup-close')) {
			popup.classList.remove('popup--active');
		} else {
			target = target.closest('.popup-content');

			if (!target) {
				popup.classList.remove('popup--active');
			}
		}
	});
}

export default togglePopUp;