import { CurrencyModel } from "./types";
import eur from "@/assets/images/eur.svg";
import usd from "@/assets/images/usd.svg";
import gbr from "@/assets/images/gbr.svg";
import btc from "@/assets/images/btc.svg";
import eth from "@/assets/images/eth.svg";
import xmr from "@/assets/images/xmr.svg";

interface MockResponce<T> {
  data: T[];
}

export const getCurrenciesMock = (): MockResponce<CurrencyModel> => {
  const CURRENCIES = [
    {
      img: {
        alt: "USD",
        src: usd,
      },
      name: "United States dollar",
      ticker: "USD",
    },
    {
      img: {
        alt: "GBR",
        src: gbr,
      },
      name: "British Pound Sterling",
      ticker: "GBR",
    },
    {
      img: {
        alt: "EUR",
        src: eur,
      },
      name: "Euro",
      ticker: "EUR",
    },
  ];

  return {
    data: CURRENCIES,
  };
};

export const getCryptoCurrenciesMock = (): MockResponce<CurrencyModel> => {
  const CURRENCIES = [
    {
      img: {
        alt: "BTC",
        src: btc,
      },
      name: "Bitcoin",
      ticker: "BTC",
    },
    {
      img: {
        alt: "XMR",
        src: xmr,
      },
      name: "Monero",
      ticker: "XMR",
    },
    {
      img: {
        alt: "ETH",
        src: eth,
      },
      name: "Ethereum",
      ticker: "ETH",
    },
  ];

  return {
    data: CURRENCIES,
  };
};
