import React from "react";
import TurtleLayout from "../components/TurtleLayout";
import projectsData from "../projectsData";
import './Projects.css';

function Projects() {
  const reversedProjectsData = [...projectsData].reverse();
  const projects = reversedProjectsData.map(project => {
    return (
      <TurtleLayout
        key={project.id}
        title={project.title}
        text={project.text}
        githubHref={project.githubHref}
        linkHref={project.linkHref}
      />
    );
  });

  return (
    <div className="turtle-layout-container">
      {projects}
    </div>
  );
}

export default Projects;