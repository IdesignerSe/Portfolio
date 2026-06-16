import { useParams, Link } from "react-router-dom";
import projects from "../data/projects.json";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <h2>Project not found</h2>;
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
        <a
          href={project.link}
          target="_blank"
          className="project-detail-live-btn"
        >
          Live Demo
        </a>

        <Link to="/projects" className="project-detail-back-btn">
          Back to Projects
        </Link>
      </div>

    </div>
  );
}
