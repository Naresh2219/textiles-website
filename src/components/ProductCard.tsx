import React from 'react';
import Button from './Button';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-indigo-600 font-bold mt-2">${product.price.toFixed(2)}</p>
        <Button text="View Details" className="mt-4 w-full" />
      </div>
    </div>
  );
};

export default ProductCard;
