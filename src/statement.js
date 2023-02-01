export default class Statement {
	// properties
	static #bankTransactions;

	// methods
	static getStatement(bank) {
		this.#bankTransactions = bank.getTransactions();
		return console.table(this.#bankTransactions, ['date', 'credit', 'debit', 'balance']);
	}
}
