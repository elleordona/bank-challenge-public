export default class Statement {
	// properties
	static #bank;
	static #bankTransactions;

	//constructor
	// constructor(bank) {
	// 	this.#bank = bank;
	// 	this.#bankTransactions = bank.getTransactions();
	// }

	// methods
	static getTransactions(bank) {
		this.#bank = bank;
		this.#bankTransactions = bank.getTransactions();
	}
}
