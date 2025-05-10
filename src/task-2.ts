type Currency = "USD" | "EUR" | "UAH";

interface ConvertCurrencyCash {
  amount: number;
  currency: Currency;
}

function convertCurrency({ amount, currency }: ConvertCurrencyCash): void {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({ amount: 150, currency: "USD" });
