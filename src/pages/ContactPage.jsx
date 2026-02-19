import { useEffect } from "react";
import PageContainer from "../components/layout/PageContainer";
import PageHeading from "../components/layout/PageHeading";
import SectionCard from "../components/layout/SectionCard";
import { siteConfig } from "../config/site";

const contactCards = [
  {
    icon: "fa-envelope",
    title: "Email",
    value: siteConfig.email,
    href: siteConfig.emailHref,
  },
  {
    icon: "fa-globe",
    title: "Website",
    value: siteConfig.website,
    href: siteConfig.websiteHref,
  },
  {
    icon: "fa-phone",
    title: "Phone",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
  },
  { icon: "fa-mobile-screen", title: "Mobile", value: siteConfig.mobile },
];

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageContainer className="py-10">
      <PageHeading title="Contact Us" subtitle="We are here to help with admissions and general enquiries." />

      <SectionCard className="p-6 md:p-8">
        <div className="mb-8 flex flex-col items-center gap-4 text-center">
          <img src={siteConfig.crest} className="h-32 sm:h-40" alt={`${siteConfig.name} crest`} />
          <p className="max-w-xl text-slate-600">Get in touch with our school office using the contact details below.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactCards.map((card) => (
            <article key={card.title} className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[#e9f0fa] text-[#1b4e85]">
                  <i className={`fa-solid ${card.icon}`} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#122e54]">{card.title}</h3>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="text-sm text-[#1b4e85] hover:underline"
                      target={card.href.startsWith("http") ? "_blank" : undefined}
                      rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="text-sm text-slate-600">{card.value}</p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionCard>
    </PageContainer>
  );
}
