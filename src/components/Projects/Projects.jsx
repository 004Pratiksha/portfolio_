import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="To-do-list"
          main="A simple and intuitive task management app to organize daily activities with features like adding, editing, and deleting tasks."
        />
        <ProjectCard
          title="Spotify Clone"
          main="A music streaming web app replicating Spotify's UI, featuring playlist creation, song playback, and responsive design."
        />
        <ProjectCard
          title="Personal Portfolio"
          main="A personal portfolio showcasing my skills, projects, and experience as a web developer, designed to highlight creativity and technical expertise."
        />
        <ProjectCard
          title="Weather website"
          main="A dynamic weather app that provides real-time weather updates, forecasts, and location-based temperature details using APIs."
        />
      </div>
    </div>
  );
};

export default Projects;