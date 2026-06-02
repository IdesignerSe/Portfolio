// ===============================
// THREE.JS — FLOATING "IDEAS" TEXT
// ===============================

let scene, camera, renderer, textMesh;
let clock = new THREE.Clock();

function initThreeScene() {

    // Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0d0d0d);

    // Camera
    camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        0.1,
        100
    );
    camera.position.set(0, 0, 6);

    // Renderer
    renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById("three-canvas"),
        antialias: true
    });
    renderer.setSize(
        document.querySelector(".hero-3d").clientWidth,
        document.querySelector(".hero-3d").clientHeight
    );
    renderer.setPixelRatio(window.devicePixelRatio);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);

    const directional = new THREE.DirectionalLight(0xffffff, 1);
    directional.position.set(3, 5, 2);
    scene.add(directional);

    // Load Font
    const loader = new THREE.FontLoader();
    loader.load(
        "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
        function (font) {

            const textGeometry = new THREE.TextGeometry("IDEAS", {
                font: font,
                size: 1,
                height: 0.3,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 0.05,
                bevelSize: 0.03,
                bevelSegments: 3
            });

            const textMaterial = new THREE.MeshStandardMaterial({
                color: 0x00aaff,
                metalness: 0.2,
                roughness: 0.3
            });

            textMesh = new THREE.Mesh(textGeometry, textMaterial);

            // Center the text
            textGeometry.computeBoundingBox();
            const centerOffset =
                -0.5 * (textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x);
            textMesh.position.x = centerOffset;

            scene.add(textMesh);
        }
    );

    animate();
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    if (textMesh) {
        const t = clock.getElapsedTime();

        // Slow rotation
        textMesh.rotation.y = t * 0.3;

        // Gentle floating
        textMesh.position.y = Math.sin(t * 1.2) * 0.2;
    }

    renderer.render(scene, camera);
}

// Resize handling
window.addEventListener("resize", () => {
    if (!renderer) return;

    const container = document.querySelector(".hero-3d");

    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);
});

// Initialize scene
initThreeScene();
