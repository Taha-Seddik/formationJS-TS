export function getAmountsArray(transactions) {
    var array = [];
    for (var index = 0; index < transactions.length; index++) {
        var transaction = transactions[index];
        array.push(transaction.getAmount());
    }
    return array;
}
export function getTotal(valuesArray) {
    var total = 0;
    valuesArray.forEach(function (amount) {
        total = total + amount;
    });
    return total;
}
export function getIncome(amountsArray) {
    return getTotal(amountsArray.filter(function (item) { return item > 0; }));
}
export function getExpense(amountsArray) {
    return getTotal(amountsArray.filter(function (item) { return item < 0; })) * -1;
}
//# sourceMappingURL=money.js.map