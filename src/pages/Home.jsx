import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import bloggData from "../data/blogg.json";
import projectsData from "../data/projects.json";
import photographyData from "../data/photography_projects.json";

export default function Home() {
  const [latestBlog, setLatestBlog] = useState(null);
  const [latestProject, setLatestProject] = useState(null);
  const [latestPhotoProject, setLatestPhotoProject] = useState(null);

  useEffect(() => {
    setLatestBlog(bloggData[0]); // latest blog post
    setLatestProject(projectsData[0]); // latest code project
    setLatestPhotoProject(photographyData[0]); // latest photography project
  }, []);

  if (!latestBlog || !latestProject || !latestPhotoProject) return null;

  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <div
        className="home-hero"
        style={{ backgroundImage: `url(${latestBlog.image})` }}
      >
        <div className="hero-overlay">
          <h1 className="hero-title">{latestBlog.title}</h1>
          <p className="hero-text">
            Insights, experiences, and updates from my work in development and photography.
          </p>

          {/* FIXED: Read More navigates to blog detail */}
          <Link to={`/blogg/${latestBlog.id}`} className="hero-btn">
            Read More
          </Link>
        </div>
      </div>

      {/* TWO CARDS SECTION */}
      <div className="home-cards">

        {/* Latest Code Project */}
        <div className="home-card">
          <img src={latestProject.image} alt={latestProject.title} />
          <h2>{latestProject.title}</h2>
          <p>{latestProject.description}</p>

          {/* FIXED: View Project navigates to project detail */}
          <Link to={`/projects/${latestProject.id}`} className="home-btn">
            View Project
          </Link>
        </div>

        {/* Latest Photography Project */}
        <div className="home-card">
          <img src={latestPhotoProject.image} alt={latestPhotoProject.title} />
          <h2>{latestPhotoProject.title}</h2>
          <p>{latestPhotoProject.description}</p>

          {/* FIXED: View Photography navigates to photography detail */}
          <Link to={`/photography/${latestPhotoProject.id}`} className="home-btn">
            View Photography
          </Link>
        </div>

      </div>
    </div>
  );
}
