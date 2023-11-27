import { IBankAccount } from "../../domain/bank/IBankAccount";

export class AddMoneyUseCase {
  constructor(private readonly bankAccount: IBankAccount) {}

  execute(value: number): void {
    this.bankAccount.addMoney(value);
  }
}
