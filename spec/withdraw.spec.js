// testing for withdraw class

import Withdraw from '../src/withdraw.js';

describe('Testing the Withdraw Class', () => {
	describe('when creating an instance of Withdraw', () => {
		//* TEST 7
		it('should allow the user to set the debit amount', () => {
			// Arrange
			const input = 1000;
			const testWithdraw = new Withdraw(input);

			// Act
			const result = testWithdraw.getDebit();

			// Assert
			expect(result).toBe(1000);
		});
	});
});
