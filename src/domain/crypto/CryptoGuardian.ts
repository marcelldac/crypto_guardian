import { ICryptoGuardian } from "./ICryptoGuardian";
import { IBankAccount } from "../bank/IBankAccount";

const ETHEREUM_9K = 9500;
const PRICE_API_URL = "https://api.coinbase.com/v2/exchange-rates?currency=ETH";

export class CryptoGuardian implements ICryptoGuardian {
  constructor(private readonly bankAccount: IBankAccount) {}

  private async getBidValue(): Promise<number> {
    try {
      const response = await fetch(PRICE_API_URL);
      const { data } = await response.json();
      const bid = parseFloat(data.rates.BRL);
      return bid;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async executeAutomation(): Promise<void> {
    try {
      const bidValue = await this.getBidValue();

      if (bidValue == ETHEREUM_9K) {
        console.log("One more ethereum to wallet!");
        this.bankAccount.withdrawMoney(bidValue);
      } else {
        console.log("Bid value is higher than informed value ");
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
