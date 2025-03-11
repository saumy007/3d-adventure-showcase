
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

export const Skybox = () => {
  // Load skybox texture (using a single texture for all sides for simplicity)
  const texture = useLoader(THREE.TextureLoader, 'https://images.unsplash.com/photo-1518770660439-4636190af475');
  
  return (
    <mesh>
      <sphereGeometry args={[50, 32, 32]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
};
