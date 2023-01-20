export default class Bank {
  // properties
  #accountBalance = 0;

  // functions
  getAccountBalance() {
    return this.#accountBalance;
  }

  deposit(amount) {
    this.#accountBalance += amount;
  }
}
