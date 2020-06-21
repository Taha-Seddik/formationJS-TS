export class Transaction {
  private id: string;
  private name: string;
  private amount: number;

  constructor(name: string, amount: string) {
    this.id = "id" + new Date().getTime();
    this.name = name;
    this.amount = parseInt(amount);
  }

  public getName() {
    return this.name;
  }

  public getAmount() {
    return this.amount;
  }

  public getId() {
    return this.id;
  }

  public getInfo() {
    return "Transaction" + this.name + " de montant " + this.amount;
  }
}
