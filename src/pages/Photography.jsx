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
        {projects.map((photoproject) => (
          <div className="photo-project-card" key={photoproject.id}>
            <a href={photoproject.link} target="_blank">
              <img src={photoproject.image} alt={photoproject.title} />
            </a>

            <h3>{photoproject.title}</h3>
            <p>{photoproject.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
