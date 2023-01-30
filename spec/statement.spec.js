// testing for statement class using jasmine

describe('Tests for Statement Class', () => {
	describe('when calling Statement', () => {
		//* TEST 15
		it('should run getTransactions from within an object', () => {
			// Arrange
			const dummyBank = { getTransactions: () => {} };
			const bankSpy = spyOn(dummyBank, 'getTransactions');

			// Act
			Statement(dummyBank);

			// Assert
			expect(bankSpy).toHaveBeenCalled();
		});
	});
});
