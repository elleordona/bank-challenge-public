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
			expect(result).toBe('1000.00');
		});

		//* TEST 12
		it('should default date to an empty string', () => {
			// Arrange
			const testDeposit = new Deposit(1000);

			// Act
			const result = testDeposit.getDateString();

			// Arrange
			expect(result).toBe(''); // if no input then it should default to empty string
		});

		//* TEST 13
		it('should allow the user to set the date', () => {
			// Arrange
			const dateString = '10-01-2012';
			const testDeposit = new Deposit(1000, dateString);

			// Act
			const result = testDeposit.getDateString();

			// Assert
			expect(result).toBe('10/01/2012');
		});

		//* TEST 14
		it('should create date into a instance of Date', () => {
			// Arrange
			const dateString = '10-01-2012';
			const testDeposit = new Deposit(500, dateString);

			// Act
			const result = testDeposit.getDate();

			// Assert
			expect(result).toBeInstanceOf(Date);
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
