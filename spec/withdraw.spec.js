// testing for withdraw class

import Withdraw from '../src/withdraw.js';

describe('Testing the Withdraw Class', () => {
	describe('when creating an instance of Withdraw', () => {
		//* TEST 7
		it('should allow the user to set the debit amount', () => {
			// Arrange
			const input = 500;
			const testWithdraw = new Withdraw(input);

			// Act
			const result = testWithdraw.getDebit();

			// Assert
			expect(result).toBe(500);
		});
	});

	describe('Edge Cases', () => {
		describe('when assigning debit', () => {
			//* TEST 11
			it('should only accept positive numbers', () => {
				// Arrange
				const input = -500;
				const testWithdraw = new Withdraw(input);

				// Assert
				expect(testWithdraw.getDebit()).toBe(0);
			});
		});
	});
});
