export default class Withdraw {
	// properties
	#balance;
	#debit;
	#date;
	#dateObject;

	// constructor
	constructor(debit, dateString = '') {
		if (typeof debit != 'number' || debit < 0) {
			console.log('Input Invalid. Debit set to 0');
			this.#debit = 0;
		} else {
			this.#debit = debit;
		}
		this.#date = dateString.replace(/-/g, '/');
		const splitDate = dateString.split('-');
		this.#dateObject = new Date(splitDate[2], splitDate[1] - 1, splitDate[0]);
	}

	// methods
	getDebit() {
		return this.#debit;
	}

	getDate() {
		return this.#date;
	}

	getDateObject() {
		return this.#dateObject;
	}

	getBalance() {
		return this.#balance;
	}

	// setters
	setBalance(input) {
		this.#balance = input;
	}
}
