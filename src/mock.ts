import Button from "./components/button/button";
import { CardProps } from "./components/card";
import { ListProps } from "./components/lists";

const mainCard: CardProps = {
  url: "/",
  image:
    "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAXBZ2v.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg",
  headline: {
    level: "h1",
    variant: "headingOne",
    children: "Relief From The Heat Is On The Way",
  },
  classNames: "rounded-l-md",
};
const mainCard2: CardProps = {
  title: "Weather Today Across the Country",
  url: "/",
  image:
    "https://s.w-x.co/staticmaps/us_wxhi1_1280x720.jpg?crop=16:9&width=980&format=pjpg&auto=webp&quality=60",
  button: [{ url: "/" }],
  classNames: "px-10",
};
const littleCard: CardProps = {
  url: "/",
  image:
    "https://s.w-x.co/Severe623AM.png?crop=16:9&width=320&format=pjpg&auto=webp&quality=60",
  headline: {
    level: "h3",
    variant: "headingFour",
    children: "Plains Severe Weather Threat Thursday and Friday",
  },
};
const littleCard2: CardProps = {
  url: "/",
  image:
    "https://v.w-x.co/1656011060275_0623_ItalysUnderwaterVolcano_TEXTproxy.jpg",
  headline: {
    level: "h3",
    variant: "headingFour",
    children: "Hidden Underwater Volcano Worries Scientists",
  },
};
const littleCard3: CardProps = {
  url: "/",
  image:
    "https://www.project-sherpa.eu/wp-content/uploads/2020/12/covid19-1600x900-1.jpg",
  headline: {
    level: "h3",
    variant: "headingFour",
    children: "Why Your Chance of Getting COVID Is Growing",
  },
};
const sideCard: CardProps = {
  title: "Welcoming Summer",
  url: "/",
  image:
    "https://s.w-x.co/util/image/w/gettyimages-1404155662.jpg?crop=16:9&width=980&format=pjpg&auto=webp&quality=60",
  headline: {
    level: "h3",
    variant: "headingFive",
    children: "Crowds Gather at Stonehenge ",
  },
  classNames: "rounded-md mb-3",
};
const sideCard2: CardProps = {
  title: "Hurricane Tacker",
  url: "/",
  image:
    "https://www.wfla.com/wp-content/uploads/sites/71/2022/06/TTT-Tropical-Sat-1.png?w=900",
  classNames: "rounded-md mb-3 pl-2 pr-2 h-72",
  button: [{ url: "/" }],
};
const sideCard3: CardProps = {
  title: "Stay Safe",
  url: "/",
  image:
    "https://s.w-x.co/promo-modules-units-features.png?crop=2.85:1&width=320&format=pjpg&auto=webp&quality=60",
  classNames: "rounded-md mb-3",
};
const sideCard4: CardProps = {
  title: "Featured Deal",
  url: "/",
  image:
    "https://s.w-x.co/cat.jpeg?crop=16:9&width=980&format=pjpg&auto=webp&quality=60",
  classNames: "rounded-md mb-3",
  headline: {
    level: "h3",
    variant: "headingFive",
    children: "This Cat Collar Will Keep You And You Cat Entertained For Hours",
  },
  button: [{ url: "/" }],
};
const sideCard5: CardProps = {
  title: "We'd like to hear from you!",
  url: "/",
  classNames: "rounded-md mb-3",
  headline: {
    level: "h3",
    variant: "headingFive",
    children:
      "Please take a few minutes to tell us about your experience today.",
  },
  button: [{ url: "/" }],
};
const sideCard6: CardProps = {
  title: "COVID-19",
  url: "/",
  classNames: "rounded-md mb-3",
  headline: {
    level: "h3",
    variant: "headingFive",
    children:
      "See the latest in the new information hub, including county-level tracking for the US. Stay safe.",
  },
  button: [{ url: "/" }],
};

export {
  mainCard,
  mainCard2,
  littleCard,
  littleCard2,
  littleCard3,
  sideCard,
  sideCard2,
  sideCard3,
  sideCard4,
  sideCard5,
  sideCard6,
};
