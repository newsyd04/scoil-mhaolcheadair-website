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
                Our Green Flag Initiative
              </h2>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                We’re on a mission to help the planet! 🌍  
                By recycling, saving energy, and looking after nature, our school
                is working towards a <strong>Green Flag Award</strong>.
              </p>
            </header>

            {/* Bite-sized Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 bg-white rounded-2xl shadow-md text-center">
                <span className="text-4xl">♻️</span>
                <h3 className="text-xl font-bold text-green-600 mt-2">Reduce Waste</h3>
                <p className="text-gray-600 mt-1">
                  We recycle paper, plastic and cut down on rubbish.
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-md text-center">
                <span className="text-4xl">💡</span>
                <h3 className="text-xl font-bold text-green-600 mt-2">Save Energy</h3>
                <p className="text-gray-600 mt-1">
                  Turning off lights and using energy wisely every day.
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-md text-center">
                <span className="text-4xl">🌸</span>
                <h3 className="text-xl font-bold text-green-600 mt-2">Love Nature</h3>
                <p className="text-gray-600 mt-1">
                  Planting flowers, protecting wildlife, and keeping our school green.
                </p>
              </div>
            </div>

            {/* Gallery */}
            <div>
              <h3 className="text-3xl font-sketch text-green-700 text-center mb-6">
                Our Eco Projects 📸
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {["Placeholder 1", "Placeholder 2", "Placeholder 3", "Placeholder 4", "Placeholder 5", "Placeholder 6"].map(
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
