export interface IBankAccount {
  addMoney(value: number): void;
  withdrawMoney(value: number): void;
  verifyBalance(): number;
}
