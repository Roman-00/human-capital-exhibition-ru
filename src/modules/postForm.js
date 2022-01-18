/**
 * * Отправка данных с формы
 */
const postForm = () => {
	const form = document.querySelector('.form-registration-summit');
	const regexpEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
	let isValidate = false;

	/**
	 * * Отправляем данные на почту и в телеграм
	 * 
	 * @param body {Oblect} 
	 */
	const postData = async (body) => {
		await fetch('/sever.php', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});
	};


	/**
	 * * Валидация полей
	 * 
	 * @param elem
	 */
	 const validateElem = (elem) => {
		if (elem.id === 'user-first-name' || elem.id === 'user-last-name') {
			if (elem.value === '') {
				elem.required = true;
				elem.closest('.form-registration-group').classList.add('form-registration-group-error');
				elem.nextElementSibling.textContent = "Поле не заполнено!";
			} else {
				elem.closest('.form-registration-group').classList.remove('form-registration-group-error');
				elem.nextElementSibling.textContent = "";
			}
		}

		if (elem.id === 'user-email') {
			if (elem.value === '') {
				elem.closest('.form-registration-group').classList.add('form-registration-group-error');
				elem.nextElementSibling.textContent = "Поле Обязательно для заполнения";
			} else if (!regexpEmail.test(elem.value) && elem.value !== '') {
				elem.closest('.form-registration-group').classList.add('form-registration-group-error');
				elem.nextElementSibling.textContent = "Введите корректный email!";
			} else {
				elem.closest('.form-registration-group').classList.remove('form-registration-group-error');
				elem.nextElementSibling.textContent = "";
			}
		}
	};

	/**
	 * * Проверка поля ввода при blur еффекте
	 */
	for (let elem of form.elements) {
		if (!elem.classList.contains('form-registration-group__policy-input') && elem.tagName !== 'BUTTON') {
			elem.addEventListener('blur', () => {
				validateElem(elem);
			});
		}
	};

	form,addEventListener('submit', (event) => {
		event.preventDefault();

		const formData = new FormData(form);
		const body = {};
		formData.forEach((val, key) => {
			body[key] = val;
		});

		/**
		 * * Проверка на пустое поле
		 */
		 for (let elem of form.elements) {
			if (!elem.classList.contains('form-registration-group__policy-input') && elem.tagName !== 'BUTTON') {
				if (elem.value === "") {
					elem.nextElementSibling.textContent = "Данное поле не заполнено";
					elem.closest('.form-registration-group').classList.add('form-registration-group-error');
					isValidate = false;
				} else {
					elem.nextElementSibling.textContent = "";
					elem.closest('.form-registration-group').classList.remove('form-registration-group-error');
					isValidate = true;
				}
			}
		}

		if (isValidate) {
			if(form.querySelector('#policy').checked) {
				postData(body)
					.then((response) => {
						console.log('response', response);
					})
					.catch((error) => {
						console.log(error);
					});
			}  else {
				isValidate = false;
				alert('Согласитесь с условиями');
			}
		}
	});
};

export default postForm;