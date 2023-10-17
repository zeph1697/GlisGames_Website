import { SiLinkedin } from "react-icons/si";
import { SiSkype } from "react-icons/si";
import { TbMailFilled } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";

export const NavLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/service" },
  { name: "Works", path: "/product" },
  { name: "Team", path: "/team" },
];

export const FooterLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/glis-games/",
    icon: SiLinkedin,
  },
  { name: "Email", url: "", icon: TbMailFilled },
  { name: "Skype", url: "", icon: SiSkype },
  { name: "Work with us!", url: "", icon: FaUserCircle },
];
