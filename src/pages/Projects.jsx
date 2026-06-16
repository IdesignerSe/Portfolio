import { useEffect, useState } from "react";
import projectsData from "../data/projects.json";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div className="projects-page">
      <h1 className="page-heading">Projects</h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} className="project-img" />

            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <button className="project-btn">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
