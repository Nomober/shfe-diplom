const addFilmPopupButton = document.querySelector('.sessions__add');
const addFilmPopup = document.querySelector('.addfilm');
const addFilmForm = document.querySelector('.addfilm__form');
const filmNameInput = document.getElementById('film-name');
const filmLengthInput = document.getElementById('film-duration');
const filmDescInput = document.getElementById('film-description');
const filmCountryInput = document.getElementById('film-country');
const submitFilmButton = document.querySelector('.addfilm__add-film');
const uploadPosterButton = document.getElementById('add-poster');
const filmsList = document.querySelector('.admin-movie__list');


addFilmPopupButton.addEventListener('click', (e) => {
	addFilmPopup.classList.toggle('visually-hidden');
})

submitFilmButton.addEventListener('click', (e) => {
	e.preventDefault();

	filmsList.innerHTML = "";

	const params = new FormData(addFilmForm);

	data.addFilm(params)
})

function renderFilmsList (filmItems) {

	filmsList.innerHTML = "";
	filmItems.forEach((element) => {
		filmsList.insertAdjacentHTML('beforeend', 
			`<li class="admin-movie" id="film${element.id}" draggable="true">
				<img class="admin-movie__poster" src="${element.film_poster}" alt="постер фильма">
				<div class="admin-movie__info">
					<h3 class="admin-movie__name">${element.film_name}</h3>
					<span class="admin-movie__duration">${element.film_duration}</span>
					<button class="admin-movie__delete-btn"></button>
				</div>
            </li>`
			)
		filmSelect.insertAdjacentHTML('beforeend', `<option value="${element.id}">${element.film_name}</option>`);
	});

	const deleteFilmButton = [...document.querySelectorAll('.admin-movie__delete-btn')];
	const filmCards = [...document.querySelectorAll('.admin-movie')];

	filmCards.forEach((element, index) => {
		element.addEventListener('dragstart', (e) => {	
			console.log('dragstart')				
			dragged = element;
		})

		element.addEventListener('dragend', (e) => {
			dragged = null;
		})
	});

	renderSessionsList(hallItems, seanceItems);
	deleteFilm(deleteFilmButton);

};

function deleteFilm (buttonArray) {
	buttonArray.forEach((element) => {
			element.addEventListener('click', (e) => {
				e.preventDefault();
				const filmId = element.closest('.admin-movie').id.slice(4);

				data.deleteFilm(filmId);				
				})	
		})
}