import { useEffect, useMemo, useState } from "react";
import InternalPageLayout from "../components/layout/InternalPageLayout";
import SectionCard from "../components/layout/SectionCard";
import { siteConfig } from "../config/site";
import {
  ALADDIN_PAYMENT_URL,
  GOOGLE_FORM_URL,
  rounds,
  ruleItems,
} from "../data/lastManStandingData";

const toGoogleEmbedUrl = (url) =>
  url.includes("embedded=true") ? url : `${url}${url.includes("?") ? "&" : "?"}embedded=true`;

export default function LastManStandingPage() {
  const [embedForm, setEmbedForm] = useState(false);
  const embedUrl = useMemo(() => toGoogleEmbedUrl(GOOGLE_FORM_URL), []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const mq = window.matchMedia("(min-width: 640px)");
    const update = () => setEmbedForm(mq.matches);
    update();

    if (mq.addEventListener) mq.addEventListener("change", update);
    else mq.addListener(update);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", update);
      else mq.removeListener(update);
    };
  }, []);

  return (
    <InternalPageLayout
      title="National League Last Man Standing 2026"
      subtitle={`Starting Saturday January 24th 2026 in aid of ${siteConfig.name}.`}
    >
      <SectionCard className="p-5 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-3">
          <article className="surface-soft p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Entry Fee</p>
            <p className="mt-1 text-2xl font-extrabold text-[#102a4a]">€10</p>
          </article>
          <article className="surface-soft p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Prize Pot</p>
            <p className="mt-1 text-2xl font-extrabold text-[#102a4a]">€500</p>
          </article>
          <article className="surface-soft p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Selections Due</p>
            <p className="mt-1 text-2xl font-extrabold text-[#102a4a]">Jan 22nd 2026</p>
          </article>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <a href={embedForm ? "#enter" : GOOGLE_FORM_URL} target={embedForm ? undefined : "_blank"} rel="noreferrer" className="btn-primary">
            Enter (Google Form)
          </a>
          <a href={ALADDIN_PAYMENT_URL} target="_blank" rel="noreferrer" className="btn-secondary">
            Pay €10 (Aladdin)
          </a>
          <a href="/latest" className="btn-accent">
            Follow Progress
          </a>
        </div>
      </SectionCard>

      <SectionCard className="p-5 sm:p-6">
        <h2 className="text-2xl font-extrabold text-[#102a4a]">Rules & Guidelines</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
          {ruleItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </SectionCard>

      <SectionCard id="enter" className="p-5 sm:p-6">
        <h2 className="text-2xl font-extrabold text-[#102a4a]">Enter</h2>
        {embedForm ? (
          <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
            <iframe
              title="Last Man Standing 2026 Entry Form"
              src={embedUrl}
              className="w-full"
              style={{ height: "min(1100px, 85vh)" }}
              frameBorder="0"
              loading="lazy"
            >
              Loading...
            </iframe>
          </div>
        ) : (
          <div className="mt-4">
            <p className="text-sm text-slate-700">On mobile, the form opens in a new tab for a smoother experience.</p>
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer" className="btn-primary mt-3">
              Open Google Form
            </a>
          </div>
        )}
      </SectionCard>

      <SectionCard className="p-5 sm:p-6">
        <h2 className="text-2xl font-extrabold text-[#102a4a]">Fixtures by Round</h2>
        <div className="mt-4 space-y-4">
          {rounds.map((round) => (
            <article key={round.title} className="overflow-hidden rounded-xl border border-slate-200">
              <div className="bg-[#f1f5fb] px-4 py-3">
                <p className="font-semibold text-[#102a4a]">{round.title}</p>
                <p className="text-sm text-slate-600">{round.dates}</p>
              </div>
              <ul className="grid gap-2 px-4 py-4 text-sm text-slate-700 sm:grid-cols-2">
                {round.fixtures.map((fixture) => (
                  <li key={fixture}>• {fixture}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </SectionCard>
    </InternalPageLayout>
  );
}
