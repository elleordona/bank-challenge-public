export default class Withdraw {
	// properties
	#debit;
	#date;

	// constructor
	constructor(debit, dateString = '') {
		if (typeof debit != 'number' || debit < 0) {
			console.log('Input Invalid. Debit set to 0');
			this.#debit = 0;
		} else {
			this.#debit = debit;
		}
		this.#date = dateString;
	}

	// methods
	getDebit() {
		return this.#debit;
	}

	getDate() {
		return this.#date;
	}
}
