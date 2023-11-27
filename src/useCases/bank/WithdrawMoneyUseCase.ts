import { IBankAccount } from "../../domain/bank/IBankAccount";

export class WithdrawMoneyUseCase {
  constructor(private readonly bankAccount: IBankAccount) {}

  execute(value: number): void {
    this.bankAccount.withdrawMoney(value);
  }
}
