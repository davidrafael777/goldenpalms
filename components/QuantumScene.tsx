/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Torus, Cylinder, Stars, Environment, Box, Line } from '@react-three/drei';
import * as THREE from 'three';

// An elegant floating wireframe of a modern luxury villa
const VillaWireframe = () => {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.rotation.y = t * 0.15;
      ref.current.rotation.x = Math.sin(t * 0.05) * 0.1;
    }
  });

  return (
    <group ref={ref}>
      {/* Pool / Base level */}
      <Box args={[4, 0.1, 4]} position={[0, -1, 0]}>
        <meshStandardMaterial color="#111111" roughness={0.2} metalness={0.9} transparent opacity={0.6} />
      </Box>
      
      {/* Pool water reflection simulation */}
      <Box args={[1.8, 0.1, 1.8]} position={[1, -0.95, 1]}>
        <meshStandardMaterial color="#C5A059" roughness={0.1} metalness={0.95} emissive="#C5A059" emissiveIntensity={0.2} />
      </Box>

      {/* Main architectural volumes (Modern luxury villa wireframe blocks) */}
      <Box args={[2, 1.2, 1.8]} position={[-0.8, -0.4, -0.6]}>
        <meshStandardMaterial color="#C5A059" wireframe roughness={0.1} metalness={1} />
      </Box>
      <Box args={[1.5, 1, 1.5]} position={[0.8, -0.5, 0.4]}>
        <meshStandardMaterial color="#FFFFFF" wireframe roughness={0.2} metalness={0.8} transparent opacity={0.3} />
      </Box>

      {/* Second level block cantilevering */}
      <Box args={[2.2, 0.9, 1.8]} position={[-0.4, 0.65, -0.2]}>
        <meshStandardMaterial color="#C5A059" wireframe roughness={0.1} metalness={1} />
      </Box>

      {/* Columns / Pillars */}
      <Cylinder args={[0.03, 0.03, 1]} position={[1.2, -0.5, -0.8]}>
        <meshStandardMaterial color="#C5A059" metalness={0.9} roughness={0.1} />
      </Cylinder>
      <Cylinder args={[0.03, 0.03, 1]} position={[1.2, -0.5, -0.2]}>
        <meshStandardMaterial color="#C5A059" metalness={0.9} roughness={0.1} />
      </Cylinder>

      {/* Elegant orbit ring */}
      <Torus args={[2.8, 0.015, 8, 120]} rotation={[Math.PI / 6, 0, 0]}>
        <meshStandardMaterial color="#C5A059" emissive="#C5A059" emissiveIntensity={0.3} transparent opacity={0.7} />
      </Torus>
    </group>
  );
};

// Abstract gold coin / asset representing conversion flow
const FloatingAsset = ({ position, delay = 0 }: { position: [number, number, number]; delay?: number }) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime() + delay;
      ref.current.position.y = position[1] + Math.sin(t * 1.5) * 0.15;
      ref.current.rotation.y = t * 0.5;
      ref.current.rotation.x = t * 0.2;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <cylinderGeometry args={[0.4, 0.4, 0.08, 32]} />
      <meshStandardMaterial
        color="#C5A059"
        metalness={0.95}
        roughness={0.1}
        emissive="#C5A059"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

export const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-70 pointer-events-none">
      <Canvas camera={{ position: [0, 0.5, 5.5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#FFFFFF" />
        <pointLight position={[-10, -5, -5]} intensity={0.5} color="#C5A059" />
        <spotLight position={[0, 10, 0]} intensity={2} angle={0.4} penumbra={1} color="#C5A059" />
        
        <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.3}>
          <VillaWireframe />
        </Float>
        
        <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.8}>
          <FloatingAsset position={[-2.8, 1.2, -1.5]} delay={0} />
          <FloatingAsset position={[2.8, -1.0, -1.0]} delay={2.5} />
          <FloatingAsset position={[-2.2, -1.5, -0.5]} delay={4.5} />
        </Float>

        <Environment preset="city" />
        <Stars radius={100} depth={50} count={600} factor={4} saturation={0.5} fade speed={1} />
      </Canvas>
    </div>
  );
};

// Interactive 3D direct channel tunnel scene
export const QuantumComputerScene: React.FC = () => {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.rotation.y = t * 0.1;
    }
  });

  return (
    <div className="w-full h-full absolute inset-0 opacity-80 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={2} color="#C5A059" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />
        <Environment preset="studio" />
        
        <Float rotationIntensity={0.3} floatIntensity={0.2} speed={1.2}>
          <group ref={ref}>
            {/* The Direct Channel Hub */}
            <Cylinder args={[0.8, 0.8, 0.1, 64]} position={[0, 0.8, 0]}>
              <meshStandardMaterial color="#C5A059" metalness={1} roughness={0.1} />
            </Cylinder>
            
            {/* Core server database representation */}
            <Box args={[0.5, 0.5, 0.5]} position={[0, 0.3, 0]}>
              <meshStandardMaterial color="#111111" roughness={0.1} metalness={0.9} />
            </Box>

            {/* Glowing Connection Nodes */}
            <Torus args={[1.2, 0.02, 16, 100]} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <meshStandardMaterial color="#C5A059" emissive="#C5A059" emissiveIntensity={0.8} />
            </Torus>

            {/* Connecting luxury columns */}
            <Cylinder args={[0.02, 0.02, 1.4, 16]} position={[0.6, 0.1, 0]}>
              <meshStandardMaterial color="#FFFFFF" metalness={0.9} roughness={0.2} transparent opacity={0.5} />
            </Cylinder>
            <Cylinder args={[0.02, 0.02, 1.4, 16]} position={[-0.6, 0.1, 0]}>
              <meshStandardMaterial color="#FFFFFF" metalness={0.9} roughness={0.2} transparent opacity={0.5} />
            </Cylinder>
            <Cylinder args={[0.02, 0.02, 1.4, 16]} position={[0, 0.1, 0.6]}>
              <meshStandardMaterial color="#FFFFFF" metalness={0.9} roughness={0.2} transparent opacity={0.5} />
            </Cylinder>
            <Cylinder args={[0.02, 0.02, 1.4, 16]} position={[0, 0.1, -0.6]}>
              <meshStandardMaterial color="#FFFFFF" metalness={0.9} roughness={0.2} transparent opacity={0.5} />
            </Cylinder>

            {/* Shield / Protection ring representing independence */}
            <Torus args={[1.5, 0.04, 16, 64]} position={[0, -0.6, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <meshStandardMaterial color="#C5A059" metalness={0.95} roughness={0.15} />
            </Torus>
            
            {/* Safe Core representing independence */}
            <Box args={[0.3, 0.1, 0.3]} position={[0, -0.6, 0]}>
              <meshStandardMaterial color="#C5A059" emissive="#C5A059" emissiveIntensity={0.4} />
            </Box>
          </group>
        </Float>
      </Canvas>
    </div>
  );
};
