export default class Deposit {
	// properties
	#credit;

	// constructor
	constructor(credit) {
		if (typeof credit != 'number' || credit < 0) {
			console.log('Input Invalid. Credit set to 0');
			this.#credit = 0;
		} else {
			this.#credit = credit;
		}
	}

	// getters
	getCredit() {
		return this.#credit;
	}
}
