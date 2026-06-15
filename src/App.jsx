import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Photography from "./pages/Photography";
import Blogg from "./pages/Blogg";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/blogg" element={<Blogg />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
