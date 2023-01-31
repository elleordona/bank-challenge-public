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

	describe('when calling deposit()', () => {
		//* TEST 4
		it('should call getCredit from within an object', () => {
			// Arrange
			const testBank = new Bank();
			const dummyDeposit = {
				getCredit: () => {},
				getDate: () => {},
				getDateObject: () => {},
			}; // dummy deposit
			const depositSpy = spyOn(dummyDeposit, 'getCredit'); // spy to keep an eye on getCredit within dummyDeposit

			// Act
			testBank.deposit(dummyDeposit);

			// Assert
			expect(depositSpy).toHaveBeenCalled();
		});

		//* TEST 5
		it('should add the credit to the runningBalance', () => {
			// Arrange
			const testBank = new Bank();
			const dummyDeposit = {
				getCredit: () => 1000,
				getDate: () => {},
				getDateObject: () => {},
			}; // credit set to 1000

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
			const dummyDeposit = {
				getCredit: () => 1000,
				getDate: () => {},
				getDateObject: () => {},
			};

			// Act
			testBank.deposit(dummyDeposit);

			// Assert
			expect(testBank.getTransactions()).toHaveSize(1); // cannot look at the contents of the array as it requires logic in the dummyDeposit but size should only increase to 1 even though they are multiple elements within the input
		});
	});

	describe('when calling withdraw()', () => {
		//* TEST 8
		it('should call getDebit from within an object', () => {
			// Arrange
			const testBank = new Bank();
			const dummyWithdraw = {
				getDebit: () => {},
				getDate: () => {},
				getDateObject: () => {},
			};
			const withdrawSpy = spyOn(dummyWithdraw, 'getDebit');

			// Act
			testBank.withdraw(dummyWithdraw);

			// Assert
			expect(withdrawSpy).toHaveBeenCalled();
		});

		//* TEST 9
		it('should take away debit from the runningBalance', () => {
			// Arrange
			const testBank = new Bank();
			const dummyWithdraw = {
				getDebit: () => 500,
				getDate: () => {},
				getDateObject: () => {},
			};

			// Act
			testBank.withdraw(dummyWithdraw);

			// Assert
			expect(testBank.getRunningBalance()).toBe(-500);
		});

		//* TEST 10
		it('should debit and runningBalance into transactions', () => {
			// Arrange
			const testBank = new Bank();
			const dummyWithdraw = {
				getDebit: () => 500,
				getDate: () => {},
				getDateObject: () => {},
			};

			// Act
			testBank.withdraw(dummyWithdraw);

			// Assert
			expect(testBank.getTransactions()).toHaveSize(1);
		});
	});
});
