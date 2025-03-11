
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { Project } from '../types/project';
import { Eye } from 'lucide-react';

interface ProjectBlockProps {
  project: Project;
  onSelect: (project: Project) => void;
}

const ProjectBlock = ({ project, onSelect }: ProjectBlockProps) => {
  const meshRef = useRef<THREE.Mesh>();
  const [isNear, setIsNear] = useState(false);
  const [hovered, setHovered] = useState(false);

  useFrame(({ camera }) => {
    if (meshRef.current) {
      const distance = camera.position.distanceTo(meshRef.current.position);
      setIsNear(distance < 5);
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={project.position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 2, 1]} />
      <meshStandardMaterial 
        color={hovered ? "#6ab3ff" : "#4a9eff"}
        emissive={hovered ? "#2a5999" : "#000000"}
      />
      
      {isNear && (
        <Html position={[0, 2.5, 0]} center>
          <div className="bg-black/80 p-4 rounded-lg shadow-lg transform -translate-y-2 text-white w-48">
            <h3 className="font-bold mb-2">{project.title}</h3>
            <p className="text-sm mb-3">{project.description}</p>
            <button
              onClick={() => onSelect(project)}
              className="flex items-center justify-center gap-2 w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
            >
              <Eye className="w-4 h-4" />
              Preview Project
            </button>
          </div>
        </Html>
      )}
    </mesh>
  );
};

export default ProjectBlock;
