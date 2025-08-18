import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-16">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <a href="#" className="mx-2 text-gray-600 hover:text-indigo-600">Facebook</a>
          <a href="#" className="mx-2 text-gray-600 hover:text-indigo-600">Instagram</a>
          <a href="#" className="mx-2 text-gray-600 hover:text-indigo-600">Twitter</a>
        </div>
        <p className="text-gray-500">&copy; 2025 TextileCo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
