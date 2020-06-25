var transactions = [];

// UI DOM ref
const form = document.getElementById("form");
const transactionNameInput = document.getElementById("name");
const amountInput = document.getElementById("amount");

function createTransaction(name, amount) {
  return new Transaction(name, amount);
}

// Init app
function addTransaction(e) {
  // preventDefault to prevent the default form action for Ajax form submissions
  e.preventDefault();

  if (transactionNameInput.value.trim() === "" || amountInput.value.trim() === "") {
    alert("Merci de remplir les champs");
  } else {
    var transaction = createTransaction(transactionNameInput.value, amountInput.value);
    transactions.push(transaction);
    console.log(transactions);
    // clear inputs
    transactionNameInput.value = "";
    amountInput.value = "";
  }
}

// Preuve de rechargement si on fait pas prevent default
console.log("j'été chargé une autre fois");

form.addEventListener("submit", addTransaction);
