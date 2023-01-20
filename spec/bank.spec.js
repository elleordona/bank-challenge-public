// testing for bank class using jasmine

describe("Bank class tests", () => {
  describe("When creating an instance of Bank", () => {
    //* TEST 1
    it("should set accountBalance to zero", () => {
      // Arrange
      const testBank = new Bank();

      // Act
      result = testBank.getAccountBalance();

      // Assert
      expect(result).toBe(0);
    });
  });
});
