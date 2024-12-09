import { CurrencyModel } from "./types";
import eur from "@/assets/images/eur.svg";
import usd from "@/assets/images/usd.svg";
import gbr from "@/assets/images/gbr.svg";

interface MockResponce {
  data: CurrencyModel[];
}

export const getCurrenciesMock = (): MockResponce => {
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
