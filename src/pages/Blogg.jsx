import { useEffect, useState } from "react";
import bloggData from "../data/blogg.json";

export default function Blogg() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(bloggData);
  }, []);

  return (
    <div className="blogg-page">
      <h1 className="page-heading">Blogg</h1>

      <div className="blogg-grid">
        {posts.map((post) => (
          <div className="blogg-card" key={post.id}>
            <img src={post.image} alt={post.title} className="blogg-img" />

            <div className="blogg-content">
              <h2>{post.title}</h2>
              <p className="blogg-date">{post.date}</p>
              <p>{post.description}</p>

              <button className="blogg-btn">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
