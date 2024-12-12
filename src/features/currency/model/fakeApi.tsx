// Мок модель фичи транзакции
export const useFakeApi = () => {
  const transaction = <T extends object>(args: T) => {
    console.log({ ...args });
  };

  const supportedTickers = ["BTC", "XMR", "EUR", "USD", "GBR", "ETH"] as const;
  type Ticker = (typeof supportedTickers)[number];

  const exchangeRate = {
    BTC: { USD: 50000, EUR: 47000, GBR: 42000, XMR: 10, ETH: 15, BTC: 1 },
    XMR: { BTC: 0.1, ETH: 0.12, USD: 300, EUR: 280, GBR: 250, XMR: 1 },
    ETH: { BTC: 0.065, USD: 3300, EUR: 3100, GBR: 2900, XMR: 8, ETH: 1 },
    USD: {
      BTC: 0.00002,
      EUR: 0.94,
      GBR: 0.88,
      XMR: 0.0033,
      ETH: 0.0003,
      USD: 1,
    },
    EUR: {
      BTC: 0.000021,
      USD: 1.06,
      GBR: 0.93,
      XMR: 0.0035,
      ETH: 0.00032,
      EUR: 1,
    },
    GBR: {
      BTC: 0.000024,
      USD: 1.13,
      EUR: 1.07,
      XMR: 0.0037,
      ETH: 0.00034,
      GBR: 1,
    },
  } satisfies Record<Ticker, Record<Ticker, number>>;

  const fakeExchangeRatesApi = (
    fromTicker: Ticker,
    toTicker: Ticker,
    value: number,
  ): number => {
    if (
      !supportedTickers.includes(fromTicker) ||
      !supportedTickers.includes(toTicker)
    ) {
      throw new Error(`Unsupported ticker: ${fromTicker} or ${toTicker}`);
    }

    if (fromTicker === toTicker) {
      return value;
    }

    const rate = exchangeRate[fromTicker][toTicker];
    if (rate === undefined) {
      throw new Error(
        `Exchange rate not available for ${fromTicker} to ${toTicker}`,
      );
    }

    return rate * value;
  };

  return { transaction, fakeExchangeRatesApi };
};
