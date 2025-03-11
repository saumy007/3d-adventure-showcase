
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
  const { scene, animations } = useGLTF('https://models.readyplayer.me/637eefce567c9474362c4441.glb');
  const { actions } = useAnimations(animations, group);

  useFrame(() => {
    if (!group.current) return;

    const isMoving = Object.values(controls).some(control => control);
    
    // Play walking animation if moving, idle animation if not
    if (isMoving && actions?.Walk) {
      actions.Walk.reset().fadeIn(0.2).play();
      if (actions.Idle) {
        actions.Idle.fadeOut(0.2);
      }
    } else if (actions?.Idle) {
      actions.Idle.reset().fadeIn(0.2).play();
      if (actions.Walk) {
        actions.Walk.fadeOut(0.2);
      }
    }

    // Rotate character based on movement direction
    if (controls.left) {
      group.current.rotation.y += 0.1;
    }
    if (controls.right) {
      group.current.rotation.y -= 0.1;
    }
  });

  return (
    <group ref={group} position={position} scale={[1, 1, 1]}>
      <primitive object={scene} />
    </group>
  );
};

