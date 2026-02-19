import logo from "../assets/scoil-banner.png";
import crest from "../assets/scoil-crest.png";

export const siteConfig = {
  name: "Scoil Mhaolcheadair",
  shortName: "SM",
  location: "Muirioch, Co. Kerry",
  tagline: "A nurturing school where Gaeilge, community, and confident learning grow together.",
  phone: "+353 66 000 0000",
  phoneHref: "tel:+353660000000",
  mobile: "+353 86 000 0000",
  email: "office@scoilmhaolcheadair.ie",
  emailHref: "mailto:office@scoilmhaolcheadair.ie",
  website: "www.scoilmhaolcheadair.ie",
  websiteHref: "https://www.scoilmhaolcheadair.ie",
  yearEstablished: 1991,
  logo,
  crest,
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About" },
  { to: "/admissions", label: "Admissions" },
  { to: "/policies", label: "Policies" },
  { to: "/latest", label: "Latest" },
  { to: "/parents-information", label: "Parents" },
  { to: "/contact", label: "Contact" },
];
