export default class Bank {
    // properties
    #accountBalance = 0;
    #depositAmounts = [];
    #withdrawAmounts = [];

    // getters
    getAccountBalance() {
        return this.#accountBalance;
    }

    getDepositAmounts() {
        return this.#depositAmounts;
    }

    getWithdrawAmounts() {
        return this.#withdrawAmounts;
    }

    // functions
    deposit(amount) {
        this.#depositAmounts.push(amount);
        this.#accountBalance += amount;
    }

    withdraw(amount) {
        this.#withdrawAmounts.push(amount);
        this.#accountBalance -= amount;
    }
}
