📸 Portfolio — React + Vite + GitHub Pages
A modern, fast, and fully responsive portfolio website built with React, Vite, and React Router, featuring dynamic content loaded from JSON files.
The site includes pages for Projects, Photography, Blog, About, and Contact, each with detail views powered by route parameters.

Deployed on GitHub Pages with a custom base path:
https://idesignerse.github.io/Portfolio/

🚀 Features
🔹 Fast & Lightweight
Built with Vite, providing instant hot‑reload and optimized production builds.

🔹 Dynamic Content
All Projects, Photography items, and Blog posts are loaded from JSON files:

src/data/projects.json
src/data/photography_projects.json
src/data/photography_carousel.json
src/data/blogg.json

🔹 Detail Pages
Each item has its own detail page using React Router:

/projects/:id

/photography/:id

/blogg/:id

🔹 Responsive Layout
Fully responsive design with a fixed logo, navbar, and footer.

🔹 GitHub Pages Deployment
Configured with:

BrowserRouter basename="/Portfolio"

vite.config.js → base: "/Portfolio/"

Ensures correct routing in production.

📁 Folder Structure

```text

public/
│── logo_IdesignerSe2.jpg
└── images/
    ├── about/
    │   └── profile1.jpg
    ├── blogg/
    │   ├── blog1.jpg
    │   ├── blog2.jpg
    │   └── blog3.jpg
    ├── photography/
    │   ├── photoproject/
    │   │   ├── project1.jpg
    │   │   ├── project2.jpg
    │   │   └── project3.jpg
    │   ├── carousel/
    │   │   ├── photo1.jpg
    │   │   ├── photo2.jpg
    │   │   ├── photo3.jpg
    │   │   ├── photo4.jpg
    │   │   ├── photo5.jpg
    │   │   └── photo6.jpg
    │   └── default.jpg
    ├── projects-img/
    │   ├── project1.jpg
    │   ├── project2.jpg
    │   └── project3.jpg
    └── hero.jpg

```

🔧 Installation & Setup
1. Install dependencies
npm install

2. Run development server
npm run dev

Local dev URL (because of base path):
http://localhost:5173/Portfolio/

🛠 Build & Deploy
npm run build

🛠 Build & Deploy
npm run deploy

🌐 Routing Configuration
App.jsx
<BrowserRouter basename="/Portfolio">

vite.config.js:

```text

export default defineConfig({
  base: "/Portfolio/",
});

```

Image paths in JSON
All images use absolute paths with the base prefix:
"/Portfolio/images/.../file.jpg"

This ensures images load correctly in both dev and production.

📬 Contact
This portfolio includes a dedicated contact page with a form and social links.

📄 License
This project is open for personal use, learning, and portfolio inspiration.