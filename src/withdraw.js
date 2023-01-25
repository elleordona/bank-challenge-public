export default class Withdraw {
	// properties
	#debit;

	// constructor
	constructor(debit) {
		if (typeof debit != 'number' || debit < 0) {
			console.log('Input Invalid. Debit set to 0');
			this.#debit = 0;
		} else {
			this.#debit = debit;
		}
	}

	// methods
	getDebit() {
		return this.#debit;
	}
}
