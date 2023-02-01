export default class Withdraw {
	// properties
	#debit;
	#date;

	// constructor
	constructor(debit, dateString = '') {
		this.#debit = debit;

		if (typeof debit != 'number' || debit < 0) {
			console.log('Input Invalid. Debit set to 0');
			this.#debit = 0;
		}

		this.#date = dateString.replace(/-/g, '/');
	}

	// methods
	getDebit() {
		return this.#debit;
	}

	getDate() {
		return this.#date;
	}
}
