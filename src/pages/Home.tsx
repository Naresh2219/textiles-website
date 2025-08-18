import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductCard, { Product } from '../components/ProductCard';
import Button from '../components/Button';

const featuredProducts: Product[] = [
  { id: 1, name: 'Tiles', price: 120, image: '/images/silk-saree.jpg' },
  { id: 2, name: 'Tiles', price: 30, image: '/images/cotton-fabric.jpg' },
  { id: 3, name: 'Tiles', price: 50, image: '/images/wool-shawl.jpg' },
];

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <section className="container mx-auto my-16 px-6">
        <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-8 flex space-x-4">
          <Button text="Shop Now" />
          <Button text="View Collection" className="bg-gray-200 text-gray-700 hover:bg-gray-300" />
        </div>
      </section>
    </div>
  );
};

export default Home;
