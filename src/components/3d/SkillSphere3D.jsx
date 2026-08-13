import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, OrbitControls } from '@react-three/drei';

function SkillBadge3D({ word, position, color }) {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.lookAt(state.camera.position);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1} position={position}>
      <group ref={ref}>
        <mesh>
          <planeGeometry args={[1.6, 0.5]} />
          <meshBasicMaterial color="#0f172a" transparent opacity={0.8} />
        </mesh>
        <Text
          position={[0, 0, 0.05]}
          fontSize={0.22}
          color={color}
          anchorX="center"
          anchorY="middle"
          fontWeight="bold"
        >
          {word}
        </Text>
      </group>
    </Float>
  );
}

export default function SkillSphere3D() {
  const skillNodes = [
    { word: 'Figma', pos: [0, 1.8, 0], color: '#00f0ff' },
    { word: 'Adobe XD', pos: [1.6, 1.0, 1], color: '#ff2a85' },
    { word: 'User Research', pos: [-1.8, 0.8, 1], color: '#8a2be2' },
    { word: 'Wireframing', pos: [1.8, -0.6, -1], color: '#00f0ff' },
    { word: 'Prototyping', pos: [-1.6, -1.2, 0.8], color: '#3b82f6' },
    { word: 'Info Architecture', pos: [0, -1.8, 1.2], color: '#8a2be2' },
    { word: 'Usability Testing', pos: [-2, 0, -1], color: '#ff2a85' },
    { word: 'Accessibility', pos: [2, 0.2, -0.5], color: '#10b981' },
    { word: 'Photoshop', pos: [1, 2, -1.2], color: '#3178c6' },
    { word: 'Illustrator', pos: [-1.2, -2, -1], color: '#ff7c00' },
    { word: 'HTML / CSS', pos: [0, 0, 2], color: '#e34f26' },
    { word: 'Python / PHP', pos: [0, 0, -2], color: '#3776ab' },
    { word: 'Vibe Coding', pos: [1.2, 1.2, -1.8], color: '#ffea00' },
  ];

  return (
    <div style={{ width: '100%', height: '380px', position: 'relative' }}>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ powerPreference: 'high-performance', antialias: false, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00f0ff" />
        
        {skillNodes.map((node, i) => (
          <SkillBadge3D key={i} word={node.word} position={node.pos} color={node.color} />
        ))}

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
      </Canvas>
    </div>
  );
}
