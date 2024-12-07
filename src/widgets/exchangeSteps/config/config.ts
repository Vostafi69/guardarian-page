import checkout from "@/assets/images/checkout.png";
import card from "@/assets/images/card.png";
import success from "@/assets/images/success.png";

export interface StepType {
  title: string;
  content: string;
  img: {
    src: string;
    alt: string;
  };
}

export const STEPS: StepType[] = [
  {
    title: "01. Join us",
    content: "Complete a fast & simple onboarding process.",
    img: {
      alt: "checkout",
      src: checkout,
    },
  },
  {
    title: "02. Exchange ",
    content: "Choose what to exchange and make the deposit.",
    img: {
      alt: "card",
      src: card,
    },
  },
  {
    title: "03. Enjoy",
    content: "Receive your funds & we hope to see you soon!",
    img: {
      alt: "success",
      src: success,
    },
  },
];
