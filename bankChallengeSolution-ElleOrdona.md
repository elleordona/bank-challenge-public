# Bank Challenge - Elle Ordona

## User Story - Part 1

```sh
As a customer
I want make a deposit
So that I can add money to my bank balance
```

## Domain Model - Part 1

| Objects | Properties                    | Messages          | Output |
| ------- | ----------------------------- | ----------------- | ------ |
| Bank    | runningBalance @Integer       | deposit(@Deposit) | @Void  |
|         | transactions @Array[@Deposit] |                   |        |
| Deposit | credit @Integer               | getCredit()       | @Void  |

## Tests - Part 1

Initial Thoughts:

1. need a `Bank` to hold a `runningBalance`
2. `transactions` will keep track of the specific amount of money being added (an array of objects)
3. `Deposit` to get information for `credit` and eventually `date`

**Test 1** - when an instance of `Bank` is created `runningBalance` is zero;

**Test 2** - when an instance of `Bank` is created `transactions` is an empty array;

**Test 3** - `Deposit` will change `credit` through constructor

**Test 4** - `deposit()` will call `getCredit()` from within an object

**Test 5** - `deposit()` will add the `credit` amount to the `runningBalance`

**Test 6** - `deposit()` will add the `credit` and `runningBalance` into `transactions`

---

## User Story - Part 2

```sh
As a customer
I want to withdraw my money
So that I can spend it
```

## Domain Model - Part 2

| Objects  | Properties                     | Messages            | Output |
| -------- | ------------------------------ | ------------------- | ------ |
| Bank     | runningBalance @Integer        | withdraw(@Withdraw) | @Void  |
|          | transactions @Array[@Withdraw] |                     |        |
| Withdraw | debit @Integer                 | getDebit()          | @Void  |

## Tests - Part 2

Initial Thoughts:

1. same as `Deposit` but instead will take away from `runningBalance`

**Test 7** - `Withdraw` will change `debit` through constructor

**Test 8** - `withdraw()` will call `getDebit()` from within an object

**Test 9** - `withdraw()` will take away the `debit` amount from the `runningBalance`

**Test 10** - `withdraw()` will add the `debit` and `runningBalance` into `transactions`

---

## Edge Cases - Part 1&2

Initial Thoughts:

1. `credit` and `debit` can only be positive numbers

**Test 11** - `credit` and `debit` can only be positive

---

## User Story - Part 3

```sh
As a customer
I want to add the date of any transactions made
So I can keep track of my bank account activity
```

## Domain Model - Part 3

| Objects | Properties | Messages | Output |
| ------- | ---------- | -------- | ------ |

## Tests - Part 3

Initial Thoughts:

## User Story - Part 4

```sh
As a customer
I want print a statement
So I can see the all transactions done in my bank account
```

## Domain Model - Part 4

| Objects | Properties | Messages | Output |
| ------- | ---------- | -------- | ------ |

## Tests - Part 4
