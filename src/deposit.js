export default class Deposit {
	// properties
	#credit;
	#date;

	// constructor
	constructor(credit, dateString = '') {
		this.#credit = credit;

		if (typeof credit != 'number' || credit < 0) {
			console.log('Input Invalid. Credit set to 0');
			this.#credit = 0;
		}

		this.#date = dateString.replace(/-/g, '/');
	}

	// getters
	getCredit() {
		return this.#credit;
	}

	getDate() {
		return this.#date;
	}
}
