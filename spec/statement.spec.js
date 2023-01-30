// testing for statement class using jasmine

import Statement from '../src/statement.js';

describe('Tests for Statement Class', () => {
	describe('when calling Statement', () => {
		//* TEST 15
		it('should run getTransactions from within an object', () => {
			// Arrange
			const dummyBank = { getTransactions: () => {} };
			const bankSpy = spyOn(dummyBank, 'getTransactions');

			// Act
			Statement.getTransactions(dummyBank);

			// Assert
			expect(bankSpy).toHaveBeenCalled();
		});

		//* TEST 16
		it('should print transactions in table form', () => {
			// Arrange
			const dummyBank = {
				getTransactions: () => {
					['test', 'array'];
				},
			};

			// Act
			const result = Statement.getStatement(dummyBank);

			// Assert
			expect(result).toBeDefined();
		});
	});
});
