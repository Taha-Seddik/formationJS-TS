var possibleTransactions = [
  "chair",
  "pancake",
  "bunny",
  "carrot",
  "potato",
  "salad",
  "curtains",
  "snake",
  "apples",
  "ice cream",
];

function generateTaskName() {
  var i = Math.floor(Math.random() * possibleTransactions.length);
  return possibleTransactions[i];
}

function generateAmount() {
  return Math.floor(Math.random() * 100);
}

function createTransaction(name, amount) {
  return new Transaction(name, amount);
}

var transactions = [];
function addTransaction(event) {
  var transaction = createTransaction("fclxdmf", 3555);
  transactions.push(transaction);
  console.log(transactions);
}

const addTransactionBtn = document.getElementById("addTransactionBtn");
addTransactionBtn.addEventListener("click", addTransaction);

function destroyEventListner(event) {
  addTransactionBtn.removeEventListener("click", addTransaction);
}

const listnerDestroyerBtn = document.getElementById("listnerDestroyerBtn");
listnerDestroyerBtn.addEventListener("click", destroyEventListner);
