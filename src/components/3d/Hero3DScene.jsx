import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls, Sphere, Torus, Octahedron, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

// Fallback pure CSS 3D glowing magical cyber orb
const Fallback3DOrb = () => (
  <div className="relative w-72 h-72 md:w-88 md:h-88 flex items-center justify-center">
    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 blur-3xl opacity-60 animate-pulse-glow" />
    <div className="relative w-52 h-52 rounded-full border-2 border-cyan-400/70 bg-gradient-to-br from-cyan-950/60 via-purple-950/60 to-slate-950/90 backdrop-blur-md flex items-center justify-center shadow-[0_0_60px_rgba(6,182,212,0.6)] animate-float">
      <div className="w-36 h-36 rounded-full border border-purple-400/60 flex items-center justify-center animate-spin-slow">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-400 via-pink-400 to-amber-300 shadow-[0_0_35px_#00f2fe]" />
      </div>
    </div>
  </div>
);

// Magical Cyber Core Inside 3D Canvas
const MagicalCore = () => {
  const sphereRef = useRef();
  const octaRef = useRef();
  const innerRingRef = useRef();
  const outerRingRef = useRef();
  const cosmicRingRef = useRef();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (sphereRef.current) {
      sphereRef.current.rotation.x = t * 0.35;
      sphereRef.current.rotation.y = t * 0.45;
    }
    if (octaRef.current) {
      octaRef.current.rotation.x = -t * 0.4;
      octaRef.current.rotation.z = t * 0.5;
    }
    if (innerRingRef.current) {
      innerRingRef.current.rotation.x = Math.sin(t * 0.6) * 0.5 + t * 0.2;
      innerRingRef.current.rotation.y = t * 0.35;
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = t * 0.25;
      outerRingRef.current.rotation.x = Math.cos(t * 0.5) * 0.4 + t * 0.15;
    }
    if (cosmicRingRef.current) {
      cosmicRingRef.current.rotation.y = -t * 0.3;
      cosmicRingRef.current.rotation.z = t * 0.2;
    }
  });

  return (
    <Float speed={2.8} rotationIntensity={1.4} floatIntensity={2.0}>
      {/* Central Distorted Glowing Core */}
      <Sphere ref={sphereRef} args={[1.05, 64, 64]} scale={1.05}>
        <MeshDistortMaterial
          color="#00f2fe"
          emissive="#7209b7"
          emissiveIntensity={0.8}
          roughness={0.1}
          metalness={0.9}
          distort={0.42}
          speed={2.6}
          wireframe={false}
        />
      </Sphere>

      {/* Floating Wireframe Octahedron Shell */}
      <Octahedron ref={octaRef} args={[1.45, 0]}>
        <meshStandardMaterial
          color="#ffd166"
          emissive="#ffb703"
          emissiveIntensity={0.9}
          wireframe={true}
        />
      </Octahedron>

      {/* Inner Glowing Torus Arc */}
      <Torus ref={innerRingRef} args={[1.9, 0.035, 16, 100]}>
        <meshStandardMaterial
          color="#f72585"
          emissive="#f72585"
          emissiveIntensity={1.0}
        />
      </Torus>

      {/* Outer Arcane Cyber Ring */}
      <Torus ref={outerRingRef} args={[2.35, 0.025, 16, 100]}>
        <meshStandardMaterial
          color="#4cc9f0"
          emissive="#4cc9f0"
          emissiveIntensity={0.9}
        />
      </Torus>

      {/* Tilted Cosmic Orbit */}
      <Torus ref={cosmicRingRef} args={[2.65, 0.02, 16, 100]} rotation={[Math.PI / 3, 0, 0]}>
        <meshStandardMaterial
          color="#a855f7"
          emissive="#9333ea"
          emissiveIntensity={0.8}
          wireframe={true}
        />
      </Torus>

      {/* Stardust Constellation Particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={90}
            array={new Float32Array(Array.from({ length: 270 }, () => (Math.random() - 0.5) * 6.5))}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.075}
          color="#00f2fe"
          transparent
          opacity={0.85}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </Float>
  );
};

// Error boundary for WebGL
class SceneErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <Fallback3DOrb />;
    }
    return this.props.children;
  }
}

export const Hero3DScene = () => {
  const [isClient, setIsClient] = useState(false);
  const [webGLAvailable, setWebGLAvailable] = useState(true);

  useEffect(() => {
    setIsClient(true);
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setWebGLAvailable(false);
    } catch {
      setWebGLAvailable(false);
    }
  }, []);

  if (!isClient || !webGLAvailable) {
    return <Fallback3DOrb />;
  }

  return (
    <div className="relative w-full h-[340px] sm:h-[400px] md:h-[480px] lg:h-[520px] flex items-center justify-center">
      {/* Background Soft Glows */}
      <div className="absolute w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute w-64 h-64 rounded-full bg-purple-600/25 blur-3xl pointer-events-none" />
      <div className="absolute w-48 h-48 rounded-full bg-pink-500/20 blur-3xl pointer-events-none" />

      <SceneErrorBoundary>
        <Suspense fallback={<Fallback3DOrb />}>
          <Canvas
            camera={{ position: [0, 0, 5.2], fov: 45 }}
            gl={{ alpha: true, antialias: true }}
            className="w-full h-full cursor-grab active:cursor-grabbing"
          >
            <ambientLight intensity={0.8} />
            <directionalLight position={[10, 10, 5]} intensity={1.8} color="#ffffff" />
            <pointLight position={[-10, -10, -5]} intensity={1.5} color="#f72585" />
            <pointLight position={[5, 5, 5]} intensity={1.8} color="#00f2fe" />
            <pointLight position={[0, -5, 5]} intensity={1.2} color="#ffd166" />

            <MagicalCore />

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate={false}
              maxPolarAngle={Math.PI / 1.4}
              minPolarAngle={Math.PI / 3.2}
            />
          </Canvas>
        </Suspense>
      </SceneErrorBoundary>
    </div>
  );
};
