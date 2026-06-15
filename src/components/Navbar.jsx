import "./global.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">Portfolio</div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#photography">Photography</a></li>
        <li><a href="#blogg">Blogg</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
