// src/components/PageBackground.jsx
import React, { useMemo } from "react";

const PageBackground = ({ children }) => {
  const shapes = useMemo(() => {
    const generated = [];
    const attempts = 1000;
    const buffer = 5;

    const addShape = (id, sizeRange) => {
      let placed = false;
      let tries = 0;
      while (!placed && tries < attempts) {
        const top = Math.random() * 95;
        const left = Math.random() * 95;
        const size =
          Math.floor(Math.random() * (sizeRange.max - sizeRange.min)) +
          sizeRange.min;
        const char = Math.random() > 0.5 ? "X" : "O";
        const rotate = Math.random() * 45 - 22.5;

        const overlaps =
          buffer > 0
            ? generated.some((s) => {
                const dx = s.left - left;
                const dy = s.top - top;
                const dist = Math.sqrt(dx * dx + dy * dy);
                return dist < (s.size / 2 + size / 2 + buffer);
              })
            : false;

        if (!overlaps) {
          generated.push({ id, top, left, size, char, rotate });
          placed = true;
        }
        tries++;
      }
    };

    // more shapes
    for (let i = 0; i < 20; i++) addShape(i, { min: 80, max: 120 }); // big
    for (let i = 20; i < 200; i++) addShape(i, { min: 20, max: 40 }); // small

    return generated;
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* scattered shapes */}
      <div className="absolute inset-0 z-0">
        {shapes.map((shape) => (
          <span
            key={shape.id}
            className="absolute text-gray-500 font-bold select-none pointer-events-none"
            style={{
              top: `${shape.top}%`,
              left: `${shape.left}%`,
              fontSize: `${shape.size}px`,
              transform: `rotate(${shape.rotate}deg)`,
              opacity: 0.8, // much more visible
            }}
          >
            {shape.char}
          </span>
        ))}
      </div>

      {/* page content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default PageBackground;
