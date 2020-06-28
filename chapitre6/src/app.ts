import { handleInputStyling } from "./dynamic-style.js";
import { Transaction } from "./models/transaction.js";
import { getAmountsArray, getTotal, getIncome, getExpense } from "./utils/money.js";

var transactions: Transaction[] = [];

// UI DOM ref
// Left side
const form: HTMLElement = document.getElementById("form") as HTMLInputElement;
const nameInput: HTMLInputElement = document.getElementById("name") as HTMLInputElement;
const amountInput: HTMLInputElement = document.getElementById("amount") as HTMLInputElement;
const nameIcon: HTMLElement = document.getElementById("nameIcon") as HTMLElement;
const amountIcon: HTMLElement = document.getElementById("amountIcon") as HTMLElement;
// Right side
const balance: HTMLElement = document.getElementById("balance") as HTMLElement;
const money_plus: HTMLElement = document.getElementById("money-plus") as HTMLElement;
const money_minus: HTMLElement = document.getElementById("money-minus") as HTMLElement;
const list: HTMLElement = document.getElementById("list") as HTMLElement;

function createTransaction(name: string, amount: string) {
  return new Transaction(name, amount);
}

function addTransaction(e: Event) {
  // preventDefault to prevent the default form action for Ajax form submissions
  e.preventDefault();

  if (nameInput?.value.trim() === "") {
    handleInputStyling(true, nameInput, nameIcon);
  } else {
    handleInputStyling(false, nameInput, nameIcon);
  }

  if (amountInput.value.trim() === "") {
    handleInputStyling(true, amountInput, amountIcon);
  } else {
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
function addTransactionToHistory(transaction: Transaction) {
  // Get sign
  const sign = transaction.getAmount() < 0 ? "-" : "+";
  const item = document.createElement("li");

  // Add class based on value
  item.classList.add(transaction.getAmount() < 0 ? "minus" : "plus");

  item.innerHTML = `
    ${transaction.getName()} <span>${sign}${Math.abs(
    transaction.getAmount()
  )}</span> <button class="delete-btn" onclick="removeTransaction(${transaction.getId()})">x</button>
  `;

  list.appendChild(item);
}

// Update the balance, income and expense
function updateValues() {
  const amounts = getAmountsArray(transactions);
  const total = getTotal(amounts);
  const income = getIncome(amounts);
  const expense = getExpense(amounts);
  balance.innerText = "€" + total;
  money_plus.innerText = "€" + income;
  money_minus.innerText = "€" + expense;
}

form.addEventListener("submit", addTransaction);
