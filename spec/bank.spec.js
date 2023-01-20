// testing for bank class using jasmine

// import Bank from src
import Bank from "../src/bank.js";

describe("Bank class tests", () => {
  describe("When creating an instance of Bank", () => {
    //* TEST 1
    it("should set accountBalance to zero", () => {
      // Arrange
      const testBank = new Bank();

      // Act
      const result = testBank.getAccountBalance();

      // Assert
      expect(result).toBe(0);
    });
  });
});
