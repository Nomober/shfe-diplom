class allData {

	getData() {
	    return fetch('https://shfe-diplom.neto-server.ru/alldata')
	    	.then(response => response.json())
	    	.then(data => this.info = data.result)
  	}

	getSeanceConfig (seanceId) {
		return fetch( `https://shfe-diplom.neto-server.ru/hallconfig?seanceId=${seanceId}&date=${chosenDate}` )
	    .then( response => response.json())
	    .then(data => {
	    	this.hallConfig = data.result;
	    })
	}

	setTicket(params) {
		return fetch('https://shfe-diplom.neto-server.ru/ticket', {

			method: 'POST',

			body: params
		})
			.then(response => response.json())
			.then(data => {
				console.log(data)
				renderTicket();

			})
	}

	addHall() {
		fetch( 'https://shfe-diplom.neto-server.ru/hall', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				hallName: hallName.value
			})
		})
		    .then( (response) => response.json())
		    .then( (data) => {
		    	hallName.value = '';
		    	addHallPopup.classList.add('visually-hidden');
		    	this.info.halls = data.result.halls;
				
		    	renderHallsList(this.info.halls);
		    	renderSessionsList(this.info.halls, this.info.seances);
				location.reload(); 
		    });
			
	}

	
	deleteHall(hallId) {
		fetch( `https://shfe-diplom.neto-server.ru/hall/${hallId}`, {
	    			method: 'DELETE',
				})
			    .then( response => response.json())
			    .then( data => {
			    	this.info.halls = data.result.halls;
			    	this.info.seances = data.result.seances;
					
			    	renderHallsList(this.info.halls);
			    	renderSessionsList(this.info.halls, this.info.seances);
					location.reload();
				});	
	}


	saveConfig(params) {
		fetch(`https://shfe-diplom.neto-server.ru/hall/${configActiveHall.id}`, {
			method: 'POST',
			body: params
		})
			.then( response => response.json())
		    .then( data => {
		    	console.log(data);
		    	this.info.halls.find(x => x.id == data.result.id).hall_config = data.result.hall_config;
				location.reload();
		    })
	}

	savePrices(params) {
		fetch(`https://shfe-diplom.neto-server.ru/price/${pricesActiveHall.id}`, {
			method: 'POST',
			body: params
		})
			.then( response => response.json())
		    .then( data => {
		    	console.log( data );
		    	this.info.halls.find(x => x.id == data.result.id).hall_price_standart = data.result.hall_price_standart;
		    	this.info.halls.find(x => x.id == data.result.id).hall_price_vip = data.result.hall_price_vip;
				location.reload();
		    })
	}

	addFilm(params) {
		fetch( 'https://shfe-diplom.neto-server.ru/film', {
			method: 'POST',

			body: params
		})
		    .then( (response) => response.json())
		    .then( (data) => {
		    	console.log(data);

		    	filmNameInput.value = '';
				filmLengthInput.value = '';
				filmDescInput.value = '';
				filmCountryInput.value = '';
				uploadPosterButton.value = '';

		    	addFilmPopup.classList.toggle('visually-hidden');

		    	this.info.films = data.result.films;
		    	filmItems = this.info.films;

		    	renderFilmsList(this.info.films);
				location.reload();
		    })
	}	
	
	deleteFilm(filmId) {
		fetch( `https://shfe-diplom.neto-server.ru/film/${filmId}`, {
	    			method: 'DELETE',
		})
		    .then( response => response.json())
		    .then( data => {
		    	console.log( data );

		    	this.info.films = data.result.films;
		    	this.info.seances = data.result.seances;

		    	renderFilmsList(this.info.films);
		    	renderSessionsList(this.info.halls, this.info.seances);
				location.reload();
			});
	}

	addSession(params) {
		fetch( 'https://shfe-diplom.neto-server.ru/seance', {
			method: 'POST',

			body: params
		})
		    .then( (response) => response.json())
		    .then( (data) => {
		    	console.log(data) 
		    	if (data.success) {

			    	timeInput.value = '10:00';
			    	addSessionPopup.classList.toggle('visually-hidden');

			    	this.info.seances = data.result.seances;
			    	
			    	renderSessionsList(this.info.halls, this.info.seances);
		    	}
		    })
	}

	deleteSession(transferData) {
		fetch( `https://shfe-diplom.neto-server.ru/seance/${transferData}`, {
			method: 'DELETE',
			})
			    .then( response => response.json())
			    .then( data => {
			    	console.log( data );

			    	this.info.seances = data.result.seances;

			    	renderSessionsList(this.info.halls, this.info.seances);
				});
	}

	openHall(hall, params) {
		fetch( `https://shfe-diplom.neto-server.ru/open/${hall.id}`, {
			method: 'POST',
		body: params 
	})
	    .then( response => response.json())
	    .then( data => {
	    	console.log(data.result.halls);

	    	this.info.halls = data.result.halls;
	    	hallItems = this.info.halls;

	    	launchInfo(hall.id);
	    });
	}
}