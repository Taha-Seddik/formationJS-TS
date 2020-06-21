function Transaction(name, amount) {
  this.id = "id" + new Date().getTime();
  this.name = name;
  this.amount = parseInt(amount);
  this.getId = function () {
    return this.id;
  };
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
