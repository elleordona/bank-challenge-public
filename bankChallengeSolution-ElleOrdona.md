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
|         | transactions @Array[@deposit] |                   |        |
| Deposit | credit @Integer               | getAmount()       | @Void  |

## Tests - Part 1

Initial Thoughts:

1. need a `Bank` to hold a `runningBalance`
2. `transactions` will keep track of the specific amount of money being added (an array of objects)
3. `Deposit` to get information for `credit` and eventually `date`

**Test 1** - when an instance of `Bank` is created `runningBalance` is zero;

**Test 2** - when an instance of `Bank` is created `transactions` is an empty array;

**Test 3** -

---

## User Story - Part 2

```sh
As a customer
I want to withdraw my money
So that I can spend it
```

## Domain Model - Part 2

| Objects | Properties                        | Messages           | Output  |
| ------- | --------------------------------- | ------------------ | ------- |
| Bank    | accountBalance @Integer           | withdraw(@Integer) | @String |
|         | withdrawAmounts @Array[@withdraw] |                    |         |

## Tests - Part 2

---

## User Story - Part 3

```sh
As a customer
I want to add the date of any transactions made
So I can keep track of my bank account activity
```

## Domain Model - Part 3

| Objects | Properties                      | Messages                 | Output  |
| ------- | ------------------------------- | ------------------------ | ------- |
| Bank    | accountBalance @Integer         | deposit(@amount, @date)  | @String |
|         | depositAmounts @Array[@amount]  | withdraw(@amount, @date) | @String |
|         | withdrawAmounts @Array[@amount] |                          |         |
|         | depositDate @Array[@date]       |                          |         |
|         | withdrawDate @Array[@date]      |                          |         |

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
