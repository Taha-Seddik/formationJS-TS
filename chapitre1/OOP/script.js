function Transaction(name, amount) {
  this.name = name;
  this.amount = amount;
  this.getName = function () {
    return this.name;
  };
  this.getAmount = function () {
    return this.amount;
  };
  this.getInfo = function () {
    return "Transaction" + this.name + " de montant " + this.amount;
  };
}

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
  addTransaction("payer facture d'eau", 20);
  addTransaction("acheter un pc", 450);
  addTransaction("payer facture de gaz ", 60);
  //  console.log(transactions);

  // ici des exemple de gestion du tableau
  transactions.forEach(function (transaction, index) {
    console.log(transaction.getInfo());
  });
}

init();
