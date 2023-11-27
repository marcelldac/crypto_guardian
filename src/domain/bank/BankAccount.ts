import { IBankAccount } from "./IBankAccount";

export class BankAccount implements IBankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    if (initialBalance < 0) {
      throw new Error("Initial balance cannot be negative.");
    }
    this.balance = initialBalance;
  }

  addMoney(value: number): void {
    this.validatePositiveAmount(
      value,
      "Amount to be added must be a positive number."
    );
    this.balance += value;
    console.log(`Added ${value} to balance.\nNew Balance: ${this.balance}`);
  }

  withdrawMoney(value: number): void {
    this.validatePositiveAmount(
      value,
      "Amount to be withdraw must be a positive number."
    );

    if (value > this.balance) {
      console.log("Insufficient balance for withdrawal.");
    }

    this.balance -= value;
    console.log(
      `Withdrawn ${value} from balance. New balance: ${this.balance}`
    );
  }

  verifyBalance(): number {
    console.log(`Balance: ${this.balance}`);
    return this.balance;
  }

  private validatePositiveAmount(amount: number, message: string): void {
    if (amount <= 0) {
      throw new Error(message);
    }
  }
}
