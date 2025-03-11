
import { useFrame } from '@react-three/fiber';
import { OrbitControls, useKeyboardControls } from '@react-three/drei';
import { useState, useRef } from 'react';
import { projects, Project } from '../types/project';
import * as THREE from 'three';
import { Skybox } from './Skybox';
import ProjectBlock from './ProjectBlock';
import { Character } from './Character';

interface SceneProps {
  onProjectSelect: (project: Project) => void;
}

enum Controls {
  forward = 'forward',
  backward = 'backward',
  left = 'left',
  right = 'right',
}

const Scene = ({ onProjectSelect }: SceneProps) => {
  const [characterPosition, setCharacterPosition] = useState([0, 0, 0]);
  const characterRef = useRef<THREE.Group>();
  const [, getKeys] = useKeyboardControls<Controls>();

  useFrame(() => {
    const moveSpeed = 0.05;
    const controls = getKeys();

    if (controls.forward) {
      setCharacterPosition(prev => [prev[0], prev[1], prev[2] - moveSpeed]);
    }
    if (controls.backward) {
      setCharacterPosition(prev => [prev[0], prev[1], prev[2] + moveSpeed]);
    }
    if (controls.left) {
      setCharacterPosition(prev => [prev[0] - moveSpeed, prev[1], prev[2]]);
    }
    if (controls.right) {
      setCharacterPosition(prev => [prev[0] + moveSpeed, prev[1], prev[2]]);
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

      {/* Character */}
      <Character 
        position={characterPosition as [number, number, number]} 
        controls={getKeys()}
      />

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

