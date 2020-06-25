"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
class Transaction {
    constructor(name, amount) {
        this.id = "id" + new Date().getTime();
        this.name = name;
        this.amount = parseInt(amount);
    }
    getName() {
        return this.name;
    }
    getAmount() {
        return this.amount;
    }
    getId() {
        return this.id;
    }
    getInfo() {
        return "Transaction" + this.name + " de montant " + this.amount;
    }
}
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.js.map