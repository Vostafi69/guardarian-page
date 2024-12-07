import medium from "@/assets/images/medium.svg";
import facebook from "@/assets/images/facebook.svg";
import reddit from "@/assets/images/reddit.svg";
import twitter from "@/assets/images/twitter.svg";
import youtube from "@/assets/images/youtube.svg";
import telegram from "@/assets/images/telegram.svg";

export interface SocialType {
  link: string;
  img: {
    src: string;
    alt: string;
  };
}

export const SOCIALS: SocialType[] = [
  {
    link: "https://www.facebook.com/Guardariancom",
    img: {
      alt: "facebook",
      src: facebook,
    },
  },
  {
    link: "https://twitter.com/Guardarian_com",
    img: {
      alt: "twitter",
      src: twitter,
    },
  },
  {
    link: "https://www.youtube.com/channel/UCYjnir4rpj9ZL2bgWhX945Q/featured",
    img: {
      alt: "youtube",
      src: youtube,
    },
  },
  {
    link: "https://www.reddit.com/r/Guardarian",
    img: {
      alt: "reddit",
      src: reddit,
    },
  },
  {
    link: "https://medium.com/@guardarian",
    img: {
      alt: "medium",
      src: medium,
    },
  },
  {
    link: "https://web.telegram.org/a/#6346312607",
    img: {
      alt: "telegram",
      src: telegram,
    },
  },
];
