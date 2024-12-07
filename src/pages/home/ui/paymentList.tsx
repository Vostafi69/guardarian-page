import { FC } from "react";
import { PaymentItem } from "./paymentItem";
import styles from "./home.module.scss";
import sepa from "@/assets/images/SEPA.svg";
import fp from "@/assets/images/FP.svg";
import swift from "@/assets/images/SWIFT.svg";

const PAYMENTS: { src: string; alt: string }[] = [
  {
    alt: "SEPA",
    src: sepa,
  },
  {
    alt: "SWIFT",
    src: swift,
  },
  {
    alt: "Faster Payment",
    src: fp,
  },
];

export const PaymentsList: FC = () => {
  return (
    <ul className={styles.paymentList}>
      {PAYMENTS.map((payment, index) => (
        <PaymentItem
          key={index}
          alt={payment.alt}
          src={payment.src}
        ></PaymentItem>
      ))}
    </ul>
  );
};
