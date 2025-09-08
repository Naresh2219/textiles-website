import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px]">
      {/* Background Image */}
      <img
        src="/images/tile-banner.png"
        alt="Tiles Background"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-800/40 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg mb-4">
          Elevate Your Space with Premium Tiles
        </h1>
        <p className="text-lg md:text-2xl text-white drop-shadow-md mb-6">
          Durable • Stylish • Affordable
        </p>

        {/* CTA Button */}
        <button className="px-6 py-3 bg-yellow-400 text-slate-900 font-semibold rounded-xl shadow-md hover:bg-yellow-500 transition">
          Explore Collection
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
