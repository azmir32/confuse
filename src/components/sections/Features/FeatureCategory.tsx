import React from 'react';
import FeatureCard from './FeatureCard';

interface FeatureCategoryProps {
  category: string;
  features: Array<{
    title: string;
    description: string;
    icon?: React.ReactNode;
  }>;
}

const FeatureCategory: React.FC<FeatureCategoryProps> = ({ category, features }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default FeatureCategory;
