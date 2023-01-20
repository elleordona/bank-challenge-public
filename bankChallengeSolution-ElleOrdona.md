# Bank Challenge - Elle Ordona

## User Story - Part 1

```sh
As a customer
I want make a deposit
So that I can add money to my bank balance
```

## Domain Model - Part 1

| Objects     | Properties               | Messages          | Output          |
| ----------- | ------------------------ | ----------------- | --------------- |
| Bank        | accountBalance @Integer  | deposit(@Integer) | @String         |

## Tests - Part 1

Initial Thoughts:

1. Need a `Bank` class that holds the money
2. `deposit` will add the input amount to the `accountBalance` in the `Bank`

**Test 1** - `deposit` will increase the `accountBalance` by the specified amount

## User Story - Part 2

```sh
As a customer
I want to withdraw my money
So that I can spend it
```

## Domain Model - Part 2

| Objects     | Properties               | Messages           | Output          |
| ----------- | ------------------------ | ------------------ | --------------- |
| Bank        | accountBalance @Integer  | withdraw(@Integer) | @String         |

## Tests - Part 2

## User Story - Part 3

```sh
As a customer
I want to see the data of any transactions made
So I can keep track of my bank account activity
```

## Domain Model - Part 3

| Objects     | Properties               | Messages          | Output          |
| ----------- | ------------------------ | ----------------- | --------------- |

## Tests - Part 3

## User Story - Part 4

```sh
As a customer
I want print a statement
So I can see the all transactions done in my bank account
```

## Domain Model - Part 4

## Tests - Part 4
