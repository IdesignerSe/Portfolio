import { useParams, Link } from "react-router-dom";
import blogPosts from "../data/blogg.json";

export default function BlogDetail() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return <h2>Blog post not found</h2>;
  }

  return (
    <div className="project-detail-container">

      {/* HERO IMAGE */}
      <div className="project-detail-hero">
        <img
          src={post.image}
          alt={post.title}
          className="project-detail-image"
        />
      </div>

      {/* TITLE */}
      <h1 className="project-detail-title">{post.title}</h1>

      {/* FULL CONTENT */}
      <p className="project-detail-description">
        {post.content}
      </p>

      {/* BACK BUTTON */}
      <div className="project-detail-buttons">
        <Link to="/blogg" className="project-detail-back-btn">
          Back to Blog
        </Link>
      </div>

    </div>
  );
}
