import { Link } from "react-router-dom";
import { navLinks, siteConfig } from "../config/site";

const keyLinks = navLinks.filter((item) => item.to !== "/").slice(0, 6);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-slate-200 bg-[#0f2748] text-white">
      <div className="site-container grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-2xl font-extrabold">{siteConfig.name}</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/85">{siteConfig.tagline}</p>
        </div>

        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-white/70">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-white/90">
            <li>
              <a href={siteConfig.phoneHref} className="hover:underline">{siteConfig.phone}</a>
            </li>
            <li>
              <a href={siteConfig.emailHref} className="hover:underline">{siteConfig.email}</a>
            </li>
            <li>
              <a href={siteConfig.websiteHref} className="hover:underline" target="_blank" rel="noreferrer">
                {siteConfig.website}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-white/70">Explore</p>
          <div className="mt-3 grid gap-2 text-sm">
            {keyLinks.map((link) => (
              <Link key={link.to} to={link.to} className="text-white/90 hover:text-white hover:underline">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 py-4 text-center text-xs font-semibold text-white/75">
        <p>&copy; {siteConfig.yearEstablished}–{year} {siteConfig.name}. All rights reserved.</p>
        <p className="mt-1">
          Designed and developed by{" "}
          <a href="https://daranewso.me" target="_blank" rel="noreferrer" className="underline hover:text-white">
            Dara Newsome
          </a>
        </p>
      </div>
    </footer>
  );
}
