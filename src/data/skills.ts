import { 
  Code2, 
  FileCode2
} from 'lucide-react';
import { 
  FaReact, 
  FaNode, 
  FaHtml5,
  FaGitAlt,
  FaPython,
  FaCss3Alt  // Import CSS icon from Font Awesome icons
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript,
  SiTailwindcss,
  SiMongodb
} from 'react-icons/si';
import type { Skill } from '@/types/index';

export const skills: Skill[] = [
  {
    id: 1,
    name: "React",
    category: "frontend",
    icon: FaReact,
    proficiency: 100
  },
  {
    id: 2,
    name: "Next.js",
    category: "frontend",
    icon: SiNextdotjs,
    proficiency: 60
  },
  {
    id: 3,
    name: "TypeScript",
    category: "frontend",
    icon: SiTypescript,
    proficiency: 70
  },
  {
    id: 4,
    name: "CSS",
    category: "frontend",
    icon: FaCss3Alt,  // Changed to use Font Awesome CSS icon
    proficiency: 80
  },
  {
    id: 5,
    name: "JavaScript",
    category: "frontend",
    icon: SiJavascript,
    proficiency: 90
  },
  {
    id: 6,
    name: "Node.js",
    category: "backend",
    icon: FaNode,
    proficiency: 75
  },
  {
    id: 7,
    name: "Tailwind CSS",
    category: "frontend",
    icon: SiTailwindcss,
    proficiency: 85
  },
  {
    id: 8,
    name: "MongoDB",
    category: "backend",
    icon: SiMongodb,
    proficiency: 65
  },
  {
    id: 9,
    name: "Git",
    category: "other",
    icon: FaGitAlt,
    proficiency: 80
  },]