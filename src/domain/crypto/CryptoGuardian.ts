import { ICryptoGuardian } from "./ICryptoGuardian";
import { IBankAccount } from "../bank/IBankAccount";

const BITCOIN_180K = 180000;
const PRICE_API_URL = "https://economia.awesomeapi.com.br/last/BTC-BRL";

export class CryptoGuardian implements ICryptoGuardian {
  constructor(private readonly bankAccount: IBankAccount) {}

  private async getBidValue(): Promise<number> {
    try {
      const response = await fetch(PRICE_API_URL);
      const { BTCBRL } = await response.json();
      const bid = parseFloat(BTCBRL.bid);
      return bid;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async executeAutomation(): Promise<void> {
    try {
      const bidValue = await this.getBidValue();

      if (bidValue == BITCOIN_180K) {
        console.log("One more bitcoin to wallet!");
        this.bankAccount.withdrawMoney(bidValue);
      } else {
        console.log("Bid value is higher than day variation 0.86% percent.");
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
