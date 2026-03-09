// src/pages/GreenFlagPage.jsx
import React, { useEffect } from "react";
import PageBackground from "../components/PageBackground";
import naturebg from '../assets/nature.png';

const GreenFlagPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-[#F9F8F4] min-h-screen w-full">
        <img src={naturebg} className='absolute inset-0 w-full h-full object-cover saturate-[1] z-0' />
      
        <div className="min-h-screen px-4 flex flex-col items-center z-20 relative shadow-2xl shadow-black/30">

          <section className="w-full max-w-5xl p-8 bg-green-50 rounded-3xl shadow-lg my-12 border-4 border-green-300">
            {/* Fun Header */}
            <header className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-sketch text-green-700 mb-4">
                Ár dTionscnamh Bratach Ghlas
              </h2>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                Táimid ar mhisean chun cabhrú leis an bpláinéad! 🌍
                Trí athchúrsáil, fuinneamh a shábháil agus aire a thabhairt don nádúr, tá ár scoil
                ag obair i dtreo <strong>Gradam na Brataí Glaise</strong>.
              </p>
            </header>

            {/* Bite-sized Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 bg-white rounded-2xl shadow-md text-center">
                <span className="text-4xl">♻️</span>
                <h3 className="text-xl font-bold text-green-600 mt-2">Laghdaigh Dramhaíl</h3>
                <p className="text-gray-600 mt-1">
                  Athchúrsálaimid páipéar, plaisteach agus laghdaímid bruscar.
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-md text-center">
                <span className="text-4xl">💡</span>
                <h3 className="text-xl font-bold text-green-600 mt-2">Sábháil Fuinneamh</h3>
                <p className="text-gray-600 mt-1">
                  Soilse a mhúchadh agus fuinneamh a úsáid go ciallmhar gach lá.
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-md text-center">
                <span className="text-4xl">🌸</span>
                <h3 className="text-xl font-bold text-green-600 mt-2">Grá don Nádúr</h3>
                <p className="text-gray-600 mt-1">
                  Bláthanna a chur, fiadhúlra a chosaint agus ár scoil a choinneáil glas.
                </p>
              </div>
            </div>

            {/* Gallery */}
            <div>
              <h3 className="text-3xl font-sketch text-green-700 text-center mb-6">
                Ár dTionscadail Éiceolaíocha 📸
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {["Áit 1", "Áit 2", "Áit 3", "Áit 4", "Áit 5", "Áit 6"].map(
                  (label, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center bg-green-100 border-4 border-green-300 rounded-xl h-48 shadow-lg"
                    >
                      <span className="text-green-700 font-bold">{label}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </section>
        </div>
    </div>
  );
};

export default GreenFlagPage;
