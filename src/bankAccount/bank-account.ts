class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  addMoney(value: number): void {
    this.balance += value;
    console.log(`Added ${value} to balance.\nNew Balance: ${this.balance}`);
  }

  widthdrawMoney(value: number): void {
    if (value <= this.balance) {
      this.balance -= value;
      console.log(
        `Withdrawn ${value} from balance. New balance: ${this.balance}`
      );
    } else {
      console.log("Insufficient balance for withdrawal.");
    }
  }

  verifyBalance(): number {
    console.log(`Balance: ${this.balance}`);
    return this.balance;
  }
}

export default BankAccount;
