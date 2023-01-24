export default class Deposit {
	// properties
	#credit;

	// constructor
	constructor(credit) {
		this.#credit = credit;
	}

	// getters
	getCredit() {
		return this.#credit;
	}
}
