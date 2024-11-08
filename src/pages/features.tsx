import React from 'react';
import Hero from '../components/sections/Features/Hero';
import FeaturesGrid from '../components/sections/Features/FeaturesGrid';
import CallToAction from '../components/sections/Features/CallToAction';

const FeaturesPage: React.FC = () => {
  return (
    <main>
      <Hero 
        title="Our Features" 
        description="Discover everything our platform has to offer"
      />
      <FeaturesGrid />
      <CallToAction 
        title="Ready to Get Started?"
        description="Join thousands of satisfied users today"
        buttonText="Get Started"
        onAction={() => console.log('CTA clicked')}
      />
    </main>
  );
};

export default FeaturesPage;
