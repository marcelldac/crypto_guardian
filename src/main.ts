import { BankAccount } from "./domain/bank/BankAccount";
import { CryptoGuardian } from "./domain/crypto/CryptoGuardian";
import { ExecuteAutomationUseCase } from "./useCases/crypto/ExecuteAutomationUseCase";

const bankAccount = new BankAccount(180001);
const cryptoGuardian = new CryptoGuardian(bankAccount);

const executeAutomationUseCase = new ExecuteAutomationUseCase(cryptoGuardian);

executeAutomationUseCase.execute();
