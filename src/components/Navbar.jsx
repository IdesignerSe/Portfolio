import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="navbar desktop-nav">
        <div className="nav-logo">Idesigner</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/photography">Photography</Link></li>
          <li><Link to="/blogg">Blogg</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Mobile Floating Button */}
      <div className="floating-menu-btn" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* Mobile Menu */}
      <div className={open ? "floating-menu open" : "floating-menu"}>
        <Link to="/" onClick={() => setOpen(false)}>🏠 Home</Link>
        <Link to="/about" onClick={() => setOpen(false)}>👤 About</Link>
        <Link to="/projects" onClick={() => setOpen(false)}>💼 Projects</Link>
        <Link to="/photography" onClick={() => setOpen(false)}>📷 Photography</Link>
        <Link to="/blogg" onClick={() => setOpen(false)}>📝 Blogg</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>📨 Contact</Link>
      </div>
    </>
  );
}
