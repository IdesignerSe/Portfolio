import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">Portfolio</div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span className={open ? "bar open" : "bar"}></span>
        <span className={open ? "bar open" : "bar"}></span>
        <span className={open ? "bar open" : "bar"}></span>
      </div>

      {/* Mobile Menu */}
      <ul className={open ? "nav-links mobile-open" : "nav-links"}>
        <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setOpen(false)}>About me</Link></li>
        <li><Link to="/projects" onClick={() => setOpen(false)}>Projects</Link></li>
        <li><Link to="/photography" onClick={() => setOpen(false)}>Photography</Link></li>
        <li><Link to="/blogg" onClick={() => setOpen(false)}>Blogg</Link></li>
        <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}
