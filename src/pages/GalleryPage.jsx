import { useEffect, useState } from "react";
import InternalPageLayout from "../components/layout/InternalPageLayout";
import SectionCard from "../components/layout/SectionCard";

const imageModules = import.meta.glob("../assets/gallery/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

const images = Object.entries(imageModules).map(([path, src]) => ({
  src,
  alt: path.split("/").pop().replace(/\.[^.]+$/, "").replace(/[-_]/g, " "),
}));

export default function GalleryPage() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") setSelected((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setSelected((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <InternalPageLayout
      title="Gailearaí"
      subtitle="Grianghraif ó imeachtaí agus ó shaol na scoile."
    >
      <SectionCard className="p-4 sm:p-6">
        {images.length === 0 ? (
          <p className="text-center text-slate-500 italic">
            Ag teacht go luath — cuirfear grianghraif anseo nuair a bheidh siad ar fáil.
          </p>
        ) : (
          <div className="columns-2 gap-3 sm:columns-3 md:columns-4">
            {images.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setSelected(i)}
                className="mb-3 block w-full overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-[#102a4a]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </button>
            ))}
          </div>
        )}
      </SectionCard>

      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute right-4 top-4 text-3xl text-white/80 hover:text-white"
            aria-label="Dún"
          >
            &times;
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setSelected((i) => (i - 1 + images.length) % images.length); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-4xl text-white/70 hover:text-white"
            aria-label="Grianghraf roimhe"
          >
            &#8249;
          </button>

          <img
            src={images[selected].src}
            alt={images[selected].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
          />

          <button
            onClick={(e) => { e.stopPropagation(); setSelected((i) => (i + 1) % images.length); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl text-white/70 hover:text-white"
            aria-label="Grianghraf eile"
          >
            &#8250;
          </button>
        </div>
      )}
    </InternalPageLayout>
  );
}
