import { useEffect } from "react";
import InternalPageLayout from "../components/layout/InternalPageLayout";
import SectionCard from "../components/layout/SectionCard";

const sections = [
  {
    id: "cumann-tuismitheoiri",
    title: "Cumann na dTuismitheoirí",
    content:
      "Tá an t-ádh linn go bhfuil Cumann Tuismitheoirí an-ghníomhach againn. Is cuid ríthábhachtach de phobal na scoile iad. Eagraíonn siad go leor imeachtaí tiomsaithe airgid rathúla i rith na bliana lena n-áirítear Biongó, an Last Man Standing, Siúlóid Bhliantúil na Scoile agus fáiltithe Céad Comaoineach agus Cóineartaithe.",
  },
  {
    id: "pairtiocht-tuismitheoiri",
    title: "Páirtíocht Tuismitheoirí",
    content:
      "Mar scoil Chaitliceach, creidimid nach aonad leithlisithe í an scoil ach aontas go leor daoine a thagann le chéile chun beatha agus brí a thabhairt di.\n\nTá an chomhpháirtíocht thriarach idir baile, scoil agus paróiste riachtanach má tá an scoil chun a Ráiteas Misin a chomhlíonadh. Tá sé mar aidhm againn an caidreamh seo a bhunú trí:\n\n- Tiomantas roinnte do rath gach páiste aonair a spreagadh\n- Éiteas tuisceana agus oscailteachta i gcaidrimh baile-scoile-paróiste a chothú\n- Cabhrú le tuismitheoirí ról dearfach a fhorbairt ag comhlánú agus ag tacú le hobair na scoile in oideachas a leanaí\n\nSpreagtar páirtíocht tuismitheoirí i saol na scoile ar go leor bealaí:\n\n- Trí ghrúpaí comhpháirtíochta tuismitheoirí ag obair sa scoil\n- Tiomsú airgid / cúntóirí tuismitheoirí\n- Páirtíocht i dtionóil, ceiliúradh, ceolchoirmeacha agus Aifrinn scoile\n- Páirtíocht in ullmhúchán sacraiminteach\n- Féilte scoile, spórt agus laethanta gála",
  },
  {
    id: "ceangal-baile-scoile",
    title: "Ceangal Baile / Scoile",
    content:
      "Tá cumarsáid rialta an-tábhachtach chun comhoibriú idir baile agus scoil a fhorbairt agus a chothú. Féach ar Pholasaí Cumarsáide na scoile i Rannóg na bPolasaithe ar ár suíomh gréasáin le do thoil.",
  },
  {
    id: "gnathaimh-eolas",
    title: "Gnáthaimh agus Eolas Ginearálta",
    content:
      "- Tosaíonn an scoil ag 9.20r.n. agus tosaíonn maoirseacht ag 9:10r.n.\n- Tá sos gearr ag 11.00r.n. agus lón ó 1.00i.n. go 1.30i.n.\n- Tá polasaí ithe sláintiúil i bhfeidhm sa scoil.\n- Scaoiltear Naíonáin Shóisearacha agus Shinsearacha ag 2.00i.n.; daltaí eile ag 3.00i.n.\n- Ba cheart asláithreachtaí a chur in iúl do mhúinteoir an ranga.\n- Ba cheart bailiúchán luath a shíniú amach i dtaifid na hoifige.",
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
      title="Eolas do Thuismitheoirí"
      subtitle="Eolas úsáideach do theaghlaigh, gnáthaimh agus cumarsáid baile-scoile."
    >
      <section className="grid gap-6 lg:grid-cols-12">
        <SectionCard className="p-5 lg:col-span-3">
          <p className="text-sm font-bold uppercase tracking-wide text-slate-500">Ar an leathanach seo</p>
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
