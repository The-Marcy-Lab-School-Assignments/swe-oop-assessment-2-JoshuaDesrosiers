class BankAccount {
  static #totalNumberOfAccounts = 0;

  #balance = 0;

  constructor(accountNumber, ownerName) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    BankAccount.#totalNumberOfAccounts++;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
    return this.getBalance();
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log(`Withdrawal failed. Insufficient funds.`);
    } else {
      this.#balance -= amount;
      console.log(`Withdrew $${amount}. New balance: $${this.#balance}`);
    }
    return this.getBalance();
  }

  getBalance() {
    return `${this.#balance}`;
  }

  static getTotalNumberOfAccounts() {
    return `${BankAccount.#totalNumberOfAccounts}`;
  }
}

class Bank {
  constructor(name) {
    this.name = name;
    this.accounts = [];
  }

  addAccount(account) {
    this.accounts.push(account);
  }

  getTotalBalance() {
    let total = 0;
    this.accounts.forEach((account) => {
      total += Number(account.getBalance());
    });
    return total;
  }

  findAccount(accountNumber) {
    return this.accounts.find((account) => account.accountNumber === accountNumber);
  }
}

// test

(function () {
  const myBank = new Bank('First National');
  console.log(myBank); // Bank { name: "First National" }

  const account1 = new BankAccount('001', 'Alice');
  const account2 = new BankAccount('002', 'Bob');
  console.log(account1); // BankAccount { accountNumber: "001", ownerName: "Alice" }
  console.log(account2); // BankAccount { accountNumber: "002", ownerName: "Bob" }

  myBank.addAccount(account1);
  myBank.addAccount(account2);
  console.log(myBank.accounts);
  /*
[
  BankAccount { accountNumber: "001", ownerName: "Alice" },
  BankAccount { accountNumber: "002", ownerName: "Bob" }
]
*/

  account1.deposit(100); // Deposited $100. New Balance: 100
  account1.withdraw(50); // Withdrew $50. New Balance: 50
  account2.deposit(250); // Deposited $250. New Balance: 250
  console.log(myBank.getTotalBalance()); // 300

  console.log(myBank.findAccount('001').ownerName); // "Alice"

  new BankAccount('003', 'Charlie');
  console.log('Total accounts:', BankAccount.getTotalNumberOfAccounts()); // Should be 3
}());

// DO NOT REMOVE
module.exports = { BankAccount, Bank };
