import React from "react";

const ProjectCard = ({ title, main }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col max-w-xs md:max-w-sm lg:max-w-md w-full bg-[#1e2447] shadow-xl shadow-slate-900 rounded-2xl">
      {/* Title */}
      <h3 className="px-4 text-lg sm:text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      {/* Description */}
      <p className="px-4 text-sm md:text-md leading-tight py-2 text-gray-300">
        {main}
      </p>
      {/* Buttons */}
      <div className="mt-2 p-2 md:p-4 flex flex-col md:flex-row gap-3 md:gap-4">
        <button className="w-full md:w-auto text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Demo
        </button>
        <button className="w-full md:w-auto text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Source Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
