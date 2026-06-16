import { Link } from "react-router-dom";
import projects from "../data/projects.json";

export default function Projects() {
  return (
    <div className="projects-page">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img
              src={project.image}
              alt={project.title}
              className="project-card-image"
            />

            <h3 className="project-card-title">{project.title}</h3>

            <p className="project-card-description">
              {project.description}
            </p>

            <div className="project-card-actions">
              <a
                href={project.link}
                target="_blank"
                className="project-live-btn"
              >
                Live Demo
              </a>

              <Link
                to={`/projects/${project.id}`}
                className="project-details-btn"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
