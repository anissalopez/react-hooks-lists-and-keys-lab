import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  
  const projectObject = projects.map((project) => {
    return (
      <ProjectItem name = {project.name} about = {project.about} technologies = {project.technologies} key = {project.id} />
    )
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectObject}</div>
    </div>
  );
}

export default ProjectList;
