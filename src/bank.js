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
		input.balance = this.#runningBalance; // add a balance property to the input (object)
		this.#transactions.push(input); // add input (object) into transactions array
	}

	withdraw(input) {
		this.#runningBalance -= input.getDebit(); // take away debit from runningBalance
		input.balance = this.#runningBalance; // add a balance property to the input (object)
		this.#transactions.push(input); // add input (object) into transactions array
	}
}
