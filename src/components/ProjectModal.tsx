
import { Project } from '../types/project';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-gray-900 text-white">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="relative aspect-video">
            <video
              src={project.videoUrl}
              controls
              className="w-full h-full rounded-lg"
            />
          </div>
          <p className="text-gray-300">{project.description}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
