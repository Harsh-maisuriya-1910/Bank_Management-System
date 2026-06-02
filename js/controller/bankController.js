// Controller: Mediates between Model (data/business logic) and View (user interface)

import { BankAccount, addAccount, findAccount, getAllAccounts } from '../model/BankAccount.js';
import * as bankView from '../view/bankView.js';

// 1. Handles the "Create Account" action
export function handleCreateAccount() {
    // Get inputs from view
    const { name, initialBalance } = bankView.getCreateAccountInput();

    // Simple, student-friendly validation
    if (!name) {
        bankView.showAlert("Please enter an account holder's name!");
        return;
    }
    if (isNaN(initialBalance) || initialBalance < 0) {
        bankView.showAlert("Please enter a valid, non-negative initial balance!");
        return;
    }

    // Create the account using Model constructor
    const newAccount = new BankAccount(name, initialBalance);

    // Save account inside the Model
    addAccount(newAccount);

    // Update the UI via View
    bankView.renderAccounts(getAllAccounts());
    
    // Show success message and account details in the output container
    const successMessage = `<span>Account Created Successfully!</span><br>${newAccount.getDetails()}`;
    bankView.showOutput(successMessage);

    // Clear input fields
    bankView.clearCreateForm();
}

// 2. Handles the "Deposit" transaction action
export function handleDeposit() {
    const { accountNumber, transactionAmount } = bankView.getTransactionInput();

    // Validate account existence using Model search helper
    const account = findAccount(accountNumber);
    if (!account) {
        bankView.showAlert("Account Not Found!");
        return;
    }

    // Call Model's deposit method
    const statusMessage = account.deposit(transactionAmount);

    // Update the output view with transaction status and updated details
    const outputMessage = `${statusMessage}<br>${account.getDetails()}`;
    bankView.showOutput(outputMessage);

    // Clear transaction amount input field
    bankView.clearTransactionForm();
}

// 3. Handles the "Withdraw" transaction action
export function handleWithdraw() {
    const { accountNumber, transactionAmount } = bankView.getTransactionInput();

    // Validate account existence
    const account = findAccount(accountNumber);
    if (!account) {
        bankView.showAlert("Account Not Found!");
        return;
    }

    // Call Model's withdraw method
    const statusMessage = account.withdraw(transactionAmount);

    // Update the output view
    const outputMessage = `${statusMessage}<br>${account.getDetails()}`;
    bankView.showOutput(outputMessage);

    // Clear transaction amount input field
    bankView.clearTransactionForm();
}

// 4. Handles the "Check Balance" action
export function handleCheckBalance() {
    const { accountNumber } = bankView.getTransactionInput();

    // Validate account existence
    const account = findAccount(accountNumber);
    if (!account) {
        bankView.showAlert("Account Not Found!");
        return;
    }

    // Get details from Model and display via View
    bankView.showOutput(account.getDetails());
}

// Kicks off event bindings
export function init() {
    bankView.bindCreateAccount(handleCreateAccount);
    bankView.bindDeposit(handleDeposit);
    bankView.bindWithdraw(handleWithdraw);
    bankView.bindCheckBalance(handleCheckBalance);
}
