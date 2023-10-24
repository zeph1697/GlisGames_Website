import { SiLinkedin } from "react-icons/si";
import { SiSkype } from "react-icons/si";
import { TbMailFilled } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";

// NAV-BAR
export const NavLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/service" },
  { name: "Games", path: "/product" },
  { name: "Team", path: "/team" },
];

// FOOTER
export const FooterTerms = [
  { title: "Privacy Policy" },
  { title: "Terms of Use" },
  { title: "Rules of Conduct" },
  { title: "Cookie Preferences" },
];

export const FooterCTALinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/glis-games/",
    icon: SiLinkedin,
  },
  { name: "Email", url: "", icon: TbMailFilled },
  { name: "Skype", url: "", icon: SiSkype },
  { name: "Work with us!", url: "", icon: FaUserCircle },
];

// HERO
export const ServiceCarousels = [
  {
    title: "GAME PUBLISHING",
    content: "DON'T BE EATEN BY PUBLISHERS, PROTECT YOUR GAME",
    imgUrl: "/img-web-01.jpg",
  },
  {
    title: "GROWTH HACKING",
    content: "TOUGH TIMES CALL FOR SMART ACTIONS",
    imgUrl: "/img-web-02.jpg",
  },
  {
    title: "GAMING ADVISORY",
    content: "FROM GREAT SOLUTIONS COME GREAT OPPORTUNITIES",
    imgUrl: "/img-web-03.jpg",
  },
];

// SERVICES
export const ServiceTags = [
  {
    title: "CASINO GAMES DEVELOPMENT",
    content:
      "We develop casino games and we provide counseling on design, technologies, distribution, regulations, math modeling, etc. Casino games are a tough matter, let us guide you through.",
    icon: "",
  },
  {
    title: "GAMING ADVISORY",
    content:
      "Is you game stuck or you want to start in the gaming industry? We can squeeze the best out of your games and we can save you the headaches that we wish we could have avoided in the past.",
    icon: "",
  },
  {
    title: "GAME PUBLISHING BROKERAGE",
    content:
      "Out there is full of greedy game publishers awaiting to eat your game to the bones. We do a relentless bulldozing through all those shark tanks in order to get the best deal for you.",
    icon: "",
  },

  {
    title: "GROWTH HACKING",
    content:
      "No one have Big Tech's money, but the good news is that we can exploit it to reduce your costs from development to user acquisition, rocket launch your games on a human-affordable budget.",
    icon: "",
  },
];
