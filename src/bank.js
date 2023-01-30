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
		// input.setBalance(this.#runningBalance.toFixed(2)); // add a balance property to the input (object)
		const obj = {
			date: input.getDate(),
			credit: input.getCredit(),
			balance: this.#runningBalance.toFixed(2),
			dateObject: input.getDateObject(),
		}; // get the value of each property
		this.#transactions.push(obj); // add properties into transactions array
	}

	withdraw(input) {
		this.#runningBalance -= input.getDebit(); // take away debit from runningBalance
		// input.balance = this.#runningBalance.toFixed(2); // add a balance property to the input (object)
		const obj = {
			date: input.getDate(),
			debit: input.getDebit(),
			balance: this.#runningBalance.toFixed(2),
			dateObject: input.getDateObject(),
		};
		this.#transactions.push(obj); // add input (object) into transactions array
	}
}
