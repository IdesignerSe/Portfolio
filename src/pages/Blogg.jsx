import { Link } from "react-router-dom";
import blogPosts from "../data/blogg.json";

export default function Blogg() {
  return (
    <div className="projects-page">
      <h2 className="section-title">Latest Blog Posts</h2>

      <div className="projects-grid">
        {blogPosts.map((post) => (
          <div className="project-card" key={post.id}>

            {/* IMAGE */}
            <img
              src={post.image}
              alt={post.title}
              className="project-card-image"
            />

            {/* TITLE */}
            <h3 className="project-card-title">{post.title}</h3>

            {/* SHORT DESCRIPTION */}
            <p className="project-card-description">
              {post.description}
            </p>

            {/* BUTTONS */}
            <div className="project-card-actions">
              <Link
                to={`/blogg/${post.id}`}
                className="project-details-btn"
              >
                Read More
              </Link>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
