import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Custom particles field for the background
const ParticleField = (props) => {
  const ref = useRef();
  
  // Generate random particles in a sphere
  const particles = useMemo(() => {
    const particlesCount = 1500;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    
    const color1 = new THREE.Color('#8352FD'); // Purple
    const color2 = new THREE.Color('#5CE1E6'); // Cyan
    
    for (let i = 0; i < particlesCount; i++) {
      // Position particles in a sphere
      const i3 = i * 3;
      const radius = Math.random() * 2.5 + 0.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
      
      // Color gradient from purple to cyan
      const mixedColor = color1.clone().lerp(color2, Math.random() * 0.8);
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }
    
    return { positions, colors };
  }, []);
  
  useFrame((state) => {
    const { clock } = state;
    const elapsedTime = clock.getElapsedTime();
    
    ref.current.rotation.x = elapsedTime * 0.05;
    ref.current.rotation.y = elapsedTime * 0.075;
  });
  
  return (
    <Points ref={ref} positions={particles.positions} colors={particles.colors} stride={3}>
      <PointMaterial
        transparent
        vertexColors
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

// Main background component
const AnimatedBackground = () => {
  return (
    <>
      <color attach="background" args={['#050816']} />
      <ambientLight intensity={0.5} />
      <ParticleField />
      <fog attach="fog" args={['#050816', 3.5, 7]} />
    </>
  );
};

export default AnimatedBackground;