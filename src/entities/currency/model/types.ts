export interface CurrencyModel {
  ticker: string;
  name: string;
  img: {
    src: string;
    alt: string;
  };
}

export type CurrencyActionsType = "BUY" | "SELL" | "SWAP";

export type ExampleDto = {
  send: number;
  repeat?: boolean;
  getTicker: string;
  sendTicker: string;
  action: CurrencyActionsType;
};
