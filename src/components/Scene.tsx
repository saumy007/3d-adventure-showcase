
import { useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useState, useRef } from 'react';
import { projects, Project } from '../types/project';
import * as THREE from 'three';

interface SceneProps {
  onProjectSelect: (project: Project) => void;
}

const Scene = ({ onProjectSelect }: SceneProps) => {
  const [characterPosition, setCharacterPosition] = useState([0, 0, 0]);
  const characterRef = useRef<THREE.Group>();

  useFrame((state, delta) => {
    // Add character movement logic here
    if (characterRef.current) {
      // Simple keyboard controls
      const moveSpeed = 0.05;
      if (state.keyboard.down('KeyW')) {
        characterRef.current.position.z -= moveSpeed;
      }
      if (state.keyboard.down('KeyS')) {
        characterRef.current.position.z += moveSpeed;
      }
      if (state.keyboard.down('KeyA')) {
        characterRef.current.position.x -= moveSpeed;
      }
      if (state.keyboard.down('KeyD')) {
        characterRef.current.position.x += moveSpeed;
      }
    }
  });

  return (
    <>
      <OrbitControls enablePan={false} maxPolarAngle={Math.PI / 2} />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      
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
        <mesh
          key={project.id}
          position={project.position}
          onClick={() => onProjectSelect(project)}
        >
          <boxGeometry args={[1, 2, 1]} />
          <meshStandardMaterial color="#4a9eff" />
        </mesh>
      ))}
    </>
  );
};

export default Scene;
