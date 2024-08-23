import React from "react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-bl from-gray-800 to-gray-900 text-white py-16 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-indigo-500">
          Contact Us
        </h2>
        <form
          action="https://formspree.io/f/manwlodr"
          method="POST"
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-2 mt-1 bg-gray-700 text-white rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-2 mt-1 bg-gray-700 text-white rounded-md"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              required
              className="w-full px-4 py-2 mt-1 bg-gray-700 text-white rounded-md"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
