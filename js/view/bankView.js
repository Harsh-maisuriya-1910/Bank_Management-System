// View: Handles all DOM queries, DOM manipulation, input collection, and event bindings

// 1. Get input values from Create Account form
export function getCreateAccountInput() {
    const name = document.getElementById("name").value.trim();
    const initialBalance = parseFloat(document.getElementById("initialBalance").value);
    return { name, initialBalance };
}

// 2. Get input values from Transaction form
export function getTransactionInput() {
    const accountNumber = document.getElementById("accountNumber").value.trim();
    const transactionAmount = parseFloat(document.getElementById("transactionAmount").value);
    return { accountNumber, transactionAmount };
}

// 3. Show output messages in the result container
export function showOutput(message) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = message;
}

// 4. Render the list of all created bank accounts
export function renderAccounts(accounts) {
    const accountList = document.getElementById("accountList");
    accountList.innerHTML = ""; // Clear existing accounts

    accounts.forEach(acc => {
        const accDiv = document.createElement("div");
        accDiv.className = "account-item";
        accDiv.innerHTML = `
            <strong>${acc.name}</strong><br>
            Account No: ${acc.accountNumber}
        `;
        accountList.appendChild(accDiv);
    });
}

// 5. Clear input fields for Create Account form
export function clearCreateForm() {
    document.getElementById("name").value = "";
    document.getElementById("initialBalance").value = "";
}

// 6. Clear input fields for Transaction form
export function clearTransactionForm() {
    document.getElementById("transactionAmount").value = "";
}

// 7. Show alerts or UI messages
export function showAlert(message) {
    alert(message);
}

// 8. Event Binder Helpers - connects UI buttons to Controller actions without the Controller knowing DOM details
export function bindCreateAccount(handler) {
    document.getElementById("btnCreateAccount").addEventListener("click", handler);
}

export function bindDeposit(handler) {
    document.getElementById("btnDeposit").addEventListener("click", handler);
}

export function bindWithdraw(handler) {
    document.getElementById("btnWithdraw").addEventListener("click", handler);
}

export function bindCheckBalance(handler) {
    document.getElementById("btnCheckBalance").addEventListener("click", handler);
}

// 9. Theme switcher event binders & UI mutation
export function bindThemeToggle(handler) {
    document.getElementById("themeToggle").addEventListener("click", handler);
}

export function toggleThemeUI() {
    const isDark = document.body.classList.toggle("dark-mode");
    
    const themeIcon = document.querySelector("#themeToggle .theme-icon");
    const themeText = document.querySelector("#themeToggle .theme-text");
    
    if (isDark) {
        themeIcon.textContent = "☀️";
    } else {
        themeIcon.textContent = "🌙";
    }
}
