var Transaction = /** @class */ (function () {
    function Transaction(name, amount) {
        this.id = "id" + new Date().getTime();
        this.name = name;
        this.amount = parseInt(amount);
    }
    Transaction.prototype.getName = function () {
        return this.name;
    };
    Transaction.prototype.getAmount = function () {
        return this.amount;
    };
    Transaction.prototype.getId = function () {
        return this.id;
    };
    Transaction.prototype.getInfo = function () {
        return "Transaction" + this.name + " de montant " + this.amount;
    };
    return Transaction;
}());
export { Transaction };
//# sourceMappingURL=transaction.js.map