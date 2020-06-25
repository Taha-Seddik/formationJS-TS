function createTransaction(name, amount) {
  return new Transaction(name, amount);
}

function addTransaction(name, amount) {
  var transaction = createTransaction(name, amount);
  transactions.push(transaction);
}

var transactions = [];

// Init app
function init() {
  addTransaction("virement d'un client ", 1000);
  addTransaction("payer facture d'eau", -20);
  addTransaction("acheter un pc", 450);
  addTransaction("payer facture de gaz ", -60);
  //  console.log(transactions);

  // ici des exemple de gestion du tableau
  transactions.forEach(function (transactionVal) {
    console.log(transactionVal.getInfo());
  });
}

init();
