import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, OrbitControls, Stars, Torus, TorusKnot } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function Knot() {
  const ref = useRef<Mesh>(null);
  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.x += dt * 0.15;
    ref.current.rotation.y += dt * 0.2;
  });
  return (
    <TorusKnot ref={ref} args={[1.2, 0.32, 220, 32]}>
      <meshStandardMaterial
        color="#7c5cff"
        emissive="#3a1f9b"
        emissiveIntensity={0.6}
        metalness={0.85}
        roughness={0.18}
      />
    </TorusKnot>
  );
}

function Orbit({ radius, speed, color, scale = 0.25 }: { radius: number; speed: number; color: string; scale?: number }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.position.y = Math.sin(t * 1.4) * 0.5;
  });
  return (
    <Icosahedron ref={ref} args={[scale, 0]}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.2} />
    </Icosahedron>
  );
}

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 1.6]}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#60a5fa" />
        <pointLight position={[-5, -3, -2]} intensity={1.5} color="#c084fc" />
        <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
          <Knot />
        </Float>
        <Float speed={1} rotationIntensity={0.4} floatIntensity={0.8}>
          <Torus args={[2.2, 0.02, 16, 120]} rotation={[Math.PI / 2.2, 0, 0]}>
            <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.8} />
          </Torus>
        </Float>
        <Orbit radius={2.6} speed={0.8} color="#22d3ee" />
        <Orbit radius={3.1} speed={-0.6} color="#a78bfa" scale={0.18} />
        <Orbit radius={2.2} speed={1.2} color="#60a5fa" scale={0.15} />
        <Stars radius={50} depth={20} count={1200} factor={3} fade speed={1} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
      </Suspense>
    </Canvas>
  );
}