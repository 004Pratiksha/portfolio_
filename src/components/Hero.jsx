import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className=" text-white flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center px-6 md:px-12 lg:px-24 py-12 lg:py-24">
      {/* Left Section: Text */}
      <div className="text-center lg:text-left lg:w-1/2">
        <p className="text-lg mb-4">Hey, I'm Pratiksha!</p>
        <h1 className="text-5xl md:text-5xl font-bold leading-tight">
          <span className="text-purple-600">Front</span>end<br /> Developer
        </h1>
        <p className="text-gray-400 mt-4 mb-6 max-w-md mx-auto lg:mx-0">
          A Developer passionate about creating interactive applications and experiences on the web.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Scroll Link Button */}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="bg-gradient-to-r from-purple-400 to-blue-500 text-white 
            transform transition-transform duration-300 hover:scale-105 px-6 py-3 rounded-full cursor-pointer"
          >
            Connect With Me
          </Link>
          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white 
            transform transition-transform duration-300 hover:scale-105 px-6 py-3 rounded-full"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;