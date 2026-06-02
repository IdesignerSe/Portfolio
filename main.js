// ===============================
// MAIN.JS — BASIC INTERACTIONS
// ===============================

// Smooth scroll to sections
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (!section) return;

    window.scrollTo({
        top: section.offsetTop - 60,
        behavior: "smooth"
    });
}

// Future hook — switch between Classic CV and 3D Experience
// (You can expand this later)
function switchMode(mode) {
    if (mode === "cv") {
        scrollToSection("cv");
    } else if (mode === "3d") {
        scrollToSection("hero");
    }
}

// Optional: Add scroll fade-in animations later
// Optional: Add theme switching later
// Optional: Add project filtering later

console.log("main.js loaded successfully");
