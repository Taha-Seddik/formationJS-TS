import { Transaction } from "../models/transaction";

export function getAmountsArray(transactions: Transaction[]): number[] {
  var array = [];
  for (var index = 0; index < transactions.length; index++) {
    const transaction = transactions[index];
    array.push(transaction.getAmount());
  }
  return array;
}

export function getTotal(valuesArray: number[]): number {
  var total = 0;
  valuesArray.forEach(function (amount) {
    total = total + amount;
  });
  return total;
}

export function getIncome(amountsArray: number[]): number {
  return getTotal(amountsArray.filter((item) => item > 0));
}

export function getExpense(amountsArray: number[]): number {
  return getTotal(amountsArray.filter((item) => item < 0)) * -1;
}
