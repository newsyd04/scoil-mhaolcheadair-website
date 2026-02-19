import { useEffect } from "react";
import InternalPageLayout from "../components/layout/InternalPageLayout";
import SectionCard from "../components/layout/SectionCard";

const sections = [
  {
    id: "parents-association",
    title: "Parents' Association",
    content:
      "We are fortunate to have a very active Parents Association. They are a vital part of the school community. They organise many successful fundraising events throughout the year including Bingo, the Last Man Standing, the Annual School Walk and Communion and Confirmation receptions.",
  },
  {
    id: "parental-involvement",
    title: "Parental Involvement",
    content:
      "As a Catholic school, we believe that the school is not an isolated unit but a union of many people who come together to give it its life and meaning.\n\nThe triple partnership of home, school and parish is essential if the school is to live up to its Mission Statement. We aim to establish this relationship through:\n\n- Encouraging a shared commitment to the success of each individual child\n- Encouraging an ethos of understanding and openness in home-school-parish relationships\n- Helping parents to develop a positive role in complementing and supporting the work of the school in educating their children\n\nParental involvement in the life of the school is encouraged in many ways:\n\n- Through parent/partnership groups working in school\n- Fundraising/ parent helpers\n- Involvement in assemblies, celebrations, concerts, and school Masses\n- Involvement in sacramental preparation\n- School fetes, sports, and gala days",
  },
  {
    id: "home-school-liaison",
    title: "Home / School Liaison",
    content:
      "Frequent communication is of vital importance in developing and nurturing cooperation between home and school. Please refer to the school's Communication Policy in the Policy Section of our website.",
  },
  {
    id: "routines-info",
    title: "Routines and General Information",
    content:
      "- School starts at 9.20am and supervision begins at 9:10am.\n- There is a short break at 11.00am and lunch from 1.00pm to 1.30pm.\n- Healthy eating policy applies in school.\n- Junior and Senior Infants are dismissed at 2.00pm; other pupils at 3.00pm.\n- Absences should be communicated to the class teacher.\n- Early collection should be signed out in the office records.",
  },
];

const escapeHtml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function renderContent(content) {
  const blocks = content.split(/\r?\n\r?\n/);

  return blocks.map((block, index) => {
    const lines = block.split(/\r?\n/).filter((line) => line.trim());
    const isList = lines.length > 0 && lines.every((line) => line.trim().startsWith("-"));

    if (isList) {
      return (
        <ul key={index} className="ml-5 list-disc space-y-1">
          {lines.map((line, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: escapeHtml(line.replace(/^\s*-\s*/, "")) }} />
          ))}
        </ul>
      );
    }

    return (
      <p
        key={index}
        className="leading-7"
        dangerouslySetInnerHTML={{ __html: escapeHtml(block).replace(/\n/g, "<br/>") }}
      />
    );
  });
}

export default function ParentsInfo() {
  const toc = sections.map(({ id, title }) => ({ id, title }));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <InternalPageLayout
      title="Parents' Information"
      subtitle="Helpful information for families, routines, and home-school communication."
    >
      <section className="grid gap-6 lg:grid-cols-12">
        <SectionCard className="p-5 lg:col-span-3">
          <p className="text-sm font-bold uppercase tracking-wide text-slate-500">On this page</p>
          <ul className="mt-3 space-y-2">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-sm font-semibold text-[#1f4f84] hover:underline">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard className="p-5 sm:p-6 lg:col-span-9">
          <div className="space-y-8">
            {sections.map((section) => (
              <section key={section.id} id={section.id}>
                <h2 className="text-xl font-extrabold text-[#102a4a]">{section.title}</h2>
                <div className="mt-3 space-y-3 text-sm text-slate-700">
                  {renderContent(section.content)}
                </div>
              </section>
            ))}
          </div>
        </SectionCard>
      </section>
    </InternalPageLayout>
  );
}
