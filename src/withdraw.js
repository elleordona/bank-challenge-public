export default class Withdraw {
	// properties
	#debit;

	// constructor
	constructor(debit) {
		this.#debit = debit;
	}

	// methods
	getDebit() {
		return this.#debit;
	}
}
