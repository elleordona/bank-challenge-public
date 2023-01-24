// testing for bank class using jasmine

// import Bank from src
import Bank from '../src/bank.js';

describe('Testing Bank Class', () => {
	describe('When creating an instance of Bank', () => {
		//* TEST 1
		it('should have runningBalance set to zero', () => {
			// Arrange
			const testBank = new Bank(); // create instance of Bank

			// Act
			const result = testBank.getRunningBalance(); // using getter as runningBalance is private

			// Assert
			expect(result).toBe(0);
		});

		//* TEST 2
		it('should have a empty array called transactions', () => {
			// Arrange
			const testBank = new Bank();

			// Act
			const result = testBank.getTransactions(); // using a getter as transactions is private

			// Assert
			expect(result).toHaveSize(0);
		});
	});

	describe('when calling deposit', () => {
		it('should call getAmount from within an object', () => {
			// Arrange
			const testBank = new Bank();
			const dummyDeposit = { getAmount: () => {} }; // dummy deposit
			const depositSpy = spyOn(dummyDeposit, 'getAmount'); // spy to keep an eye on getAmount within dummyDeposit

			// Act
			testBank.deposit(dummyDeposit);

			// Assert
			expect(depositSpy).toHaveBeenCalled();
		});
	});
});
