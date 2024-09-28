const addHallPopupButton = document.querySelector('.halls__add-button');
const addHallPopup = document.querySelector('.addhall');
const addHallForm = document.querySelector('.addhall__form');
const hallName = document.querySelector('.addhall__name');
const submitHallButton = document.querySelector('.addhall__create');
const hallsList = document.querySelector('.halls__list');

function renderHallsList (hallsInfo) {
	hallsList.innerHTML = "";
	hallsInfo.forEach((element) => {
		hallsList.insertAdjacentHTML('beforeend', 
			`<li class="halls__item" id="hall${element.id}">${element.hall_name}
				<button class="halls__item-delete"></button>
			</li>`
			)
	});
	
	const deleteHallButton = [...document.querySelectorAll('.halls__item-delete')];
	deleteHall(deleteHallButton);
	renderHallSwitch (document.querySelector('.select-hall__list-config'), hallsInfo);
	renderHallSwitch (document.querySelector('.select-hall__list-prices'), hallsInfo);
	renderHallSwitch (document.querySelector('.select-hall__list-sales'), hallsInfo);
};

function deleteHall (buttonArray) {
		buttonArray.forEach((element) => {
			element.addEventListener('click', (e) => {
				e.preventDefault();
				const hallId = element.closest('.halls__item').id.slice(4);

				data.deleteHall(hallId);
			});
		})
};

function renderHallSwitch (hallSwitchContainer, hallsInfo) {
	hallSwitchContainer.innerHTML = '';
	hallsInfo.forEach((element) => {
		hallSwitchContainer.insertAdjacentHTML('beforeend', `<li class="select-hall__item">${element.hall_name}</li>`)
	});
	const hallItemsRendered = [...hallSwitchContainer.children];

	hallItemsRendered[0].classList.add('select-hall__item_selected');

	let activeHallIndex = 0;
	let activeHallName = hallItemsRendered[0].textContent;
	let activeHallId = hallsInfo[0].id;
	if (hallItemsRendered[0].closest('.select-hall__list-config')) {
		getHallSeats(activeHallId)
	} else if (hallItemsRendered[0].closest('.select-hall__list-prices')) {
		getHallPrices(activeHallId)
	} else if (hallItemsRendered[0].closest('.select-hall__list-sales')) {
		launchInfo(activeHallId)
	};

	hallItemsRendered.forEach((element, index) => {
		element.addEventListener('click', (e) => {
			if (index !== activeHallIndex) {
				hallItemsRendered[activeHallIndex].classList.remove('select-hall__item_selected');
				element.classList.add('select-hall__item_selected');
				activeHallIndex = index;
				activeHallName = element.textContent;
				activeHallId = hallsInfo.find(x => x.hall_name === activeHallName).id;
				if (element.closest('.select-hall__list-config')) {
					inputRows.value = '';
					inputSeats.value = '';
					getHallSeats(activeHallId)
				} else if (element.closest('.select-hall__list-prices')) {
					getHallPrices(activeHallId)
				} else if (element.closest('.select-hall__list-sales')) {
					launchInfo(activeHallId)
				};
			}
		})
	})
};

addHallPopupButton.addEventListener('click', (e) => {
	addHallPopup.classList.remove('visually-hidden');
});

submitHallButton.addEventListener('click', (e) => {
	e.preventDefault();

	hallsList.innerHTML = "";

	data.addHall();
});