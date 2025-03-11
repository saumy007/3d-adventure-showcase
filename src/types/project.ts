
export interface Project {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  position: [number, number, number];
  imageUrl: string;
  textureUrl: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: "VR Factory Scene",
    description: "An immersive VR-based factory scene built in Unity 3D, showcasing interactive machinery and real-time simulations.",
    videoUrl: "https://example.com/vr-factory-demo.mp4",
    position: [-2, 0, -2],
    imageUrl: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c",
    textureUrl: "https://images.unsplash.com/photo-1557683316-973673baf926",
  },
  {
    id: '2',
    title: "Predictive Maintenance ML",
    description: "Machine learning-based system for predictive maintenance and analysis of industrial equipment.",
    videoUrl: "https://example.com/predictive-maintenance-demo.mp4",
    position: [2, 0, -2],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    textureUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
];
