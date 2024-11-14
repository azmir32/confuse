import { motion } from 'framer-motion';
import type { Skill } from '@/types';
import { IconType } from 'react-icons';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  skill: Skill;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  // This cast ensures TypeScript knows Icon can be rendered as a component
  const Icon = skill.icon as IconType | LucideIcon;
  
  return (
    <motion.div 
      className="p-4 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center gap-3 mb-3">
        <Icon className="w-6 h-6 text-primary" />
        <h3 className="text-lg font-semibold">{skill.name}</h3>
      </div>
      
      <div className="w-full bg-muted rounded-full h-2.5">
        <div 
          className="bg-primary h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${skill.proficiency}%` }}
        />
      </div>
      <span className="text-sm text-muted-foreground mt-1 block">
        {skill.proficiency}% Proficiency
      </span>
    </motion.div>
  );
};