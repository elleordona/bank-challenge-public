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
	});
});
