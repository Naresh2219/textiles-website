import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
          <textarea placeholder="Message" className="w-full p-3 border rounded h-32" />
          <button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">Send Message</button>
        </form>
        <div>
          <p className="mb-2">Address: 123 Textile Street, City, Country</p>
          <p className="mb-2">Phone: +1 234 567 890</p>
          <p className="mb-4">Email: contact@textileco.com</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18..."
            className="w-full h-64 border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
