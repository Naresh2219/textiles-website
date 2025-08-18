import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-[500px]">
      <img
        src="/images/textile-banner.jpg"
        alt="Textile Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Experience the Elegance of Textiles</h1>
        <p className="text-lg md:text-2xl">Quality fabrics for every occasion</p>
      </div>
    </div>
  );
};

export default HeroSection;
