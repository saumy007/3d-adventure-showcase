
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

interface CharacterProps {
  position: [number, number, number];
  controls: {
    forward: boolean;
    backward: boolean;
    left: boolean;
    right: boolean;
  };
}

export const Character = ({ position, controls }: CharacterProps) => {
  const group = useRef<THREE.Group>();
  const { scene, animations } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/robot-arm/model.gltf');
  const { actions } = useAnimations(animations, group);

  useFrame(() => {
    if (!group.current) return;

    const isMoving = Object.values(controls).some(control => control);
    
    if (controls.left) {
      group.current.rotation.y += 0.1;
    }
    if (controls.right) {
      group.current.rotation.y -= 0.1;
    }
  });

  return (
    <group ref={group} position={position} scale={[0.5, 0.5, 0.5]}>
      <primitive object={scene} />
    </group>
  );
};
