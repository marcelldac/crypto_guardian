const DAY_VARIATION_086_PERCENT = 183616;

class CryptoGuardian {
  private static async getBidValue(): Promise<number> {
    try {
      const response = await fetch(
        "https://economia.awesomeapi.com.br/last/BTC-BRL"
      );
      const { BTCBRL } = await response.json();
      const bid = parseFloat(BTCBRL.bid);
      return bid;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  static async executeAutomation(): Promise<void> {
    try {
      const bidValue = await CryptoGuardian.getBidValue();

      if (bidValue <= DAY_VARIATION_086_PERCENT) {
        console.log("transação ok");
      } else {
        console.log("transação não ok");
      }
    } catch (error) {
      console.log(error);
    }
  }
}

CryptoGuardian.executeAutomation();
