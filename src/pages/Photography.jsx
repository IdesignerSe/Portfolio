import { Link } from "react-router-dom";
import photographyProjects from "../data/photography_projects.json";

export default function Photography() {
  return (
    <div className="projects-page">
      <h2 className="section-title">Photography Projects</h2>

      <div className="projects-grid">
        {photographyProjects.map((project) => (
          <div className="project-card" key={project.id}>
            
            {/* IMAGE */}
            <img
              src={project.image}
              alt={project.title}
              className="project-card-image"
            />

            {/* TITLE */}
            <h3 className="project-card-title">{project.title}</h3>

            {/* SHORT DESCRIPTION */}
            <p className="project-card-description">
              {project.description}
            </p>

            {/* BUTTONS */}
            <div className="project-card-actions">

              {/* OPTIONAL GALLERY LINK */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  className="project-live-btn"
                >
                  Gallery
                </a>
              )}

              {/* VIEW DETAILS */}
              <Link
                to={`/photography/${project.id}`}
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
