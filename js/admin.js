let data = new allData;
let hallItems;
let filmItems;
let seanceItems;
let dragged;

async function getData() {
	await data.getData();

	console.log(data.info)
	hallItems = data.info.halls;
	filmItems = data.info.films;
	seanceItems = data.info.seances;
	renderHallsList(data.info.halls);
	renderHallSwitch (document.querySelector('.select-hall__list-config'), hallItems);
	renderHallSwitch (document.querySelector('.select-hall__list-prices'), hallItems);
	renderHallSwitch (document.querySelector('.select-hall__list-sales'), hallItems);
	renderFilmsList(filmItems);
	renderSessionsList(hallItems, seanceItems);
}

getData();

const closePopup = [...document.querySelectorAll('.popup__close')];
const cancelPopup = [...document.querySelectorAll('.popup__cancel')]

closePopup.forEach((element) => {
	element.addEventListener('click', (e) => {
		element.closest('.popup-wrapper').classList.toggle('visually-hidden');
	})
});

cancelPopup.forEach((element) => {
	element.addEventListener('click', (e) => {
		e.preventDefault();
		element.closest('.popup-wrapper').classList.toggle('visually-hidden');
	})
});