import React, { useState } from 'react';
import ProductCard, { Product } from '../components/ProductCard';
import Filter from '../components/Filter';

const allProducts: Product[] = [
  { id: 1, name: 'Silk Saree', price: 120, image: '/images/silk-saree.jpg' },
  { id: 2, name: 'Cotton Fabric', price: 30, image: '/images/cotton-fabric.jpg' },
  { id: 3, name: 'Wool Shawl', price: 50, image: '/images/wool-shawl.jpg' },
];

const Products: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6">Products</h2>
      <Filter />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
