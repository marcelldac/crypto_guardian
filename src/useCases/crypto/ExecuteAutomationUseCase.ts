import { ICryptoGuardian } from "../../domain/crypto/ICryptoGuardian";

export class ExecuteAutomationUseCase {
  constructor(private readonly cryptoGuardian: ICryptoGuardian) {}

  async execute(): Promise<void> {
    return this.cryptoGuardian.executeAutomation();
  }
}
