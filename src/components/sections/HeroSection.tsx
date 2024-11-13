import { useRef, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import type { LottieRefCurrentProps } from 'lottie-react';

const Lottie = dynamic(() => import('lottie-react'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
});

const HeroSection: React.FC = () => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  // Add state to track if animation data is loaded
  const [isLoaded, setIsLoaded] = useState(false);
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    // Fetch and validate animation data
    const loadAnimation = async () => {
      try {
        // If using URL
        const response = await fetch("https://lottie.host/44fdf684-3427-4f54-aceb-f063765606ee/QnVDExeYh5.json");
        const data = await response.json();
        
        // Validate the animation data structure
        if (data && data.layers && Array.isArray(data.layers)) {
          console.log("Animation data is valid:", data);
          setAnimationData(data);
          setIsLoaded(true);
        } else {
          console.error("Invalid animation data structure:", data);
        }
      } catch (error) {
        console.error("Failed to load animation:", error);
      }
    };

    loadAnimation();
  }, []);

  // Don't render Lottie until data is loaded
  if (!isLoaded) {
    return <div>Loading animation...</div>;
  }

  return (
    <div className="w-full h-full">
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={true}
        autoplay={true}
        onError={(error) => {
          console.error("Lottie error:", error);
        }}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default HeroSection;