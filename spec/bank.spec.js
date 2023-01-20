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

    //* TEST 3
    it('should create an empty array for depositAmounts', () => {
      // Act
      const result = testBank.getDepositAmounts();

      // Assert
      expect(result).toHaveSize(0);
    });

    //* TEST 5
    it('should create an empty array for withdrawAmounts', () => {
      // Act
      const result = testBank.getWithdrawAmounts();

      // Assert
      expect(result).toHaveSize(0);
    })
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

    //* TEST 4
    it("should increase the length of depositedAmounts by 1", () => {
      // Arrange
      const amount = 1000;

      // Act
      testBank.deposit(amount);
      const result = testBank.getDepositAmounts();

      // Assert
      expect(result).toHaveSize(1);
      // should expect the length of the array to increase by 1
    })

    //* TEST 8
    it('should give an error if input is a negative value', () => {
      // Arrange
      const amount = -1000;

      // Assert
      expect(() => { testBank.deposit(amount) }).toThrowError('Invalid amount');
    })

    //* TEST 9
    it('should give an error if input is not a number', () => {
      // Arrange
      const amount = 'one thousand';

      // Assert
      expect(() => { testBank.deposit(amount) }).toThrowError('Invalid amount');
    })
  });

  describe('when calling withdraw', () => {
    //* TEST 6
    it('should decrease the accountBalance by the specified amount', () => {
      // Arrange
      const amount = 500;

      // Act
      testBank.withdraw(amount);
      const result = testBank.getAccountBalance();

      // Assert
      expect(result).toBe(-500);
    })

    //* TEST 7
    it('should increase the length of withdrawAmounts by 1', () => {
      // Arrange
      const amount = 500;

      // Act
      testBank.withdraw(amount);
      const result = testBank.getWithdrawAmounts();

      // Assert
      expect(result).toHaveSize(1);
    })

    //* TEST 8
    it('should give an error if input is a negative value', () => {
      // Arrange
      const amount = -500;

      // Assert
      expect(() => { testBank.withdraw(amount) }).toThrowError('Invalid amount');
    })

    //* TEST 9
    it('should give an error if input is not a number', () => {
      // Arrange
      const amount = 'five hundred';

      // Assert
      expect(() => { testBank.withdraw(amount) }).toThrowError('Invalid amount');
    })
  })
});
