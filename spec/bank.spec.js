// testing for bank class using jasmine

// import Bank from src
import Bank from "../src/bank.js";

describe("Bank class tests", () => {
  // set up variables
  let testBank;

  // run this before each test
  beforeEach(() => {
    testBank = new Bank();
  });

  // run this after each test (Clean Up)
  afterEach(() => {
    testBank = undefined;
  });

  describe("When creating an instance of Bank", () => {
    //* TEST 1
    it("should set accountBalance to zero", () => {
      // Act
      const result = testBank.getAccountBalance();

      // Assert
      expect(result).toBe(0);
    });
  });

  describe("when calling deposit", () => {
    //* TEST 2
    it("should increase accountBalance by the specified amount", () => {
      // Arrange
      const amount = 1000;

      // Act
      testBank.deposit(amount);
      const result = testBank.getAccountBalance();

      // Assert
      expect(result).toBe(1000);
    });
  });
});
