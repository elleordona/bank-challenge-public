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
		//* TEST 4
		it('should call getAmount from within an object', () => {
			// Arrange
			const testBank = new Bank();
			const dummyDeposit = { getCredit: () => {} }; // dummy deposit
			const depositSpy = spyOn(dummyDeposit, 'getCredit'); // spy to keep an eye on getAmount within dummyDeposit

			// Act
			testBank.deposit(dummyDeposit);

			// Assert
			expect(depositSpy).toHaveBeenCalled();
		});

		//* TEST 5
		it('should add the credit to the runningBalance', () => {
			// Arrange
			const testBank = new Bank();
			const dummyDeposit = { getCredit: () => 1000 }; // credit set to 1000

			// Act
			testBank.deposit(dummyDeposit);
			const result = testBank.getRunningBalance();

			// Assert
			expect(result).toBe(1000);
		});

		//* TEST 6
		it('should add credit and runningBalance into transactions array', () => {
			// Arrange
			const testBank = new Bank();
			const dummyDeposit = { getCredit: () => 1000 };

			// Act
			testBank.deposit(dummyDeposit);

			// Assert
			expect(testBank.getTransactions()).toEqual([{ credit: 1000, balance: 1000 }]);
		});
	});
});
