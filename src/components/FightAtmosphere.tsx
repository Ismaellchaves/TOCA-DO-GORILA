import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Embers() {
  const points = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const values = new Float32Array(180 * 3);
    for (let i = 0; i < 180; i += 1) {
      values[i * 3] = ((i * 47) % 100) / 10 - 5;
      values[i * 3 + 1] = ((i * 31) % 100) / 10 - 5;
      values[i * 3 + 2] = ((i * 73) % 60) / 10 - 3;
    }
    return values;
  }, []);

  useFrame((state, rawDelta) => {
    const delta = Math.min(rawDelta, 0.05);
    const current = points.current;
    if (!current) return;
    current.rotation.y += delta * 0.025;
    current.rotation.z = Math.sin(state.clock.elapsedTime * 0.18) * 0.025;
    current.position.x += (state.pointer.x * 0.18 - current.position.x) * (1 - Math.exp(-2.5 * delta));
    current.position.y += (state.pointer.y * 0.1 - current.position.y) * (1 - Math.exp(-2.5 * delta));
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#e10600" size={0.028} transparent opacity={0.58} depthWrite={false} />
    </points>
  );
}

export function FightAtmosphere() {
  return (
    <div className="hero-webgl" aria-hidden="true">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 6], fov: 50 }} gl={{ antialias: false, alpha: true }}>
        <Embers />
      </Canvas>
    </div>
  );
}