export interface CurrencyModel {
  ticker: string;
  name: string;
  img: {
    src: string;
    alt: string;
  };
}

export type BuyDto = {
  get: number;
  send: number;
  repeat: boolean;
  getTicker: string;
  sendTicker: string;
};
