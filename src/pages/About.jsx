import { useEffect, useState } from "react";
import aboutData from "../data/about.json";

export default function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    setAbout(aboutData);
  }, []);

  if (!about) return null;

  return (
    <div className="about-page">
      <div className="about-header">
        <img
          src={about.profileImage}
          alt={about.name}
          className="about-img"
        />

        <div>
          <h1 className="about-name">{about.name}</h1>
          <h2 className="about-title">{about.title}</h2>
        </div>
      </div>

      <p className="about-description">{about.description}</p>

      <h3 className="about-subheading">Skills</h3>
      <ul className="about-skills">
        {about.skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
