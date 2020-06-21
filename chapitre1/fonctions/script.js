var transactions = [];

function addTransaction(name) {
  transactions.push(name);
}

// Init app
function init() {
  addTransaction("virement d'un client ");
  addTransaction("payer facture d'eau");
  addTransaction("acheter un pc");
  addTransaction("payer facture de gaz ");
  console.log(transactions);

  // ici des exemple de gestion du tableau
}

// call init
init();
