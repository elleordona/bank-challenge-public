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

		//* TEST 12
		it('should default date to an empty string', () => {
			// Arrange
			const testWithdraw = new Withdraw(500);

			// Act
			const result = testWithdraw.getDate();

			//
			expect(result).toBe('');
		});

		//* TEST 13
		it('should allow the user to set the date', () => {
			// Arrange
			const dateString = '10-01-2012';
			const testWithdraw = new Withdraw(500, dateString);

			// Act
			const result = testWithdraw.getDate();

			// Assert
			expect(result).toBe('10/01/2012');
		});

		//* TEST 14
		//! deleted as it function is no longer used
		// it('should create date into an instance of Date', () => {
		// 	// Arrange
		// 	const dateString = '10-01-2012';
		// 	const testWithdraw = new Withdraw(500, dateString);

		// 	// Act
		// 	const result = testWithdraw.getDateObject();

		// 	// Assert
		// 	expect(result).toBeInstanceOf(Date);
		// });
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
