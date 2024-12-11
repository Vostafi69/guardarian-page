import { CurrencyActionsType } from "@/entities/currency";

export const Tabs: {
  value: CurrencyActionsType;
  label: string;
}[] = [
  {
    label: "Buy",
    value: "BUY",
  },
  {
    label: "Sell",
    value: "SELL",
  },
  {
    label: "Swap",
    value: "SWAP",
  },
];
