import { Transaction } from "./models/transaction";
import { handleInputStyling } from "./dynamicStyle";
import { getAmountsArray, getTotal, getIncome, getExpense } from "./utils/money";
var transactions = [];
// UI DOM ref
// Left side
var form = document.getElementById("form");
var nameInput = document.getElementById("name");
var amountInput = document.getElementById("amount");
var nameIcon = document.getElementById("nameIcon");
var amountIcon = document.getElementById("amountIcon");
// Right side
var balance = document.getElementById("balance");
var money_plus = document.getElementById("money-plus");
var money_minus = document.getElementById("money-minus");
var list = document.getElementById("list");
function createTransaction(name, amount) {
    return new Transaction(name, amount);
}
function addTransaction(e) {
    // preventDefault to prevent the default form action for Ajax form submissions
    e.preventDefault();
    if ((nameInput === null || nameInput === void 0 ? void 0 : nameInput.value.trim()) === "") {
        handleInputStyling(true, nameInput, nameIcon);
    }
    else {
        handleInputStyling(false, nameInput, nameIcon);
    }
    if (amountInput.value.trim() === "") {
        handleInputStyling(true, amountInput, amountIcon);
    }
    else {
        handleInputStyling(false, amountInput, amountIcon);
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
    var sign = transaction.getAmount() < 0 ? "-" : "+";
    var item = document.createElement("li");
    // Add class based on value
    item.classList.add(transaction.getAmount() < 0 ? "minus" : "plus");
    item.innerHTML = "\n    " + transaction.getName() + " <span>" + sign + Math.abs(transaction.getAmount()) + "</span> <button class=\"delete-btn\" onclick=\"removeTransaction(" + transaction.getId() + ")\">x</button>\n  ";
    list.appendChild(item);
}
// Update the balance, income and expense
function updateValues() {
    var amounts = getAmountsArray(transactions);
    var total = getTotal(amounts);
    var income = getIncome(amounts);
    var expense = getExpense(amounts);
    balance.innerText = "€" + total;
    money_plus.innerText = "€" + income;
    money_minus.innerText = "€" + expense;
}
form.addEventListener("submit", addTransaction);
//# sourceMappingURL=script.js.map