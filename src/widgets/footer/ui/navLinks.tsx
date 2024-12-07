import { FC } from "react";
import styles from "./footer.module.scss";
import { Title } from "@/shared/ui/title";

export const NavLinks: FC = () => {
  return (
    <div className={styles.navLinks}>
      <nav>
        <Title titleType="h3">Products</Title>
        <ul className={styles.navLinksList}>
          <li>
            <a className={styles.navLinksItem} href="/">
              Buy & Sell Crypto
            </a>
          </li>
          <li>
            <a
              className={styles.navLinksItem}
              href="https://guardarian.com/subscriptions"
            >
              Recurring exchanges
            </a>
          </li>
          <li>
            <a
              className={styles.navLinksItem}
              href="https://guardarian.com/integrate-us"
            >
              On- and Off-ramp
            </a>
          </li>
          <li>
            <a
              className={styles.navLinksItem}
              href="https://guardarian.com/business"
            >
              Exchanges for businesses
            </a>
          </li>
        </ul>
      </nav>
      <nav>
        <Title titleType="h3">For Partners</Title>
        <ul className={styles.navLinksList}>
          <li>
            <a
              className={styles.navLinksItem}
              target="_blank"
              href="https://guardarian.com/for-partners"
            >
              Become a partner
            </a>
          </li>
          <li>
            <a
              className={styles.navLinksItem}
              href="https://guardarian.com/api-doc"
            >
              API Docs
            </a>
          </li>
          <li>
            <a
              className={styles.navLinksItem}
              href="https://guardarian.com/integrate-us"
            >
              Integrate us
            </a>
          </li>
          <li>
            <a
              className={styles.navLinksItem}
              href="https://guardarian.com/integrate-subscriptions"
            >
              Subscriptions
            </a>
          </li>
          <li>
            <a
              className={styles.navLinksItem}
              href="https://partner.guardarian.com/login/sign-in"
            >
              Partner login
            </a>
          </li>
        </ul>
      </nav>
      <nav>
        <Title titleType="h3">Currencies</Title>
        <ul className={styles.navLinksList}>
          <li>
            <a
              className={styles.navLinksItem}
              target="_blank"
              href="https://guardarian.com/buy-btc"
            >
              Buy BTC
            </a>
          </li>
          <li>
            <a
              className={styles.navLinksItem}
              href="https://guardarian.com/buy-eth"
            >
              Buy ETH
            </a>
          </li>
          <li>
            <a
              className={styles.navLinksItem}
              href="https://guardarian.com/buy-usdt"
            >
              Buy USDT
            </a>
          </li>
          <li>
            <a
              className={styles.navLinksItem}
              href="https://guardarian.com/buy-xmr"
            >
              Buy XMR
            </a>
          </li>
          <li>
            <a
              className={styles.navLinksItem}
              href="https://partner.guardarian.com/buy-ada"
            >
              Buy ADA
            </a>
          </li>
          <li>
            <a
              className={styles.navLinksItem}
              href="https://partner.guardarian.com/currencies"
            >
              All currencies
            </a>
          </li>
          <li>
            <button className={styles.navLinksItemButton}>
              List your token
            </button>
          </li>
        </ul>
      </nav>
      <nav>
        <Title titleType="h3">Support</Title>
        <ul className={styles.navLinksList}>
          <li>
            <a
              className={styles.navLinksItem}
              target="_blank"
              href="https://guardarian.freshdesk.com/support/tickets/new"
            >
              Submit a ticket
            </a>
          </li>
          <li>
            <a
              className={styles.navLinksItem}
              target="_blank"
              href="https://guardarian.com/faq"
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              className={styles.navLinksItem}
              target="_blank"
              href="https://guardarian.freshdesk.com/support/home"
            >
              Knowledge base
            </a>
          </li>
          <li>
            <a
              className={styles.navLinksItem}
              target="_blank"
              href="https://guardarian.com/contact-us"
            >
              Contact us
            </a>
          </li>
        </ul>
      </nav>
      <nav>
        <Title titleType="h3">Company</Title>
        <ul className={styles.navLinksList}>
          <li>
            <a
              className={styles.navLinksItem}
              href="https://guardarian.freshdesk.com/blog"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className={styles.navLinksItem}
              href="https://guardarian.com/press-and-media"
            >
              Press & Media
            </a>
          </li>
          <li>
            <a className={styles.navLinksItem} href="#brand-assets">
              Brand Assets
            </a>
          </li>
        </ul>
      </nav>
      <nav>
        <Title titleType="h3">Legal</Title>
        <ul className={styles.navLinksList}>
          <li>
            <a
              className={styles.navLinksItem}
              target="_blank"
              href="https://guardarian.freshdesk.com/privacy-policy"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              className={styles.navLinksItem}
              target="_blank"
              href="https://guardarian.com/terms-of-service"
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              className={styles.navLinksItem}
              target="_blank"
              href="https://guardarian.com/aml-policy"
            >
              AML | CTF Policy
            </a>
          </li>
          <li>
            <a
              className={styles.navLinksItem}
              target="_blank"
              href="https://guardarian.com/cookies-policy"
            >
              Cookies Policy
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
