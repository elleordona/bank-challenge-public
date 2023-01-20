export default class Bank {
    // properties
    #accountBalance = 0;
    #depositAmounts = [];

    // getters
    getAccountBalance() {
        return this.#accountBalance;
    }

    getDepositAmounts() {
        return this.#depositAmounts;
    }

    // functions
    deposit(amount) {
        this.#depositAmounts.push(amount);
        this.#accountBalance += amount;
    }
}
