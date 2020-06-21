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
