import { useEffect, useState } from "react";
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
          <button className="hero-btn">Read More</button>
        </div>
      </div>

      {/* TWO CARDS SECTION */}
      <div className="home-cards">

        {/* Latest Code Project */}
        <div className="home-card">
          <img src={latestProject.image} alt={latestProject.title} />
          <h2>{latestProject.title}</h2>
          <p>{latestProject.description}</p>
          <button className="home-btn">View Project</button>
        </div>

        {/* Latest Photography Project */}
        <div className="home-card">
          <img src={latestPhotoProject.image} alt={latestPhotoProject.title} />
          <h2>{latestPhotoProject.title}</h2>
          <p>{latestPhotoProject.description}</p>
          <button className="home-btn">View Photography</button>
        </div>

      </div>
    </div>
  );
}
