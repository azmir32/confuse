export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  id: number;
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  icon?: string;
  proficiency: number; // 1-100
}

// Consider adding more specific types for function props and responses
// Add proper documentation for type definitions 