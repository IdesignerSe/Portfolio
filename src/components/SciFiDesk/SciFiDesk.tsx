import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SciFiDesk from "./SciFiDesk";

export default function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <OrbitControls enableZoom={false} />

      <SciFiDesk />
    </Canvas>
  );
}
