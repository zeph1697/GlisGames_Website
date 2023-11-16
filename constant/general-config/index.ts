import { SiLinkedin, SiMaildotru } from "react-icons/si";
import { SiSkype } from "react-icons/si";
import {
  TbMailFilled,
  TbUserCode,
  TbUserDollar,
  TbUserEdit,
  TbUserSearch,
} from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";

// NAV-BAR
export const NavLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/service" },
  { name: "Games", path: "/product" },
  // { name: "Team", path: "/team" },
];

// FOOTER
export const FooterTerms = [
  { title: "Privacy Policy" },
  { title: "Terms of Use" },
  { title: "Rules of Conduct" },
  { title: "Cookie Preferences" },
];

export const CTALinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/glis-games/",
    icon: SiLinkedin,
  },
  { name: "Email", url: "mailto:mich@glisgames.com", icon: SiMaildotru },
  { name: "Skype", url: "skype:live:michnaz?chat", icon: SiSkype },
  {
    name: "Work with us!",
    url: "mailto:recruit@glisgames.com",
    icon: FaUserCircle,
  },
];

// HERO
export const ServiceCarousels = [
  {
    index: 0,
    title: "GAME PUBLISHING",
    content: "DON'T BE EATEN BY PUBLISHERS, PROTECT YOUR GAME",
    imgUrl: "/img-web-01.jpg",
  },
  {
    index: 1,
    title: "GROWTH HACKING",
    content: "TOUGH TIMES CALL FOR SMART ACTIONS",
    imgUrl: "/img-web-02.jpg",
  },
  {
    index: 2,
    title: "GAMING ADVISORY",
    content: "FROM GREAT SOLUTIONS COME GREAT OPPORTUNITIES",
    imgUrl: "/img-web-03.jpg",
  },
];

export const Timeline = [
  {
    index: 0,
    date: "2021",
    note: "Humble Beginnings",
    detail:
      "Our journey began in 2021 with a small, passionate team. Embracing our dormouse identity, we set out to create standout games that would thrive in the ever-evolving gaming landscape.",
  },
  {
    index: 1,
    date: "2021 - 2022",
    note: "Steady Progress",
    detail:
      "As Glis Games evolved, so did our impact. Our team expanded, and our games garnered global attention. Navigating industry shifts, we adapted swiftly to emerging trends, establishing ourselves as a formidable player in the gaming ecosystem.",
  },
  {
    index: 2,
    date: "2023 - NOW",
    note: "Thriving in",
    detail:
      "In 2023, Glis Games has grown into a gaming powerhouse, boasting over 20 captivating games under Glis's IP. Beyond our creations, we've delivered 30+ games for clients globally, spanning Asia, Europe, and North America. Our legacy is one of creativity, resilience, and success in a competitive gaming world.",
  },
];

// SERVICES
export const ServiceTags = [
  {
    index: 0,
    title: "CASINO GAMES DEVELOPMENT",
    content:
      "We develop casino games and we provide counseling on design, technologies, distribution, regulations, math modeling, etc. Casino games are a tough matter, let us guide you through.",
    icon: "",
  },
  {
    index: 1,
    title: "GAMING ADVISORY",
    content:
      "Is you game stuck or you want to start in the gaming industry? We can squeeze the best out of your games and we can save you the headaches that we wish we could have avoided in the past.",
    icon: "",
  },
  {
    index: 2,
    title: "GAME PUBLISHING BROKERAGE",
    content:
      "Out there is full of greedy game publishers awaiting to eat your game to the bones. We do a relentless bulldozing through all those shark tanks in order to get the best deal for you.",
    icon: "",
  },
  {
    index: 3,
    title: "GROWTH HACKING",
    content:
      "No one have Big Tech's money, but the good news is that we can exploit it to reduce your costs from development to user acquisition, rocket launch your games on a human-affordable budget.",
    icon: "",
  },
];

// TEAM
export const TeamConfig = [
  {
    id: 0,
    title: "BIG GUYS",
    guys: [
      {
        name: "Michele Tampellini",
        position: "Founder - CPO",
        url: "",
        icon: TbUserDollar,
      },
    ],
  },
  {
    id: 1,
    title: "MULTI-FUNCTION GUYS",
    guys: [
      {
        name: "Chloe Nguyen",
        position: "Product Owner",
        url: "",
        icon: TbUserSearch,
      },
    ],
  },
  {
    id: 2,
    title: "LOWKEY IT GUYS",
    guys: [
      {
        name: "Haozhong Zheng",
        position: "Developer",
        url: "",
        icon: TbUserCode,
      },
      { name: "Hai Luong", position: "Developer", url: "", icon: TbUserCode },
      { name: "Chung Pham", position: "Developer", url: "", icon: TbUserCode },
      { name: "Viet Pham", position: "Developer", url: "", icon: TbUserCode },
      { name: "Tung Tran", position: "Developer", url: "", icon: TbUserCode },
      {
        name: "Viet Anh Ng.",
        position: "Developer",
        url: "",
        icon: TbUserCode,
      },
    ],
  },
  {
    id: 3,
    title: "MIND-FASHION GUYS",
    guys: [
      {
        name: "Mai Trieu",
        position: "Graphic Designer",
        url: "",
        icon: TbUserEdit,
      },
    ],
  },
];

// CONTACT
export const ContactConfig = [
  {
    index: 0,
    title: "General Inquiries",
    subtitle: "Ask us anything.",
    path: "mich@glisgames.com",
    url: "mailto:mich@glisgames.com",
  },
  {
    index: 1,
    title: "Partnerships",
    subtitle: "Need engineering help?",
    path: "mich@glisgames.com",
    url: "mailto:mich@glisgames.com",
  },
  {
    index: 2,
    title: "Career",
    subtitle: "Growth with us!",
    path: "recruit@glisgames.com",
    url: "mailto:recruit@glisgames.com",
  },
  {
    index: 3,
    title: "Our Office",
    subtitle:
      "3rd Floor, Toong Workspace, Indochina Plaza Hanoi, Cau Giay, Hanoi.",
    path: "",
    url: "",
  },
];
