import validateForm from "./validateForm";

/**
 * * Отправка данных с формы
 */
const sendForm = (classForm) => {
	const sendErrorMessage = 'Что-то пошло не так...';
	const sendButtonMessage = 'зарегистрироваться';
	const sendSuccesMessage = 'Спасибо! Мы скоро с вами свяжемся!';
	const sendLoadTextMessage = 'Отправляем данные';
	const formRegistrationButton = document.querySelector('.form-registration-button');
	const textButton = document.querySelector('.text-button');
	const sendLoadForm = `<div class="loader"></div>`;
	const fromSelected = document.getElementById('walck-of-life');
	const fromSelectedInput = document.getElementById('input-province');
	let isValidate = false;
	let isLoading = false;

	const form = document.querySelector(classForm);

	if (!validateForm()) {
		isValidate = false;
	}

	if (isLoading) {
		formRegistrationButton.insertAdjacentHTML('beforeend', sendLoadForm);
	}

	const sendDataPost = async(body) => {
		await fetch('./server.php', {
			method: 'POST',
			header: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});
	}

	form.addEventListener('submit', (event) => {
		event.preventDefault();
		textButton.textContent = sendLoadTextMessage;
		isLoading = true;
		const formData = new FormData(form);
		const body = {};
		formData.forEach((val, key) => {
			body[key] = val;
		});

		/**
		 * * Проверка на пустое поле
		 */
		if (form) {
			for (let elem of form.elements) {
				if (!elem.classList.contains('form-registration-group__policy-input') 
					&& 
					elem.tagName !== 'BUTTON'
					&&
					!elem.classList.contains('input-province')
				) {
					if (elem.value === "") {
						elem.nextElementSibling.textContent = "Данное поле не заполнено";
						elem.closest('.form-registration-group').classList.add('form-registration-group-error');
						isValidate = false;
					} else {
						elem.nextElementSibling.textContent = "";
						isValidate = true;
					}
				}
				
				if (fromSelected) {
					if (elem.id === 'walck-of-life') {
						if (fromSelectedInput.value === '') {
							elem.nextElementSibling.textContent = "Вы не выбрали сферу деятельности";
							elem.closest('.form-registration-group').classList.add('form-registration-group-error');
							isValidate = false;
						} else {
							elem.nextElementSibling.textContent = '';
							isValidate = true;
						}
					}
				}
			}
		}

		if (isValidate) {
			if(form.querySelector('#policy').checked) {
				sendDataPost(body)
					.then(response => {
						if (response.status !== 200) {
							isLoading = false;
							throw new Error('status network not 200');
						}
						textButton.textContent = sendSuccesMessage;
						form.reset();
						setTimeout(() => {
							textButton.textContent = sendButtonMessage;
						}, 3000);
					})
					.catch(error => {
						isLoading = false;
						textButton.textContent = sendErrorMessage;
						setTimeout(() => {
							textButton.textContent = sendButtonMessage;
						}, 3000);
					})
					.finally(() => {
						isLoading = false;
					});
			} else {
				isValidate = false;
				alert('Согласитесь с условиями');
			}
		}
	})
}

export default sendForm;