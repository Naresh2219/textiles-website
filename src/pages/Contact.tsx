import React from "react";
import { Phone, Mail, MapPin } from "lucide-react"; // install lucide-react if not already

const Contact: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-4xl font-extrabold text-slate-800 mb-10 text-center">
        Contact <span className="text-yellow-500">Us</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form className="bg-white shadow-lg rounded-xl p-6 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-yellow-400 text-slate-900 font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-4">
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Get in Touch
            </h3>
            <p className="flex items-center gap-2 text-gray-600 mb-2">
              <MapPin size={18} className="text-yellow-500" /> Hyderabad, India
            </p>
            <p className="flex items-center gap-2 text-gray-600 mb-2">
              <Phone size={18} className="text-yellow-500" /> +91 70954 32678
            </p>
            <p className="flex items-center gap-2 text-gray-600 mb-4">
              <Mail size={18} className="text-yellow-500" /> cn818280@gmail.com
            </p>
          </div>

          {/* Google Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.620227445792!2d78.486671!3d17.385044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99c8f02b4e4f%3A0x93d49c2d9b8dfb1a!2sHyderabad!5e0!3m2!1sen!2sin!4v1694168831234!5m2!1sen!2sin"
            className="w-full h-64 rounded-xl shadow-lg border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
