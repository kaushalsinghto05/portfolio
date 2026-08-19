import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls, Sphere, Torus, Octahedron, Box, Cylinder, Ring } from '@react-three/drei';
import * as THREE from 'three';
import { playClickSound, playHoverSound } from '../../utils/soundEffects';

// 1. AI & Neural Network Mode Component
const NeuralMeshCore = () => {
  const coreRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.x = t * 0.4;
      coreRef.current.rotation.y = t * 0.55;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = Math.sin(t * 0.5) * 0.6 + t * 0.3;
      ring1Ref.current.rotation.y = t * 0.4;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.35;
      ring2Ref.current.rotation.x = Math.cos(t * 0.4) * 0.5;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.y = t * 0.25;
      ring3Ref.current.rotation.z = t * 0.2;
    }
  });

  return (
    <Float speed={2.8} rotationIntensity={1.3} floatIntensity={1.8}>
      {/* Central Synaptic Nucleus */}
      <Sphere ref={coreRef} args={[1.08, 64, 64]} scale={1.08}>
        <MeshDistortMaterial
          color="#9d4edd"
          emissive="#f72585"
          emissiveIntensity={0.8}
          roughness={0.12}
          metalness={0.9}
          distort={0.45}
          speed={3.2}
        />
      </Sphere>

      {/* Outer Floating Neural Cage */}
      <Octahedron args={[1.5, 0]}>
        <meshStandardMaterial
          color="#00f2fe"
          emissive="#00f2fe"
          emissiveIntensity={0.7}
          wireframe={true}
        />
      </Octahedron>

      {/* Orbiting Synapse Rings */}
      <Torus ref={ring1Ref} args={[1.95, 0.035, 16, 100]}>
        <meshStandardMaterial color="#f72585" emissive="#f72585" emissiveIntensity={0.9} />
      </Torus>

      <Torus ref={ring2Ref} args={[2.3, 0.025, 16, 100]} rotation={[Math.PI / 4, 0, 0]}>
        <meshStandardMaterial color="#4cc9f0" emissive="#4cc9f0" emissiveIntensity={0.8} />
      </Torus>

      <Torus ref={ring3Ref} args={[2.65, 0.02, 16, 100]} rotation={[0, Math.PI / 3, 0]}>
        <meshStandardMaterial color="#ffd166" emissive="#ffb703" emissiveIntensity={0.9} wireframe />
      </Torus>

      {/* Orbiting Synaptic Sparks */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={110}
            array={new Float32Array(Array.from({ length: 330 }, () => (Math.random() - 0.5) * 6.5))}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color="#f72585"
          transparent
          opacity={0.85}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </Float>
  );
};

