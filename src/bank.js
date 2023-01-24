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
}

// export default class Bank {
// 	// properties
// 	#accountBalance = 0;
// 	#depositAmounts = [];
// 	#withdrawAmounts = [];

// 	// getters
// 	getAccountBalance() {
// 		return this.#accountBalance;
// 	}

// 	getDepositAmounts() {
// 		return this.#depositAmounts;
// 	}

// 	getWithdrawAmounts() {
// 		return this.#withdrawAmounts;
// 	}

// 	// functions
// 	deposit(amount) {
// 		if (amount < 0 || typeof amount != 'number') {
// 			throw new Error(`Invalid amount`);
// 		} else {
// 			this.#depositAmounts.push(amount);
// 			this.#accountBalance += amount;
// 		}
// 	}

// 	withdraw(amount) {
// 		if (amount < 0 || typeof amount != 'number') {
// 			throw new Error(`Invalid amount`);
// 		} else {
// 			this.#withdrawAmounts.push(amount);
// 			this.#accountBalance -= amount;
// 		}
// 	}
// }
