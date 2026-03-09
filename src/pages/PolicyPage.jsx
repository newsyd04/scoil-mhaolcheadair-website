import React, { useEffect } from "react";
import { FileText } from "lucide-react";
import crest from "../assets/scoil-crest.png";

const PolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const docs = [
    {
      title: "Polasaí Bí Cineálta",
      href: "/policies/Bí Cineálta Policy.pdf",
      accent: "#E45C7A",
    },
    {
      title: "Polasaí Iontrála",
      href: "/policies/Admission Policy of Scoil Bhreac chluain.pdf",
      accent: "#F5AB00",
    },
    {
      title: "Polasaí Cumarsáide",
      href: "/policies/PARENTSTAFF COMMUNICATION POLICY.pdf",
      accent: "#6AA84F",
    },
  ];

  const DocCard = ({ title, href, accent }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col gap-4 p-7 sm:p-8 bg-white rounded-2xl
                 shadow-md hover:shadow-xl transition
                 border border-gray-200 hover:border-gray-300"
    >
      {/* Accent bar */}
      <span
        className="absolute left-0 top-0 h-1.5 w-full rounded-t-2xl opacity-90"
        style={{ backgroundColor: accent }}
        aria-hidden="true"
      />

      <div className="flex items-start gap-4">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${accent}18` }}
        >
          <FileText className="h-6 w-6" style={{ color: accent }} />
        </div>

        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 leading-snug">
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-500">Osclaítear mar PDF i gcluaisín nua.</p>
        </div>
      </div>

      <div className="mt-1">
        <span className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: accent }}>
          Oscail cáipéis <span aria-hidden="true">↗</span>
        </span>
      </div>
    </a>
  );

  return (
    <div className="min-h-screen bg-[#F9F8F4] w-full">
      <div className="min-h-screen px-4 flex flex-col items-center">
        <section className="w-full max-w-6xl p-8 bg-[#F9F8F4] rounded-2xl my-12">
          {/* Header (matches your About/Admissions style) */}
          <header className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <img src={crest} className="h-48" alt="Suaitheantas Scoil Mhaolchéadair" />
            </div>

            <h2 className="text-4xl font-extrabold text-[#1C2E5A] mb-2">Polasaithe na Scoile</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Íoslódáil agus féach ar pholasaithe na scoile thíos.
            </p>
          </header>

          <hr className="mt-6 mb-8" />

          {/* Content */}
          <div className="max-w-5xl mx-auto pb-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-8">
              {docs.map((d) => (
                <DocCard key={d.title} title={d.title} href={d.href} accent={d.accent} />
              ))}
            </div>

            <p className="text-center text-sm text-gray-500">
              Má tá cáipéis pholasaí eile ag teastáil uait, déan teangabháil le hoifig na scoile le do thoil.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PolicyPage;
