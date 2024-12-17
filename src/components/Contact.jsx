import React from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact" className="text-white py-20">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
      <h3 className="text-4xl font-bold text-center mb-12">Connect {" "}
        <span className="bg-gradient-to-r from-purple-500 to-blue-800 text-transparent bg-clip-text">
          Me
        </span></h3>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Contact Information */}
          <div className="flex-1">
          <h3 className="text-4xl font-bold text-center mb-12">Let's{" "}
        <span className="bg-gradient-to-r from-purple-500 to-blue-800 text-transparent bg-clip-text">
          Connect
        </span></h3>
            <p>I'm open to discussing web development projects or partnership opportunities.</p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-purple-400 mr-2" />
              <a href="mailto:youremail@example.com" className="hover:underline">
                pratikshamakde13@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-purple-400 mr-2" />
              <span>+8520</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-purple-400 mr-2" />
              <span>India</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 w-full">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                  focus:border-purple-400"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                  focus:border-purple-400"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                  focus:border-purple-400"
                  rows="5"
                  placeholder="Enter Your Message"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-400 to-blue-500 text-white 
                transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
