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
			credit: (input.getCredit() - 0).toFixed(2), // - 0 ensure getCredit is a number
			balance: this.#runningBalance.toFixed(2),
		}; // get the value of each property
		this.#transactions.unshift(obj); // add properties into transactions array
	}

	withdraw(input) {
		this.#runningBalance -= input.getDebit(); // take away debit from runningBalance
		const obj = {
			date: input.getDate(),
			debit: (input.getDebit() - 0).toFixed(2), // - 0 ensures getDebit is a number
			balance: this.#runningBalance.toFixed(2),
		};
		this.#transactions.unshift(obj); // add input (object) into beginning of the transactions array
	}
}
