import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Photography from "./pages/Photography";
import Blogg from "./pages/Blogg";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <div className="fixed-logo">
        <img
          src="./logo_IdesignerSe2.jpg"
          alt=""
        />
      </div>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Projects */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />

        {/* Photography */}
        <Route path="/photography" element={<Photography />} />

        {/* Blog */}
        <Route path="/blogg" element={<Blogg />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
