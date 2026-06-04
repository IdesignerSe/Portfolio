import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// TypeScript can't find declaration for the JS component; silence the error
// @ts-ignore
import SciFiDesk from "./components/SciFiDesk/SciFiDesk";

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
