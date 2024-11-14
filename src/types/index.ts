import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';

// Combined Skill interface taking the best from both versions
export interface Skill {
  id: number;
  name: string;
  // Combined categories from both interfaces
  category: 'frontend' | 'backend' | 'tools' | 'other';
  // Made icon optional and supports multiple icon types
  icon?: LucideIcon | IconType | string;
  // Explicitly commented range for clarity
  proficiency: number; // Scale of 1-100
}

// Kept Project interface as is since it wasn't duplicated
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}