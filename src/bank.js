export default class Bank {
	// properties
	#runningBalance = 0;
	#transactions = [];

	//getters
	getRunningBalance() {
		return this.#runningBalance;
	}

	getTransactions() {
		return this.#transactions;
	}

	// methods
	deposit(input) {
		this.#runningBalance += input.getCredit(); // add credit to runningBalance
		const obj = {
			date: input.getDate(),
			credit: input.getCredit().toFixed(2),
			balance: this.#runningBalance.toFixed(2),
			dateObject: input.getDateObject(),
		}; // get the value of each property
		this.#transactions.unshift(obj); // add properties into transactions array
	}

	withdraw(input) {
		this.#runningBalance -= input.getDebit(); // take away debit from runningBalance
		const obj = {
			date: input.getDate(),
			debit: input.getDebit().toFixed(2),
			balance: this.#runningBalance.toFixed(2),
			dateObject: input.getDateObject(),
		};
		this.#transactions.unshift(obj); // add input (object) into beginning of the transactions array
	}
}
