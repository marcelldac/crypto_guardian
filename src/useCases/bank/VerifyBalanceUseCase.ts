import { IBankAccount } from "../../domain/bank/IBankAccount";

export class VerifyBalanceUseCase {
  constructor(private readonly bankAccount: IBankAccount) {}

  execute(): number {
    return this.bankAccount.verifyBalance();
  }
}
