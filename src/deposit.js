export default class Deposit {
	// properties
	#credit;
	#date;
	#dateObject;

	// constructor
	constructor(credit, dateString = '') {
		if (typeof credit != 'number' || credit < 0) {
			console.log('Input Invalid. Credit set to 0');
			this.#credit = 0;
		} else {
			this.#credit = credit;
		}
		this.#date = dateString.replace(/-/g, '/');
		const splitDate = dateString.split('-');
		this.#dateObject = new Date(splitDate[2], splitDate[1] - 1, splitDate[0]);
	}

	// getters
	getCredit() {
		return this.#credit;
	}

	getDate() {
		return this.#date;
	}

	getDateObject() {
		return this.#dateObject;
	}
}
