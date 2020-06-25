"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transaction_1 = require("./models/transaction");
const dynamicStyle_1 = require("./dynamicStyle");
const money_1 = require("./utils/money");
var transactions = [];
// UI DOM ref
// Left side
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const amountInput = document.getElementById("amount");
const nameIcon = document.getElementById("nameIcon");
const amountIcon = document.getElementById("amountIcon");
// Right side
const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
function createTransaction(name, amount) {
    return new transaction_1.Transaction(name, amount);
}
function addTransaction(e) {
    // preventDefault to prevent the default form action for Ajax form submissions
    e.preventDefault();
    if ((nameInput === null || nameInput === void 0 ? void 0 : nameInput.value.trim()) === "") {
        dynamicStyle_1.handleInputStyling(true, nameInput, nameIcon);
    }
    else {
        dynamicStyle_1.handleInputStyling(false, nameInput, nameIcon);
    }
    if (amountInput.value.trim() === "") {
        dynamicStyle_1.handleInputStyling(true, amountInput, amountIcon);
    }
    else {
        dynamicStyle_1.handleInputStyling(false, amountInput, amountIcon);
    }
    // On valide si tous est bien
    if (amountInput.value.trim() !== "" && nameInput.value.trim() !== "") {
        var transaction = createTransaction(nameInput.value, amountInput.value);
        transactions.push(transaction);
        // New
        addTransactionToHistory(transaction);
        updateValues();
        // clear inputs
        nameInput.value = "";
        amountInput.value = "";
    }
}
// Add transactions to DOM list
function addTransactionToHistory(transaction) {
    // Get sign
    const sign = transaction.getAmount() < 0 ? "-" : "+";
    const item = document.createElement("li");
    // Add class based on value
    item.classList.add(transaction.getAmount() < 0 ? "minus" : "plus");
    item.innerHTML = `
    ${transaction.getName()} <span>${sign}${Math.abs(transaction.getAmount())}</span> <button class="delete-btn" onclick="removeTransaction(${transaction.getId()})">x</button>
  `;
    list.appendChild(item);
}
// Update the balance, income and expense
function updateValues() {
    const amounts = money_1.getAmountsArray(transactions);
    const total = money_1.getTotal(amounts);
    const income = money_1.getIncome(amounts);
    const expense = money_1.getExpense(amounts);
    balance.innerText = "€" + total;
    money_plus.innerText = "€" + income;
    money_minus.innerText = "€" + expense;
}
form.addEventListener("submit", addTransaction);
//# sourceMappingURL=script.js.map