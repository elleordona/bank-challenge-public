// showing function of Bank

import Bank from './bank.js';
import Deposit from './deposit.js';
import Statement from './statement.js';
import Withdraw from './withdraw.js';

const myBank = new Bank();

myBank.deposit(new Deposit(1000, '10-01-2012'));
myBank.deposit(new Deposit(2000, '12-01-2012'));
myBank.withdraw(new Withdraw(500, '14-01-2012'));

// console.log(myBank.getTransactions());

Statement.getStatement(myBank);