// 2. Full-Stack Web Matrix Mode Component
const WebMatrixCore = () => {
  const latticeRef = useRef();
  const dbTopRef = useRef();
  const dbBottomRef = useRef();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (latticeRef.current) {
      latticeRef.current.rotation.y = t * 0.45;
      latticeRef.current.rotation.x = Math.sin(t * 0.3) * 0.3;
    }
    if (dbTopRef.current) {
      dbTopRef.current.rotation.y = -t * 0.5;
    }
    if (dbBottomRef.current) {
      dbBottomRef.current.rotation.y = t * 0.5;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.6}>
      {/* Central Architecture Cube Lattice */}
      <group ref={latticeRef}>
        <Box args={[1.5, 1.5, 1.5]}>
          <meshStandardMaterial
            color="#00f2fe"
            emissive="#00f2fe"
            emissiveIntensity={0.8}
            wireframe={true}
          />
        </Box>
        <Box args={[1.0, 1.0, 1.0]}>
          <MeshDistortMaterial
            color="#4cc9f0"
            emissive="#0284c7"
            emissiveIntensity={0.7}
            distort={0.25}
            speed={2}
          />
        </Box>
      </group>

      {/* Database Cylinders Floating Top & Bottom */}
      <group ref={dbTopRef} position={[0, 1.6, 0]}>
        <Cylinder args={[0.6, 0.6, 0.25, 32]}>
          <meshStandardMaterial color="#06d6a0" emissive="#06d6a0" emissiveIntensity={0.8} />
        </Cylinder>
      </group>

      <group ref={dbBottomRef} position={[0, -1.6, 0]}>
        <Cylinder args={[0.6, 0.6, 0.25, 32]}>
          <meshStandardMaterial color="#06d6a0" emissive="#06d6a0" emissiveIntensity={0.8} />
        </Cylinder>
      </group>

      {/* API Gateway Ring */}
      <Torus args={[2.2, 0.03, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#00f2fe" emissive="#00f2fe" emissiveIntensity={0.9} />
      </Torus>

      {/* Data Packets */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={90}
            array={new Float32Array(Array.from({ length: 270 }, () => (Math.random() - 0.5) * 6))}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.075}
          color="#06d6a0"
          transparent
          opacity={0.85}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </Float>
  );
};

// 3. Vision & Security Shield Mode Component
const VisionShieldCore = () => {
  const radarRef = useRef();
  const scanRingRef = useRef();
  const prismRef = useRef();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (radarRef.current) {
      radarRef.current.rotation.z = t * 0.8;
    }
    if (scanRingRef.current) {
      scanRingRef.current.rotation.x = t * 0.45;
      scanRingRef.current.rotation.y = t * 0.6;
    }
    if (prismRef.current) {
      prismRef.current.rotation.y = -t * 0.5;
      prismRef.current.rotation.x = Math.sin(t * 0.4) * 0.3;
    }
  });

  return (
    <Float speed={3.0} rotationIntensity={1.4} floatIntensity={1.8}>
      {/* Central Prism Laser Lens */}
      <Octahedron ref={prismRef} args={[1.25, 0]}>
        <MeshDistortMaterial
          color="#ffb703"
          emissive="#fb8500"
          emissiveIntensity={0.9}
          roughness={0.1}
          metalness={0.85}
          distort={0.3}
          speed={3}
        />
      </Octahedron>

      {/* Concentric Radar Sweeping Rings */}
      <group ref={radarRef}>
        <Ring args={[1.7, 1.74, 64]}>
          <meshBasicMaterial color="#00f2fe" side={THREE.DoubleSide} transparent opacity={0.7} />
        </Ring>
        <Ring args={[2.1, 2.13, 64]}>
          <meshBasicMaterial color="#fb8500" side={THREE.DoubleSide} transparent opacity={0.6} />
        </Ring>
      </group>

      {/* Outer 3D Gyroscope Shield */}
      <Torus ref={scanRingRef} args={[2.4, 0.035, 16, 100]}>
        <meshStandardMaterial color="#00f2fe" emissive="#00f2fe" emissiveIntensity={0.9} />
      </Torus>

      {/* Radar Target Points */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={80}
            array={new Float32Array(Array.from({ length: 240 }, () => (Math.random() - 0.5) * 5.5))}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color="#ffb703"
          transparent
          opacity={0.9}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </Float>
  );
};

// Fallback CSS Orb
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
  const [active3DMode, setActive3DMode] = useState('ai'); // 'ai' | 'web' | 'vision'

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

  const handleModeSwitch = (mode) => {
    setActive3DMode(mode);
    playClickSound();
  };

  if (!isClient || !webGLAvailable) {
    return <Fallback3DOrb />;
  }

  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      {/* 3D Canvas Viewport */}
      <div className="relative w-full h-[320px] sm:h-[380px] md:h-[450px] lg:h-[490px] flex items-center justify-center">
        {/* Soft Background Glows */}
        <div className={`absolute w-80 h-80 rounded-full blur-3xl pointer-events-none transition-all duration-700 ${
          active3DMode === 'ai'
            ? 'bg-purple-600/25'
            : active3DMode === 'web'
            ? 'bg-cyan-500/25'
            : 'bg-amber-500/25'
        }`} />

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

              {active3DMode === 'ai' && <NeuralMeshCore />}
              {active3DMode === 'web' && <WebMatrixCore />}
              {active3DMode === 'vision' && <VisionShieldCore />}

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

      {/* Meaningful 3D Mode Switcher Controller */}
      <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-900/90 border border-white/10 backdrop-blur-xl shadow-lg mt-2 relative z-20">
        <button
          onClick={() => handleModeSwitch('ai')}
          onMouseEnter={playHoverSound}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all duration-300 ${
            active3DMode === 'ai'
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-[0_0_15px_rgba(157,78,221,0.5)] scale-105'
              : 'text-slate-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <span>🧠 AI Neural Net</span>
        </button>

        <button
          onClick={() => handleModeSwitch('web')}
          onMouseEnter={playHoverSound}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all duration-300 ${
            active3DMode === 'web'
              ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.5)] scale-105'
              : 'text-slate-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <span>🌐 Web Matrix</span>
        </button>

        <button
          onClick={() => handleModeSwitch('vision')}
          onMouseEnter={playHoverSound}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all duration-300 ${
            active3DMode === 'vision'
              ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.5)] scale-105'
              : 'text-slate-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <span>👁️ Vision Shield</span>
        </button>
      </div>
    </div>
  );
};
