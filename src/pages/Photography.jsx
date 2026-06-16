import { useEffect, useState } from "react";
import carouselData from "../data/photography_carousel.json";
import projectsData from "../data/photography_projects.json";

export default function Photography() {
  const [carousel, setCarousel] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setCarousel(carouselData);
    setProjects(projectsData);
  }, []);

  return (
    <div className="photography-page">

      {/* Carousel Section */}
      <div className="carousel-container">
        {carousel.map((item) => (
          <div className="carousel-slide" key={item.id}>
            <img src={item.image} alt={`Photo ${item.id}`} />
          </div>
        ))}
      </div>

      {/* Projects Section */}
      <h2 className="photo-section-title">Photography Projects</h2>

      <div className="photo-projects-grid">
        {projects.map((project) => (
          <div className="photo-project-card" key={project.id}>
            <a href={project.link} target="_blank">
              <img src={project.image} alt={project.title} />
            </a>

            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
