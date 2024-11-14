import { useState } from 'react';
import { motion } from 'framer-motion';
import { SkillCard } from '@/components/skillCard';
import { skills } from '@/data/skills';

const categories = ['all', 'frontend', 'backend', 'other'] as const;
type Category = typeof categories[number];

export const SkillsGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  
  const filteredSkills = skills.filter(skill => 
    activeCategory === 'all' ? true : skill.category === activeCategory
  );

  return (
    <div className="space-y-6">
      {/* Category Filters */}
      <div className="flex gap-4 justify-center flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full capitalize transition-colors ${
              activeCategory === category
                ? 'bg-primary text-white'
                : 'bg-muted hover:bg-primary/10'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        {filteredSkills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
};