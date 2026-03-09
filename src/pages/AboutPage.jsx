import { useEffect } from "react";
import crest from "../assets/scoil-crest.png";
import ProfileGrid from "../components/sections/ProfileGrid";

const placeholderImage =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fisobarscience-1bfd8.kxcdn.com%2Fwp-content%2Fuploads%2F2020%2F09%2Fdefault-profile-picture1.jpg&f=1&nofb=1&ipt=16c4f69f00caa12820ed5e58afdea3582c086a204a901abb7d890a9a7987a5c2";

const staffMembers = [
  { name: "Ainm Ionadaí", title: "Príomhoide", image: placeholderImage },
  { name: "Ainm Ionadaí", title: "Leas-Phríomhoide", image: placeholderImage },
  { name: "Ainm Ionadaí", title: "Rúnaí na Scoile", image: placeholderImage },
  { name: "Ainm Ionadaí", title: "Naoináin Bheaga / Mhóra", image: placeholderImage },
  { name: "Ainm Ionadaí", title: "Rang 1/2", image: placeholderImage },
  { name: "Ainm Ionadaí", title: "Rang 3/4", image: placeholderImage },
  { name: "Ainm Ionadaí", title: "Rang 3/4", image: placeholderImage },
  { name: "Ainm Ionadaí", title: "Rang 5/6", image: placeholderImage },
];

const supportTeams = [
  { name: "Foireann Oideachais Speisialta", members: "Ainm Ionadaí" },
  { name: "Foireann CRS", members: "Ainm Ionadaí" },
  { name: "Múinteoir Béarla mar Theanga Bhreise", members: "Ainm Ionadaí" },
  { name: "Tionlacan Bus", members: "Ainm Ionadaí" },
  { name: "Airíoch", members: "Ainm Ionadaí" },
];

const boardMembers = [
  { name: "Ainm Ionadaí", title: "Cathaoirleach" },
  { name: "Ainm Ionadaí", title: "Ainmní an Phátrúin" },
  { name: "Ainm Ionadaí", title: "Príomhoide na Scoile" },
  { name: "Ainm Ionadaí", title: "Ainmní na Múinteoirí" },
  { name: "Ainm Ionadaí", title: "Ainmní na dTuismitheoirí" },
  { name: "Ainm Ionadaí", title: "Ainmní na dTuismitheoirí" },
  { name: "Ainm Ionadaí", title: "Ainmní an Phobail" },
  { name: "Ainm Ionadaí", title: "Ainmní an Phobail" },
];

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F9F8F4] w-full overflow-hidden">
      <div className="min-h-screen px-4 flex flex-col items-center z-10 relative">
        <section className="w-full max-w-6xl p-8 bg-[#F9F8F4] rounded-2xl my-12">
          <header className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <img src={crest} className="h-48" alt="Suaitheantas Scoil Mhaolchéadair" />
            </div>

            <h2 className="text-4xl font-extrabold text-[#1C2E5A] mb-2">Fúinn</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Eolas faoinár scoil — cé sinne, ár bhfoireann, ár mbainistíocht agus ár gclár ama.
            </p>
          </header>

          <hr className="mt-6 mb-8" />

          {/* Fáilte */}
          <section id="failte" className="mb-12">
            <h3 className="text-3xl font-extrabold text-[#1C2E5A] text-center mb-6">Fáilte</h3>
            <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-200">
              <p className="text-gray-700 text-base leading-8">
                Céad míle fáilte go Scoil Mhaolchéadair! Is bunscoil Ghaeltachta Caitleacach meascaithe sinne
                atá suite i gcroílár Chorca Dhuibhne. Tá sé mar aidhm againn timpeallacht shábháilte,
                chuimsitheach agus spreagúil a chruthú do gach páiste. Oibrímid go dlúth le tuismitheoirí
                agus leis an bpobal chun oideachas den scoth a chur ar fáil trí mheán na Gaeilge.
                Cuirimid béim ar fholláine, ar chruthaitheacht agus ar fhorbairt iomlán an pháiste.
              </p>
            </div>
          </section>

          {/* Foireann na Scoile */}
          <section id="foireann" className="mb-12">
            <h3 className="text-3xl font-extrabold text-[#1C2E5A] text-center mb-2">Foireann na Scoile</h3>
            <p className="text-gray-500 text-lg text-center mb-6">
              Gairmithe tiomanta a thugann paisean agus sármhaitheas dá gcuid oibre gach lá.
            </p>

            <ProfileGrid people={staffMembers} />

            <div className="mt-8 space-y-4">
              <h4 className="text-xl font-bold text-[#1C2E5A] text-center">Foirne Tacaíochta</h4>
              {supportTeams.map((team) => (
                <div
                  key={team.name}
                  className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm"
                >
                  <p className="font-bold text-[#1C2E5A]">{team.name}</p>
                  <p className="text-gray-600 text-sm mt-1">{team.members}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Bainistíocht na Scoile */}
          <section id="bainistiocht" className="mb-12">
            <h3 className="text-3xl font-extrabold text-[#1C2E5A] text-center mb-2">Bainistíocht na Scoile</h3>
            <p className="text-gray-500 text-lg text-center mb-6">
              Baill an Bhoird Bhainistíochta.
            </p>

            <ProfileGrid people={boardMembers} />
          </section>

          {/* Clár Ama */}
          <section id="clar-ama" className="mb-12">
            <h3 className="text-3xl font-extrabold text-[#1C2E5A] text-center mb-2">Clár Ama</h3>
            <p className="text-gray-500 text-lg text-center mb-6">
              Amanna na scoile.
            </p>

            <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-200">
              <p className="text-gray-500 text-center italic">
                Ag teacht go luath — cuirfear an clár ama anseo nuair a bheidh sé deimhnithe.
              </p>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
