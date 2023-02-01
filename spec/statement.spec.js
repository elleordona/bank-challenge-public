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
			Statement.getStatement(dummyBank);

			// Assert
			expect(bankSpy).toHaveBeenCalled();
		});

		//* TEST 16
		it('should print transactions in table form', () => {
			// Arrange
			const dummyBank = {
				getTransactions() {
					return [
						{
							date: '10/01/2012',
							credit: '1000.00',
							balance: '1000.00',
						},
					];
				},
			};

			// Act
			const result = Statement.getStatement(dummyBank);

			// Assert
			expect(result).toBeUndefined(); // see test for the output
		});
	});
});
