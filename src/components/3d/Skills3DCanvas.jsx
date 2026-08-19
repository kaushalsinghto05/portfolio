import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, Icosahedron, Torus, Octahedron, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const techNodes = [
  { name: 'React', pos: [-2.2, 1.2, 0], color: '#00f2fe', shape: 'icosa' },
  { name: 'Python', pos: [2.2, 1.4, -0.5], color: '#ffd166', shape: 'octa' },
  { name: 'Node.js', pos: [-1.8, -1.2, 0.5], color: '#06d6a0', shape: 'sphere' },
  { name: 'YOLO / CV', pos: [2.0, -1.0, 0], color: '#f72585', shape: 'octa' },
  { name: 'OpenAI', pos: [0, 2.0, 0.5], color: '#4cc9f0', shape: 'icosa' },
  { name: 'C++', pos: [0, -2.0, -0.5], color: '#9d4edd', shape: 'sphere' },
];

const ConstellationGalaxy = () => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Cyber Sun */}
      <Sphere args={[0.7, 32, 32]}>
        <meshStandardMaterial
          color="#9d4edd"
          emissive="#7209b7"
          emissiveIntensity={1}
          wireframe={true}
        />
      </Sphere>

      {/* Outer Orbit Rings */}
      <Torus args={[2.8, 0.02, 16, 100]} rotation={[Math.PI / 3, 0, 0]}>
        <meshBasicMaterial color="#00f2fe" transparent opacity={0.6} />
      </Torus>
      <Torus args={[3.2, 0.015, 16, 100]} rotation={[-Math.PI / 4, 0, 0]}>
        <meshBasicMaterial color="#f72585" transparent opacity={0.5} />
      </Torus>

      {/* Orbiting Tech Nodes */}
      {techNodes.map((node, i) => (
        <Float key={node.name} speed={2} rotationIntensity={1} floatIntensity={1.5}>
          <group position={node.pos}>
            {node.shape === 'icosa' && (
              <Icosahedron args={[0.35, 0]}>
                <meshStandardMaterial
                  color={node.color}
                  emissive={node.color}
                  emissiveIntensity={0.8}
                />
              </Icosahedron>
            )}
            {node.shape === 'octa' && (
              <Octahedron args={[0.38, 0]}>
                <meshStandardMaterial
                  color={node.color}
                  emissive={node.color}
                  emissiveIntensity={0.8}
                />
              </Octahedron>
            )}
            {node.shape === 'sphere' && (
              <Sphere args={[0.32, 16, 16]}>
                <meshStandardMaterial
                  color={node.color}
                  emissive={node.color}
                  emissiveIntensity={0.8}
                />
              </Sphere>
            )}

            {/* Glowing Text Label */}
            <Text
              position={[0, 0.6, 0]}
              fontSize={0.28}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
            >
              {node.name}
            </Text>
          </group>
        </Float>
      ))}

      {/* Background Star Points */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={120}
            array={new Float32Array(Array.from({ length: 360 }, () => (Math.random() - 0.5) * 8))}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.06} color="#00f2fe" transparent opacity={0.8} />
      </points>
    </group>
  );
};

export const Skills3DCanvas = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="w-full h-64 sm:h-80 md:h-96 relative flex items-center justify-center my-6">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-900/10 via-cyan-900/10 to-pink-900/10 backdrop-blur-sm border border-white/5" />
      <Suspense fallback={<div className="text-xs font-mono text-cyan-400">Loading 3D Galaxy...</div>}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          gl={{ alpha: true, antialias: true }}
          className="w-full h-full cursor-grab active:cursor-grabbing"
        >
          <ambientLight intensity={0.9} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f2fe" />
          <pointLight position={[-10, -10, -10]} intensity={1.5} color="#f72585" />
          <ConstellationGalaxy />
        </Canvas>
      </Suspense>
    </div>
  );
};
