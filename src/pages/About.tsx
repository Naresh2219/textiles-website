import React from "react";

const About: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* About Image */}
        <div>
          <img
            src="/images/about-tiles.jpg"
            alt="Premium Tiles Collection"
            className="rounded-xl shadow-lg object-cover w-full h-[400px]"
          />
        </div>

        {/* About Content */}
        <div>
          <h2 className="text-4xl font-extrabold text-slate-800 mb-6">
            About <span className="text-yellow-500">VDTilesCo</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            VDTilesCo has been a trusted name in the tile industry for over 25 years.
            We specialize in providing premium-quality tiles that combine durability,
            style, and affordability. From elegant floor tiles to stunning wall
            designs, we help transform your spaces into timeless masterpieces.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our core values are <span className="font-semibold">quality</span>,
            <span className="font-semibold"> innovation</span>, and
            <span className="font-semibold"> customer satisfaction</span>. With a
            passionate team and a wide range of collections, we ensure every customer
            finds tiles that perfectly match their vision.
          </p>

          <button className="px-6 py-3 bg-yellow-400 text-slate-900 font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition">
            Explore Our Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
