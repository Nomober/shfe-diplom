const calendarWrapper = document.querySelector('.user-nav');
const calendar = document.querySelector('.nav__list');
const today = new Date();
const dayButtonsCount = 6;

let isCalendarSwitched = 0;
let todayDate = new Date(today);
let	chosenDate = `${todayDate.getFullYear()}-${todayDate.getMonth() + 1}-${todayDate.getDate()}`;
const todayDateString = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

let dateItem = new Date(todayDate);

function getDayName(date) {
	const days = ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'];
	return days[date.getDay()];
}

function renderCalendar (date) {

	calendar.innerHTML = '';

	for (let i = 0; i < dayButtonsCount; i++) {
		const calendarItem = document.createElement('li');
		calendarItem.classList.add('nav__item');
		calendar.appendChild(calendarItem);
	}

	const calendarItems = [...calendar.children]

	let todayDate = new Date(date)	

	let activeDate = 0;

	renderFilmCards();


	calendarItems.forEach((element, index) => {
		element.innerHTML = '';
		element.classList.remove('nav__item_active');
		element.classList.remove('nav__item-red');

		const dayName = document.createElement('p');
		const dayNumber = document.createElement('p');
		dayName.classList.add('date__day');
		dayNumber.classList.add('date__number');
		dayName.textContent = `${getDayName(dateItem)},`;
		dayNumber.textContent = dateItem.getDate();

		if (today.getDate() === dateItem.getDate()) {
				dayName.textContent = `Сегодня`;
				dayNumber.textContent = `${getDayName(dateItem)},${dateItem.getDate()}`;
			} else {
				dayName.textContent = `${getDayName(dateItem)},`;
				dayNumber.textContent = dateItem.getDate();			
			}

		element.appendChild(dayName);
		element.appendChild(dayNumber);

		if (dateItem.getDay() === 0 || dateItem.getDay() === 6) {
			element.classList.add('nav__item-red')
		}
		element.setAttribute('data-date', `${dateItem.getFullYear()}-${dateItem.getMonth() + 1}-${dateItem.getDate()}`)
		element.addEventListener('click', e => {
			if (index !== activeDate) {
				calendarItems[activeDate].classList.remove('nav__item_active');
				element.classList.add('nav__item_active');
				chosenDate = element.dataset.date;
				activeDate = index;
				renderFilmCards();
				console.log(chosenDate);
			}
		})
		dateItem.setDate(dateItem.getDate() + 1);	
	})

	calendarItems[activeDate].classList.add('nav__item_active');

	const calendarSwitch = document.createElement('li');
	const calendarSwitchText = document.createElement('p')
	calendarSwitch.classList.add('nav__item');
	calendarSwitchText.classList.add('nav__item-arrow');
	calendarSwitch.appendChild(calendarSwitchText);

	if (isCalendarSwitched === 0) {
		chosenDate = `${todayDate.getFullYear()}-${todayDate.getMonth() + 1}-${todayDate.getDate()}`;

		calendar.appendChild(calendarSwitch)
		calendarSwitchText.textContent = '>';
		calendarSwitch.addEventListener('click', e => {
			dateItem.setDate(dateItem.getDate());
			isCalendarSwitched = 1;
			e.target.innerHTML = '';
			renderCalendar(dateItem);
		})

	} else {
		chosenDate = calendarItems[0].dataset.date;

		calendar.prepend(calendarSwitch)
		calendarSwitchText.textContent = '<';
		calendarSwitch.addEventListener('click', e => {
			dateItem.setDate(date.getDate());
			isCalendarSwitched = 0;
			e.target.innerHTML = '';
			dateItem = new Date(today);
			renderCalendar(dateItem);
		})
	}
	console.log(chosenDate);
}



renderCalendar(today);