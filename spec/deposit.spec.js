// tests for deposit class using jasmine

import Deposit from '../src/deposit.js';

describe('Testing Deposit Class', () => {
	describe('when creating an instance of Deposit', () => {
		//* TEST 3
		it('should allow the user to set the credit amount', () => {
			// Arrange
			const input = 1000;
			const testDeposit = new Deposit(input);

			// Act
			const result = testDeposit.getCredit();

			// Assert
			expect(result).toBe(1000);
		});
	});

	describe('Edge Cases', () => {
		describe('when assigning credit', () => {
			//* TEST 11
			it('should only allow positive numbers', () => {
				// Arrange
				const input = -1000;
				const testDeposit = new Deposit(input);

				// Assert
				expect(testDeposit.getCredit()).toBe(0);
			});
		});
	});
});
