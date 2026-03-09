import logo from "../assets/scoil-banner.png";
import crest from "../assets/scoil-crest.png";

export const siteConfig = {
  name: "Scoil Mhaolchéadair",
  shortName: "SM",
  location: "Muiríoch, Co. Chiarraí",
  tagline: "Bunscoil chothaitheach ina bhfásann Gaeilge, pobal agus foghlaim le chéile.",
  phone: "(066) 9155341",
  phoneHref: "tel:+353669155341",
  mobile: "+353 86 000 0000",
  email: "scoilmch@gmail.com",
  emailHref: "mailto:scoilmch@gmail.com",
  website: "www.scoilmhaolcheadair.ie",
  websiteHref: "https://www.scoilmhaolcheadair.ie",
  yearEstablished: 1991,
  logo,
  crest,
};

export const navLinks = [
  { to: "/", label: "Baile" },
  { to: "/fuinn", label: "Fúinn" },
  { to: "/iontral", label: "Iontrál" },
  { to: "/polasaithe", label: "Polasaithe" },
  { to: "/scealta-is-deanai", label: "Scéalta is Déanaí" },
  { to: "/gailearai", label: "Gailearaí" },
  { to: "/teangabhail", label: "Teangabháil" },
];
