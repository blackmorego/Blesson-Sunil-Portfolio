import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PresentationControls, Text, Float, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import { Layers } from 'lucide-react';

function UILayers({ isExploded }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    
    // Target Z spacing based on isExploded state
    const targetZ = isExploded ? 0.8 : 0;
    
    // Lerp children to their target positions
    const children = groupRef.current.children;
    
    // Base Layer (z: -targetZ * 2)
    children[0].position.z = THREE.MathUtils.lerp(children[0].position.z, -targetZ * 2, delta * 5);
    
    // Skeleton Layer (z: -targetZ)
    children[1].position.z = THREE.MathUtils.lerp(children[1].position.z, -targetZ, delta * 5);
    
    // Typography Layer (z: 0)
    children[2].position.z = THREE.MathUtils.lerp(children[2].position.z, 0, delta * 5);
    
    // Floating Elements (z: targetZ)
    children[3].position.z = THREE.MathUtils.lerp(children[3].position.z, targetZ, delta * 5);
  });

  return (
    <group position={[0, 0, 0]} ref={groupRef}>
      {/* Base Glass Layer (Bottom) */}
      <group position-z={0}>
        <RoundedBox args={[4, 2.5, 0.05]} radius={0.15} smoothness={4}>
          <meshPhysicalMaterial 
            color="#0d111d"
            metalness={0.8}
            roughness={0.2}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transparent={true}
            opacity={0.8}
          />
        </RoundedBox>
        {/* Glow behind base */}
        <mesh position={[0, 0, -0.1]}>
          <planeGeometry args={[4.2, 2.7]} />
          <meshBasicMaterial color="#00f0ff" transparent={true} opacity={0.15} />
        </mesh>
      </group>

      {/* Content Skeleton Layer */}
      <group position-z={0}>
        {/* Header Block */}
        <RoundedBox args={[3.5, 0.3, 0.02]} position={[0, 0.9, 0]} radius={0.05} smoothness={2}>
          <meshBasicMaterial color="#1a2235" />
        </RoundedBox>
        
        {/* Image/Hero Block */}
        <RoundedBox args={[1.5, 1.2, 0.02]} position={[-1, 0, 0]} radius={0.05} smoothness={2}>
          <meshBasicMaterial color="#2d3748" />
        </RoundedBox>

        {/* Text Lines */}
        <RoundedBox args={[1.7, 0.1, 0.02]} position={[0.9, 0.4, 0]} radius={0.02} smoothness={2}>
          <meshBasicMaterial color="#4a5568" />
        </RoundedBox>
        <RoundedBox args={[1.4, 0.1, 0.02]} position={[0.75, 0.2, 0]} radius={0.02} smoothness={2}>
          <meshBasicMaterial color="#4a5568" />
        </RoundedBox>
        <RoundedBox args={[1.7, 0.1, 0.02]} position={[0.9, 0.0, 0]} radius={0.02} smoothness={2}>
          <meshBasicMaterial color="#4a5568" />
        </RoundedBox>
      </group>

      {/* Typography & Highlights Layer */}
      <group position-z={0}>
        <Text
          position={[-1, 0, 0.05]}
          fontSize={0.25}
          color="#00f0ff"
          anchorX="center"
          anchorY="middle"
          fontWeight={800}
        >
          IMAGE
        </Text>
        <Text
          position={[0.9, 0.4, 0.05]}
          fontSize={0.12}
          color="#fff"
          anchorX="center"
          anchorY="middle"
          fontWeight={700}
        >
          Dynamic UI Component
        </Text>
      </group>

      {/* Floating Interactive Elements (Top) */}
      <group position-z={0}>
        {/* Primary Button */}
        <RoundedBox args={[1.7, 0.3, 0.04]} position={[0.9, -0.4, 0]} radius={0.08} smoothness={2}>
          <meshPhysicalMaterial 
            color="#8a2be2"
            emissive="#8a2be2"
            emissiveIntensity={0.5}
            roughness={0.1}
          />
        </RoundedBox>
        <Text
          position={[0.9, -0.4, 0.03]}
          fontSize={0.12}
          color="#fff"
          anchorX="center"
          anchorY="middle"
          fontWeight={800}
        >
          INTERACT
        </Text>
      </group>
    </group>
  );
}

export default function InteractiveUIExploder() {
  const [isExploded, setIsExploded] = useState(false);

  return (
    <section id="ui-exploder" className="section-container" style={{ position: 'relative', zIndex: 10 }}>
      <div className="section-header">
        <div className="badge-pill" style={{ marginBottom: '12px' }}>
          <Layers size={14} />
          <span>UI/UX Anatomy</span>
        </div>
        <h2>Deconstruct the Design</h2>
        <p>Interactive 3D layer exploder. Toggle to view how a flat glassmorphic interface is built with depth, hierarchy, and lighting. Drag to rotate in 3D.</p>
      </div>

      <div 
        className="glass-panel"
        style={{
          height: '500px',
          width: '100%',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid rgba(0, 240, 255, 0.2)',
          boxShadow: 'inset 0 0 50px rgba(0,0,0,0.5)',
        }}
      >
        {/* Controls Overlay */}
        <div style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
          display: 'flex',
          gap: '16px'
        }}>
          <button 
            className="btn-primary"
            onClick={() => setIsExploded(!isExploded)}
            style={{ 
              padding: '12px 24px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              background: isExploded ? 'var(--accent-violet)' : 'var(--accent-cyan)',
              color: '#000',
              fontWeight: 700,
              cursor: 'pointer',
              border: 'none',
              borderRadius: 'var(--radius-md)'
            }}
          >
            <Layers size={18} />
            {isExploded ? 'Collapse Layers' : 'Explode UI'}
          </button>
        </div>

        {/* Instructions Overlay */}
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          zIndex: 20,
          pointerEvents: 'none',
          background: 'rgba(0,0,0,0.4)',
          padding: '8px 12px',
          borderRadius: '8px',
          border: '1px solid var(--border-glass)',
          fontSize: '0.8rem',
          color: 'var(--text-muted)'
        }}>
          <span style={{ display: 'block', marginBottom: '4px' }}>🖱️ Click & Drag to Rotate</span>
          <span style={{ display: 'block' }}>👆 Toggle to Explode</span>
        </div>

        {/* 3D Canvas */}
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#fff" />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#00f0ff" />
          
          <PresentationControls 
            global={false}
            cursor={true}
            snap={true}
            speed={1.5}
            zoom={1}
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            <Float
              speed={2} // Animation speed
              rotationIntensity={0.5} // XYZ rotation intensity
              floatIntensity={0.5} // Up/down float intensity
              floatingRange={[-0.1, 0.1]} // Range of y-axis values the object will float within
            >
              <UILayers isExploded={isExploded} />
            </Float>
          </PresentationControls>
        </Canvas>
      </div>
    </section>
  );
}
