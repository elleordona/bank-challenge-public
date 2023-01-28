export default class Withdraw {
	// properties
	#debit;
	#dateString;
	#date;

	// constructor
	constructor(debit, dateString = '') {
		if (typeof debit != 'number' || debit < 0) {
			console.log('Input Invalid. Debit set to 0');
			this.#debit = 0;
		} else {
			this.#debit = debit.toFixed(2);
		}
		this.#dateString = dateString.replace(/-/g, '/');
		const splitDate = dateString.split('-');
		this.#date = new Date(splitDate[2], splitDate[1] - 1, splitDate[0]);
	}

	// methods
	getDebit() {
		return this.#debit;
	}

	getDateString() {
		return this.#dateString;
	}

	getDate() {
		return this.#date;
	}
}
