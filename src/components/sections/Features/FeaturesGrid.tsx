import React from 'react';
import FeatureCategory from './FeatureCategory';
import { featureCategories } from './featuresData';

const FeaturesGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {featureCategories.map((category, index) => (
        <FeatureCategory key={index} {...category} />
      ))}
    </div>
  );
};

export default FeaturesGrid;
