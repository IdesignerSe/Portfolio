import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Photography from "./pages/Photography";
import Blogg from "./pages/Blogg";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      {/* Fixed Logo */}
      <div className="fixed-logo">
        <img src="./logo_IdesignerSe2.jpg" alt="Logo" />
      </div>

      {/* Navbar always visible */}
      <Navbar />

      {/* Only ONE page renders at a time */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/blogg" element={<Blogg />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer always at bottom */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
