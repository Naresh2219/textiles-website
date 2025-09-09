import React from "react";
import ProductCard, { Product } from "../components/ProductCard";

const allProducts: Product[] = [
  { id: 1, name: "Marble Tile", price: 120, image: "/images/close-up-marble-textured-wall.jpg" },
  { id: 2, name: "Ceramic Tile", price: 30, image: "/images/top-view-boards-mdf-material.jpg" },
  { id: 3, name: "Granite Tile", price: 50, image: "/images/still-life-putting-up-decorative-vinyls.jpg" },
];

const Products: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      {/* Page Header */}
      <header className="mb-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Tiles
        </h2>
      </header>

      {/* Product Grid */}
      {allProducts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {allProducts.map((tile) => (
            <ProductCard key={tile.id} product={tile} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-12">
          No tiles available.
        </p>
      )}
    </section>
  );
};

export default Products;
