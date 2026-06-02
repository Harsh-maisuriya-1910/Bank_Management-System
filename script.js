class BankAccount {
    #balance;

    constructor(name, balance) {
        this.name = name;
        this.#balance = balance;
        this.accountNumber = Math.floor(Math.random() * 1000000);
    }

    deposit(amount) {
        if (amount <= 0 || isNaN(amount)) {
            return "Enter valid deposit amount";
        }

        this.#balance += amount;
        return "Deposit Successful";
    }

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

    getDetails() {
        return `
            Account Holder: ${this.name} <br>
            Account No: ${this.accountNumber} <br>
            Balance: ₹${this.#balance}
        `;
    }
}

// Multiple Accounts Storage
let accounts = [];

// Create Account
function createAccount() {
    const name = document.getElementById("name").value;
    const balance = parseFloat(document.getElementById("initialBalance").value);

    if (!name || isNaN(balance) || balance < 0) {
        alert("Enter valid details");
        return;
    }

    const newAccount = new BankAccount(name, balance);
    accounts.push(newAccount);

    renderAccounts();

    document.getElementById("output").innerHTML =
        "<span>Account Created Successfully!</span> <br>" +
        newAccount.getDetails();

    document.getElementById("name").value = "";
    document.getElementById("initialBalance").value = "";
}

// Find Account
function findAccount(accNo) {
    return accounts.find(acc => acc.accountNumber == accNo);
}

// Deposit
function deposit() {
    const accNo = document.getElementById("accountNumber").value;
    const amount = parseFloat(document.getElementById("transactionAmount").value);

    const account = findAccount(accNo);

    if (!account) {
        alert("Account Not Found!");
        return;
    }

    const message = account.deposit(amount);

    document.getElementById("output").innerHTML =
        message + "<br>" + account.getDetails();

    document.getElementById("transactionAmount").value = "";
}

// Withdraw
function withdraw() {
    const accNo = document.getElementById("accountNumber").value;
    const amount = parseFloat(document.getElementById("transactionAmount").value);

    const account = findAccount(accNo);

    if (!account) {
        alert("Account Not Found!");
        return;
    }

    const message = account.withdraw(amount);

    document.getElementById("output").innerHTML =
        message + "<br>" + account.getDetails();

    document.getElementById("transactionAmount").value = "";
}

// Check Balance
function checkBalance() {
    const accNo = document.getElementById("accountNumber").value;
    const account = findAccount(accNo);

    if (!account) {
        alert("Account Not Found!");
        return;
    }

    document.getElementById("output").innerHTML =
        account.getDetails();
}

// Render All Accounts
function renderAccounts() {
    const accountList = document.getElementById("accountList");
    accountList.innerHTML = "";

    accounts.forEach(acc => {
        accountList.innerHTML += `
            <div>
                <strong>${acc.name}</strong><br>
                Account No: ${acc.accountNumber}
            </div>
        `;
    });
}