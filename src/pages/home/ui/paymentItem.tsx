import { FC } from "react";

interface PaymentItemProps {
  src: string;
  alt: string;
}

export const PaymentItem: FC<PaymentItemProps> = ({ alt, src }) => {
  return (
    <li>
      <img src={src} alt={alt} />
    </li>
  );
};
