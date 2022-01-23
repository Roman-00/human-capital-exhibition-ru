/**
 * * Валидация полей в форме
 */
const validateForm = (classFrom) => {
	const form = document.querySelector(classFrom);
	const fromSelected = document.getElementById('walck-of-life');
	const fromSelectedInput = document.getElementById('input-province');
	const regexpEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
	const selectOptionValue = {
		sphera: 'Сфера Деятельности',
		gosOrgans: 'Государственные органы',
		gosConsultanstDealership: 'Дипломатические и консульские представительства',
		notDealershipOrganization: 'Неправительственные организации',
		profUnionAssociation: 'Профессиональные союзы и ассоциации',
		institutionsDevelopment: 'Институты развития',
		foodIndustry: 'Пищевая промышленность',
		transportLogistic: 'Транспорт и логистика',
		itTelecommunications: 'IT и телекоммуникации',
		fuelIndustry: 'Топливная промышленность',
		energy: 'Энергетика',
		mechanicalEngineering: 'Машиностроение',
		healthSocial: 'Здравоохранение, физическая культура и социальное обеспечение',
		education: 'Образование',
		cultureArt: 'Культура и искусство',
		scienceService: 'Наука и научное обслуживание',
		funds: 'Финансы, кредит, страхование, пенсионное обеспечение',
		building: 'Строительство и архитектура',
		consulting: 'Консалтинг',
		news: 'СМИ',
	}

	if (fromSelected) {
		fromSelected.addEventListener('change', (event) => {
			const value = event.target.value;
			fromSelectedInput.value = selectOptionValue[value];
			
		});
	}

	/**
	 * * Валидируем поля в форме
	 * 
	 * @param elem {HTMLElement}
	 */
	const validateElem = (elem) => {
		/**
		 * * Проверяем поля "Имя", "Фамилия", "Должность"
		 * 
		 * * Делаем поля обязательными для заполнения
		 */
		if (
			elem.id === 'user-first-name' 
			|| 
			elem.id === 'user-last-name' 
			|| 
			elem.id === 'user-position'
			||
			elem.id === 'user-company'
			|| 
			elem.id === 'user-country'
			||
			elem.id === 'user-city'
			|| 
			elem.id === 'user-ur-address'
			|| 
			elem.id === 'user-bin'
			) {
			/**
			 * * Проверяем заполнено ли поле вообще
			 */
			if (elem.value === '') {
				elem.closest('.form-registration-group').classList.remove('form-registration-group-succes');
				elem.closest('.form-registration-group').classList.add('form-registration-group-error');
				elem.nextElementSibling.textContent = 'Поле обязательно для заполнения*';
			} else {
				elem.closest('.form-registration-group').classList.remove('form-registration-group-error');
				elem.closest('.form-registration-group').classList.add('form-registration-group-succes');
				elem.nextElementSibling.textContent = '';
			}
		}

		/**
		 * * Проверяем поле email
		 * 
		 * * Делаем поле "Email" обязательным
		 */
		if (elem.id === 'user-email') {
			/**
			 * * Проверяем заполнено ли поле
			 */
			if (elem.value === '') {
				elem.closest('.form-registration-group').classList.remove('form-registration-group-succes');
				elem.closest('.form-registration-group').classList.add('form-registration-group-error');
				elem.nextElementSibling.textContent = 'Поле обязательно для заполнения*';
			} else if (!regexpEmail.test(elem.value) && elem.value !== '') {
				/**
				 * * Проверяем поле на корректное заполнение
				 */
				 elem.closest('.form-registration-group').classList.remove('form-registration-group-succes');
				 elem.closest('.form-registration-group').classList.add('form-registration-group-error');
				 elem.nextElementSibling.textContent = 'Введите корректный email!';
			} else {
				elem.closest('.form-registration-group').classList.remove('form-registration-group-error');
				elem.closest('.form-registration-group').classList.add('form-registration-group-succes');
				elem.nextElementSibling.textContent = '';
			}
		}

		/**
		 * * Проверяем поле телефон
		 * 
		 * * Делаем поле "Телефон" обязательным
		 */
		if (elem.id === 'user-phone') {
			/**
			 * * Проверяем заполнено ли поле
			*/
			if (elem.value === '') {
				elem.closest('.form-registration-group').classList.remove('form-registration-group-succes');
				elem.closest('.form-registration-group').classList.add('form-registration-group-error');
				elem.nextElementSibling.textContent = 'Поле обязательно для заполнения*';
			} else if (elem.value.length <= 3) {
				/**
				 * * Проверяем поле на корректное заполнение если в поле меньше 3 символов
				 */
				 elem.closest('.form-registration-group').classList.remove('form-registration-group-succes');
				 elem.closest('.form-registration-group').classList.add('form-registration-group-error');
				 elem.nextElementSibling.textContent = 'Количество символов в поле больше 3';
			} else if (elem.value.length > 12) {
				/**
				 * * Проверяем поле на корректное заполнение если в поле больше 12 символов
				 */
				 elem.closest('.form-registration-group').classList.remove('form-registration-group-succes');
				 elem.closest('.form-registration-group').classList.add('form-registration-group-error');
				 elem.nextElementSibling.textContent = 'Вы ввели недопустимое количество символов';
			} else if (elem.value.length < 12) {
				/**
				 * * Проверяем поле на корректное заполнение если в поле больше 12 символов
				*/
				elem.closest('.form-registration-group').classList.remove('form-registration-group-succes');
				elem.closest('.form-registration-group').classList.add('form-registration-group-error');
				elem.nextElementSibling.textContent = 'В поле должно быть не меньше 12 символов';
			} else if (elem.value.length === 12) {
				elem.closest('.form-registration-group').classList.remove('form-registration-group-error');
				elem.closest('.form-registration-group').classList.add('form-registration-group-succes');
				elem.nextElementSibling.textContent = '';
			} else {
				elem.closest('.form-registration-group').classList.remove('form-registration-group-error');
				elem.closest('.form-registration-group').classList.add('form-registration-group-succes');
				elem.nextElementSibling.textContent = '';
			}
		}

		/**
		 * * Проверяем поле сфера деятельсти
		 */
		if (fromSelected) {
			if (elem.id === 'walck-of-life') {
				if (fromSelectedInput.value === '') {
					elem.closest('.form-registration-group').classList.remove('form-registration-group-succes');
					elem.closest('.form-registration-group').classList.add('form-registration-group-error');				
					elem.nextElementSibling.textContent = 'Выберите сферу деятельности*';
				} else {
					elem.closest('.form-registration-group').classList.remove('form-registration-group-error');
					elem.closest('.form-registration-group').classList.add('form-registration-group-succes');
					elem.nextElementSibling.textContent = '';
				}
			}
		}
	};

	if (form) {
		/**
		 * * Перебираем все инпуты в форме кроме checkbox, button, select
		 */
		for (let elem of form.elements) {
			if (!elem.classList.contains('form-registration-group__policy-input') 
				&& 
				elem.tagName !== 'BUTTON'
			) {
				elem.addEventListener('blur', () => {
					validateElem(elem);
				});
			}
		}
	}
};

export default validateForm;