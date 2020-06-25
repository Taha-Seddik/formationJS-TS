function getAmountsArray(transactions) {
  var array = [];
  for (var index = 0; index < transactions.length; index++) {
    const transaction = transactions[index];
    array.push(transaction.getAmount());
  }
  return array;
}

function getTotal(valuesArray) {
  var total = 0;
  valuesArray.forEach(function (amount) {
    total = total + amount;
  });
  return total;
}
//(item) => item > 0)
function getIncome(amountsArray) {
  const filtredArray = amountsArray.filter(function (item) {
    if (item > 0) return true;
    else return false;
  });
  return getTotal(filtredArray);
}

function getExpense(amountsArray) {
  return getTotal(amountsArray.filter((item) => item < 0)) * -1;
}
