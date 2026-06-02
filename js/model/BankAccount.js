// Model: Manages the data and business logic of the Bank System

export class BankAccount {
    // Private balance property (using # for encapsulation)
    #balance;

    constructor(name, balance) {
        this.name = name;
        this.#balance = balance;
        // Generate a random 6-digit account number
        this.accountNumber = Math.floor(100000 + Math.random() * 900000);
    }

    // Deposits an amount if valid
    deposit(amount) {
        if (amount <= 0 || isNaN(amount)) {
            return "Enter valid deposit amount";
        }
        this.#balance += amount;
        return "Deposit Successful";
    }

    // Withdraws an amount if valid and balance is sufficient
    withdraw(amount) {
        if (amount <= 0 || isNaN(amount)) {
            return "Enter valid withdrawal amount";
        }
        if (amount > this.#balance) {
            return "Insufficient Balance";
        }
        this.#balance -= amount;
        return "Withdrawal Successful";
    }

    // Gets the current balance value (accessor method)
    getBalance() {
        return this.#balance;
    }

    // Returns a formatted HTML details string for this account
    getDetails() {
        return `
            Account Holder: ${this.name} <br>
            Account No: ${this.accountNumber} <br>
            Balance: ₹${this.#balance}
        `;
    }
}

// In-memory data store for all created accounts
const accounts = [];

// Reusable data-operation functions (Model API)

export function addAccount(account) {
    accounts.push(account);
}

export function findAccount(accountNumber) {
    // We use loose comparison or string conversion to support string inputs from view safely
    return accounts.find(acc => String(acc.accountNumber) === String(accountNumber));
}

export function getAllAccounts() {
    return accounts;
}
