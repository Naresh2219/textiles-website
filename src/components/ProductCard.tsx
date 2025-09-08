import React from "react";
import Button from "./Button";

export interface Product {
  id: number;
  name: string;
  price: number; // Price per sq.ft or per box
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white border rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
      {/* Product Image */}
      <img
        src={product.image}
        alt={`Tile design - ${product.name}`}
        className="w-full h-52 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-slate-800">{product.name}</h3>
        <p className="text-yellow-600 font-semibold mt-2">
          ₹{product.price.toFixed(2)} / sq.ft
        </p>

        {/* CTA Button */}
        <Button
          text="View Details"
          className="mt-4 w-full bg-yellow-400 text-slate-900 hover:bg-yellow-500"
        />
      </div>
    </div>
  );
};

export default ProductCard;
