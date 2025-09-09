import React from "react";
import HeroSection from "../components/HeroSection";
import ProductCard, { Product } from "../components/ProductCard";
import Button from "../components/Button";

const featuredProducts: Product[] = [
  { id: 1, name: "Marble Floor Tile", price: 120, image: "/images/close-up-marble-textured-wall.jpg" },
  { id: 2, name: "Granite Wall Tile", price: 90, image: "/images/still-life-putting-up-decorative-vinyls.jpg" },
  { id: 3, name: "Ceramic Bathroom Tile", price: 60, image: "/images/top-view-boards-mdf-material.jpg" },
];

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-extrabold text-slate-800 mb-10 text-center">
            Featured <span className="text-yellow-500">Products</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 flex justify-center gap-6">
            <Button text="Shop Now" variant="primary" />
            <Button text="View Collection" variant="outline" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
