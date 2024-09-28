let data = new allData;

const hallConfig = document.querySelector('.user-hall');
const hallSeanceInfo = document.querySelector('.user-hall__info');
const hallGrid = document.querySelector('.user-scheme__grid');
const hallGridLegendStandart = document.querySelector('.legend-standart');
const hallGridLegendVip = document.querySelector('.legend-vip');
const bookingButton = document.querySelector('.user-hall__reserve');

const seanceId = window.localStorage.getItem('seanceId');
const seanceHallId = window.localStorage.getItem('seanceHallId');
const seanceTime = window.localStorage.getItem('seanceTime');
const filmTitle = window.localStorage.getItem('filmTitle');
const chosenDate = window.localStorage.getItem('chosenDate');

async function renderSeanceConfig () {
	await data.getData();
	await data.getSeanceConfig(seanceId);

	hallGrid.innerHTML = "";

	const hallsInfo = data.info.halls;
	const currentHall = hallsInfo.find((e) => e.id == seanceHallId);
	const hallTitle = currentHall.hall_name;
	const hallConfig = data.hallConfig;
	let chosenSeats = [];

	hallSeanceInfo.insertAdjacentHTML('beforeend', `
		<h2 class="user-hall__seans-name">${filmTitle}</h2>
		<p class="user-hall__seans-start">Начало сеанса: ${seanceTime}</p>
		<p class="user-hall__hall-name">${hallTitle}</p>
	`);

	hallGrid.style.setProperty('grid-template-rows', `repeat(${hallConfig.length}, 20px)`);
	hallGrid.style.setProperty('grid-template-columns', `repeat(${hallConfig[0].length}, 20px)`);

	hallConfig.forEach((row, rowIndex) => {
		row.forEach((place, placeIndex) => {

			const hallGridCell = document.createElement('div');
			
			hallGrid.appendChild(hallGridCell);
			hallGridCell.classList.add('user-scheme__seat');
			if (place === 'standart') {
				hallGridCell.classList.add('user__free-seat')
			} else if (place === 'vip') {
				hallGridCell.classList.add('user__vip-seat')
			} else if (place === 'taken') {
				hallGridCell.classList.add('user__busy-seat')
			};
			hallGridCell.addEventListener('click', (e) => {
				if ([...hallGridCell.classList].includes('user__free-seat') && ![...hallGridCell.classList].includes('user__selected-seat')) {
					hallGridCell.classList.add('user__selected-seat');
					chosenSeats.push({
						row: rowIndex + 1,
						place: placeIndex + 1,
						coast: currentHall.hall_price_standart,
					});
				} else if ([...hallGridCell.classList].includes('user__vip-seat') && ![...hallGridCell.classList].includes('user__selected-seat')) {
					hallGridCell.classList.add('user__selected-seat');
					chosenSeats.push({
						row: rowIndex + 1,
						place: placeIndex + 1,
						coast: currentHall.hall_price_vip,
					});
				} else if ([...hallGridCell.classList].includes('user__selected-seat')) {
					hallGridCell.classList.remove('user__selected-seat');
					for (let i = 0; i < chosenSeats.length; i++) {
						const row = rowIndex + 1;
						const place = placeIndex + 1;
						if (chosenSeats[i].row == row && chosenSeats[i].place == place) {
							chosenSeats.splice(i, 1);
							break;
						}
					}
				}
			});
		});
	});

	hallGridLegendStandart.insertAdjacentHTML('beforeend', `Свободно (${currentHall.hall_price_standart}руб)`);
	hallGridLegendVip.insertAdjacentHTML('beforeend', `Свободно VIP (${currentHall.hall_price_vip}руб)`);

	bookingButton.addEventListener('click', e => {
		e.preventDefault();

		if (!chosenSeats.length == 0) {
			window.localStorage.setItem('chosenSeats', JSON.stringify(chosenSeats));
			window.localStorage.setItem('hallTitle', hallTitle);
			window.open('payment.html', '_self');
		} else {
			alert('Выберите места');
		}
	})
};

renderSeanceConfig();