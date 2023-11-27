import BankAccount from "./bankAccount/bank-account";

const account = new BankAccount(180001);
const BITCOIN_180K = 180000;
const PRICE_API_URL = "https://economia.awesomeapi.com.br/last/BTC-BRL";

interface ICryptoGuardian {
  executeAutomation(): Promise<void>;
}

class CryptoGuardian implements ICryptoGuardian {
  private static async getBidValue(): Promise<number> {
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
      const bidValue = await CryptoGuardian.getBidValue();

      if (bidValue <= BITCOIN_180K) {
        console.log("One more bitcoin to wallet!");
        account.widthdrawMoney(bidValue);
      } else {
        console.log("Bid value is higher than day variation 0.86% percent.");
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

const cryptoGuardianInstance = new CryptoGuardian();
cryptoGuardianInstance.executeAutomation();
