
export interface Project {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  position: [number, number, number];
  imageUrl: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: "Project 1",
    description: "Description of project 1. Click to learn more about this exciting project!",
    videoUrl: "https://example.com/video1.mp4",
    position: [-2, 0, -2],
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
  {
    id: '2',
    title: "Project 2",
    description: "Description of project 2. An innovative approach to solving problems!",
    videoUrl: "https://example.com/video2.mp4",
    position: [2, 0, -2],
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
];
