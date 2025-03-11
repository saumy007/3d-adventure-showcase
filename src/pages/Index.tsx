
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { KeyboardControls } from '@react-three/drei';
import Scene from '../components/Scene';
import Interface from '../components/Interface';
import ProjectModal from '../components/ProjectModal';
import { useState } from 'react';
import { Project } from '../types/project';

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="relative w-full h-screen bg-gray-900">
      <KeyboardControls
        map={[
          { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
          { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
          { name: 'left', keys: ['ArrowLeft', 'KeyA'] },
          { name: 'right', keys: ['ArrowRight', 'KeyD'] },
        ]}
      >
        <Canvas
          className="w-full h-full"
          camera={{ position: [0, 2, 5], fov: 75 }}
          shadows
        >
          <Suspense fallback={null}>
            <Scene onProjectSelect={setSelectedProject} />
          </Suspense>
        </Canvas>
      </KeyboardControls>
      <Interface />
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Index;
