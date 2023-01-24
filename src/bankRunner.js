// showing function of Bank

import Bank from './bank.js';

const myBank = new Bank();

console.log(myBank.getAccountBalance());

myBank.deposit(1000);
console.log(myBank.getAccountBalance());

// myBank.deposit(-500);
// console.log(myBank.getAccountBalance());

myBank.withdraw(500);
console.log(myBank.getAccountBalance());

myBank.withdraw(700);
console.log(myBank.getAccountBalance());
