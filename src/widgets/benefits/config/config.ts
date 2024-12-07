import medal from "@/assets/images/medal.svg";
import watch from "@/assets/images/watch.svg";
import handshake from "@/assets/images/handshake.svg";
import headphones from "@/assets/images/headphones.svg";

export interface BenefitType {
  title: string;
  content: [string, string, string];
  img: {
    src: string;
    alt: string;
  };
}

export const BENEFITS: BenefitType[] = [
  {
    title: "Best conditions you can get",
    content: [
      "30 different cryptocurrencies to exchange",
      "Secure, non-custodial exchanges",
      "Lowest fees on the market",
    ],
    img: {
      alt: "Medal",
      src: medal,
    },
  },
  {
    title: "Fast & easy onboarding",
    content: [
      "Fast & seamless onboarding",
      "Easy-to-use partner’s cabinet",
      "Instant invoices",
    ],
    img: {
      alt: "Watch",
      src: watch,
    },
  },
  {
    title: "A service you can trust",
    content: [
      "5 years of successful service",
      "Fully licensed, EU-based company",
      "Trusted by over 400 businesses",
    ],
    img: {
      alt: "Handshake",
      src: handshake,
    },
  },
  {
    title: "Personal customer care",
    content: [
      "Personal account manager",
      "Dedicated support staff",
      "Fully guided onboarding process",
    ],
    img: {
      alt: "Headphones",
      src: headphones,
    },
  },
];
