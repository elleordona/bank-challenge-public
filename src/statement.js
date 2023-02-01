export default class Statement {
	// properties
	static #bank;
	static #bankTransactions;

	// methods
	static getStatement(bank) {
		this.#bank = bank;
		this.#bankTransactions = bank.getTransactions();
		return console.table(this.#bankTransactions, ['date', 'credit', 'debit', 'balance']);
	}
}
