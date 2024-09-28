const launchButton = document.querySelector('.sales__button');

let launchActiveHall;
let isHallOpen;

launchButton.addEventListener('click', e => {
	openHall(launchActiveHall);
});

function openHall (hall) {
	const params = new FormData()
	if (isHallOpen === 0) {
		params.set('hallOpen', '1')
	} else {
		params.set('hallOpen', '0')
	}
	
	data.openHall(launchActiveHall, params)
}

function launchInfo (hallId) {
	launchActiveHall = hallItems.find(x => x.id === hallId);
	isHallOpen = launchActiveHall.hall_open;
	if (isHallOpen === 0) {
		launchButton.textContent = 'Открыть продажу билетов';
	} else {
		launchButton.textContent = 'Приостановить продажу билетов'
	}
}