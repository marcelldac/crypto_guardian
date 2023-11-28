interface IBankAccount {
  addMoney(value: number): void;
  widthdrawMoney(value: number): void;
  verifyBalance(): number;
}

class BankAccount implements IBankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    if (initialBalance < 0) {
      throw new Error("Initial balance cannot be negative.");
    }
    this.balance = initialBalance;
  }

  addMoney(value: number): void {
    if (value <= 0) {
      throw new Error("Amount to be added must be a positive number.");
    }
    this.balance += value;
    console.log(`Added ${value} to balance.\nNew Balance: ${this.balance}`);
  }

  widthdrawMoney(value: number): void {
    if (value <= 0) {
      throw new Error("Amount to be withdraw must be a positive number.");
    }

    if (value == this.balance) {
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
