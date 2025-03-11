import { useFrame } from '@react-three/fiber';
import { OrbitControls, useKeyboardControls } from '@react-three/drei';
import { useState, useRef } from 'react';
import { projects, Project } from '../types/project';
import * as THREE from 'three';
import { Skybox } from './Skybox';
import ProjectBlock from './ProjectBlock';

interface SceneProps {
  onProjectSelect: (project: Project) => void;
}

// Define the controls map type
enum Controls {
  forward = 'forward',
  backward = 'backward',
  left = 'left',
  right = 'right',
}

const Scene = ({ onProjectSelect }: SceneProps) => {
  const [characterPosition, setCharacterPosition] = useState([0, 0, 0]);
  const characterRef = useRef<THREE.Group>();
  
  // Set up keyboard controls
  const [, getKeys] = useKeyboardControls<Controls>();

  useFrame(() => {
    if (characterRef.current) {
      const moveSpeed = 0.05;
      const { forward, backward, left, right } = getKeys();

      if (forward) {
        characterRef.current.position.z -= moveSpeed;
      }
      if (backward) {
        characterRef.current.position.z += moveSpeed;
      }
      if (left) {
        characterRef.current.position.x -= moveSpeed;
      }
      if (right) {
        characterRef.current.position.x += moveSpeed;
      }
    }
  });

  return (
    <>
      <OrbitControls enablePan={false} maxPolarAngle={Math.PI / 2} />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      
      <Skybox />

      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Character placeholder (cube for now) */}
      <group ref={characterRef} position={[0, 0, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.5, 1, 0.5]} />
          <meshStandardMaterial color="blue" />
        </mesh>
      </group>

      {/* Project displays */}
      {projects.map((project) => (
        <ProjectBlock
          key={project.id}
          project={project}
          onSelect={onProjectSelect}
        />
      ))}
    </>
  );
};

export default Scene;
