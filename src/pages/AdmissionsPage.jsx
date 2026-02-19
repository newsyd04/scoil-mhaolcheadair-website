import React, { useEffect } from "react";
import { FileText } from "lucide-react";
import crest from "../assets/scoil-crest.png";

const AdmissionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const docs = [
    {
      title: "Admission Application Form",
      href: "/admissions/Admission Application Form.pdf",
      accent: "#6AA84F",
    },
    {
      title: "Annual Admissions Notice 2026–2027",
      href: "/admissions/Annual Admission Notice 2026 2027.pdf",
      accent: "#F5AB00",
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
      {/* Small brand accent bar (ties it to the sticky note palette without copying the style) */}
      <span
        className="absolute left-0 top-0 h-1.5 w-full rounded-t-2xl opacity-90"
        style={{ backgroundColor: accent }}
        aria-hidden="true"
      />

      <div className="flex items-start gap-4">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${accent}18` }} // soft tint
        >
          <FileText className="h-6 w-6" style={{ color: accent }} />
        </div>

        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 leading-snug">
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Opens as a PDF in a new tab.
          </p>
        </div>
      </div>

      <div className="mt-1">
        <span
          className="inline-flex items-center gap-2 text-sm font-semibold"
          style={{ color: accent }}
        >
          Open document <span aria-hidden="true">↗</span>
        </span>
      </div>
    </a>
  );

  return (
    <div className="min-h-screen bg-[#F9F8F4] w-full">
      <div className="min-h-screen px-4 flex flex-col items-center">
        <section className="w-full max-w-6xl p-8 bg-[#F9F8F4] rounded-2xl my-12">
          {/* Match About page header structure */}
          <header className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <img
                src={crest}
                className="h-48"
                alt="Scoil Mhaolcheadair crest"
              />
            </div>

            <h2 className="text-4xl font-extrabold text-[#1C2E5A] mb-2">
              Admissions
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Find the key admissions documents and notices below.
            </p>
          </header>

          <hr className="mt-6 mb-8" />

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {docs.map((d) => (
                <DocCard
                  key={d.title}
                  title={d.title}
                  href={d.href}
                  accent={d.accent}
                />
              ))}
            </div>

            {/* Optional small helper text, matches the About “clean” vibe */}
            <p className="mt-8 text-center text-sm text-gray-500">
              If you need help with admissions, please contact the school office.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdmissionsPage;
