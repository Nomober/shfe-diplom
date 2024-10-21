const inputRows = document.getElementById('config-rows');
const inputSeats = document.getElementById('config-columns');
const configConfirm = document.querySelector('.save-button');
const configCancel = document.querySelector('.cancel-button');

let hallConfig = [];
let configActiveHall;

function getHallSeats (hall) {
	configActiveHall = hallItems.find(x => x.id === hall);
	hallConfig = configActiveHall.hall_config;
	inputRows.value = hallConfig.length;
	inputSeats.value = hallConfig[0].length;
	renderHallSeats();
	hallInput();
}

function hallInput () {
	inputRows.addEventListener('input', (e) => {
		if (!/\D/.test(inputRows.value)) {
			if (inputSeats.value) {
				hallConfig = [];
				for (let i = 0; i < inputRows.value; i++) {
					hallConfig.push([]);
					for (let x = 0; x < inputSeats.value; x++) {
						hallConfig[i].push('standart');
					}
				}
				setTimeout(() => {
					renderHallSeats();
				}, 2000)
			}
		}
	});

	inputSeats.addEventListener('input', (e) => {
		if (!/\D/.test(inputSeats.value)) {
			if (inputRows.value) {
				hallConfig = []
				for (let i = 0; i < inputRows.value; i++) {
					hallConfig.push([]);
					for (let x = 0; x < inputSeats.value; x++) {
						hallConfig[i].push('standart');
					}
				}
				setTimeout(() => {
					renderHallSeats();
				}, 2000)
				
			}
		}
	});
}

function renderHallSeats () {
	const hallGrid = document.querySelector('.hall__scheme-grid');
	const hallGridCell = document.createElement('div');

	hallGrid.innerHTML = '';

	hallGrid.style.setProperty('grid-template-rows', `repeat(${hallConfig.length}, 26px)`);
	hallGrid.style.setProperty('grid-template-columns', `repeat(${hallConfig[0].length}, 26px)`);
	hallConfig.forEach((row, rowIndex) => {
		row.forEach((place, placeIndex) => {

			const hallGridCell = document.createElement('div');
			
			hallGrid.appendChild(hallGridCell);
			hallGridCell.classList.add('seat');
			if (place === 'standart') {
				hallGridCell.classList.add('standart')
			} else if (place === 'vip') {
				hallGridCell.classList.add('vip')
			};
			hallGridCell.addEventListener('click', (e) => {
				if ([...hallGridCell.classList].includes('standart')) {
					hallGridCell.classList.remove('standart');
					hallGridCell.classList.add('vip');
					hallConfig[rowIndex][placeIndex] = 'vip';
				} else if ([...hallGridCell.classList].includes('vip')) {
					hallGridCell.classList.remove('vip');
					hallConfig[rowIndex][placeIndex] = 'disabled'
				} else {
					hallGridCell.classList.add('standart');
					hallConfig[rowIndex][placeIndex] = 'standart'
				}
			});
		});
	});
};

 function saveHallSeats () {
	const placeCount = hallConfig[0].length;
	const rowCount = hallConfig.length;
	const params = new FormData();
	params.set('rowCount', rowCount);
	params.set('placeCount', placeCount);
	params.set('config', JSON.stringify(hallConfig));

	data.saveConfig(params);
}

function cancelHallSeats () {
	data.getData()
	hallItems = data.info.halls;
	getHallSeats(configActiveHall.id)
}

configConfirm.addEventListener('click', saveHallSeats);
configCancel.addEventListener('click', cancelHallSeats);