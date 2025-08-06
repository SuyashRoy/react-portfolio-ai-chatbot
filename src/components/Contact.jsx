import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <form action="mailto:your-email@example.com" method="post" enctype="text/plain">
          <input type="email" name="email" placeholder="Your Email" className="p-3 w-full max-w-md mb-4 rounded-lg" />
          <textarea name="message" placeholder="Your Message" className="p-3 w-full max-w-md mb-4 rounded-lg"></textarea>
          <button type="submit" className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
