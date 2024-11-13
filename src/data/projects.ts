export interface Project {
  id: string | number;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Clothing Store",
    description: "Project description goes here...",
    imageUrl: "project-image1.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/repo",
    technologies: ["React", "TypeScript", "Tailwind"]
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Project description goes here...",
    imageUrl: "project-image.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/repo",
    technologies: ["React", "TypeScript", "Tailwind"]
  },
  {
    id: 3,
    title: "E-Commerce Website",
    description: "Project description goes here...",
    imageUrl: "project-image3.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/repo",
    technologies: ["React", "TypeScript", "Tailwind"]
  },
  // Add more projects...
];