import { useParams, Link } from "react-router-dom";
import photographyProjects from "../data/photography_projects.json";

export default function PhotographyDetail() {
  const { id } = useParams();
  const project = photographyProjects.find((p) => p.id === Number(id));

  if (!project) {
    return <h2>Photography project not found</h2>;
  }

  return (
    <div className="project-detail-container">

      {/* HERO IMAGE */}
      <div className="project-detail-hero">
        <img
          src={project.image}
          alt={project.title}
          className="project-detail-image"
        />
      </div>

      {/* TITLE */}
      <h1 className="project-detail-title">{project.title}</h1>

      {/* LONG CONTENT PARAGRAPH */}
      <p className="project-detail-description">
        {project.content}
      </p>

      {/* BUTTONS */}
      <div className="project-detail-buttons">

        {/* OPTIONAL GALLERY / INSTAGRAM LINK */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            className="project-detail-live-btn"
          >
            View Gallery
          </a>
        )}

        {/* BACK BUTTON */}
        <Link to="/photography" className="project-detail-back-btn">
          Back to Photography
        </Link>

      </div>
    </div>
  );
}
