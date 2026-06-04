 import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function SciFiDesk() {
  const deskRef = useRef();

  useFrame(() => {
    deskRef.current.rotation.y += 0.003;
  });

  return (
    <group ref={deskRef}>
      {/* Desk base */}
      <mesh position={[0, -1, 0]}>
        <boxGeometry args={[3, 0.2, 1.5]} />
        <meshStandardMaterial
          color="#0a0a0f"
          emissive="#1a1aff"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Hologram projector */}
      <mesh position={[0, -0.8, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.1, 32]} />
        <meshStandardMaterial
          color="#111"
          emissive="#00aaff"
          emissiveIntensity={1}
        />
      </mesh>
    </group>
  );
}

