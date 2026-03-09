import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navLinks, siteConfig } from "../config/site";

function DesktopNavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `nav-pill ${
          isActive
            ? "bg-[var(--brand-navy)] text-white"
            : "text-[#1f3554] hover:bg-[#e7edf6]"
        }`
      }
    >
      {label}
    </NavLink>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-[#f8f7f2]/95 backdrop-blur">
      <div className="bg-[var(--brand-navy)] text-white">
        <div className="site-container flex min-h-10 items-center justify-between text-xs font-semibold">
          <div className="flex items-center gap-4">
            <a href={siteConfig.phoneHref} className="inline-flex items-center gap-1.5 hover:underline">
              <PhoneIcon className="h-3.5 w-3.5" />
              {siteConfig.phone}
            </a>
            <a href={siteConfig.emailHref} className="hidden items-center gap-1.5 hover:underline sm:inline-flex">
              <EnvelopeIcon className="h-3.5 w-3.5" />
              {siteConfig.email}
            </a>
          </div>
          <Link to="/login" className="hover:underline">
            Logáil Isteach
          </Link>
        </div>
      </div>

      <div className="site-container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <img className="w-40 max-w-[56vw] object-contain sm:w-44" src={siteConfig.logo} alt={`${siteConfig.name} logo`} />
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0f2748] shadow-sm transition-colors hover:bg-slate-50 md:hidden"
          aria-label={open ? "Dún roghchlár" : "Oscail roghchlár"}
          aria-expanded={open}
          aria-controls="mobile-site-navigation"
        >
          {open ? <XMarkIcon className="h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="h-6 w-6" aria-hidden="true" />}
        </button>

        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((item) => (
            <DesktopNavItem key={item.to} {...item} />
          ))}
        </div>
      </div>

      {open ? (
        <div className="site-container pb-4 md:hidden">
          <nav id="mobile-site-navigation" className="rounded-2xl border border-slate-200 bg-white p-3 shadow-md">
            <p className="px-2 text-xs font-bold uppercase tracking-[0.16em] text-[#5c7390]">Roghchlár</p>
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `mt-1 block rounded-xl px-3 py-2.5 text-sm font-semibold ${
                    isActive ? "bg-[#e8eef8] text-[#0f2748]" : "text-[#1f3554] hover:bg-[#f1f4f9]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
