var transactions = [];

// UI DOM ref
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const amountInput = document.getElementById("amount");
const nameIcon = document.getElementById("nameIcon");
const amountIcon = document.getElementById("amountIcon");

function createTransaction(name, amount) {
  return new Transaction(name, amount);
}

function addTransaction(e) {
  // preventDefault to prevent the default form action for Ajax form submissions
  e.preventDefault();

  // dynamic styling by situation
  if (nameInput.value.trim() === "") {
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
    console.log(transactions);

    // clear inputs
    nameInput.value = "";
    amountInput.value = "";
  }
}

form.addEventListener("submit", addTransaction);
