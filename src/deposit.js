export default class Deposit {
	// properties
	#credit;
	#date;

	// constructor
	constructor(credit, dateString = '') {
		if (typeof credit != 'number' || credit < 0) {
			console.log('Input Invalid. Credit set to 0');
			this.#credit = 0;
		} else {
			this.#credit = credit;
		}
		this.#date = dateString;
	}

	// getters
	getCredit() {
		return this.#credit;
	}

	getDate() {
		return this.#date;
	}
}
