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
  var transaction = createTransaction(generateTaskName(), generateAmount());
  transactions.push(transaction);
  console.log(transactions);
}

const addTransactionBtn = document.getElementById("addTransactionBtn");
addTransactionBtn.addEventListener("click", addTransaction);

const listnerDestroyerBtn = document.getElementById("listnerDestroyerBtn");
listnerDestroyerBtn.addEventListener("click", function (e) {
  addTransactionBtn.removeEventListener("click", addTransaction);
});
