import { useRef, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import type { LottieRefCurrentProps } from 'lottie-react';
import { loadLottieAnimation, LOTTIE_CONFIG } from '@/config/lottie';

const Lottie = dynamic(() => import('lottie-react'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
});

interface LottieAnimationProps {
  url?: string;
  className?: string;
}

export const LottieAnimation: React.FC<LottieAnimationProps> = ({ 
  url = LOTTIE_CONFIG.HERO_ANIMATION_URL,
  className = "w-full h-full"
}) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    const initAnimation = async () => {
      try {
        const data = await loadLottieAnimation(url);
        setAnimationData(data);
        setIsLoaded(true);
      } catch (error) {
        console.error("Animation loading failed:", error);
      }
    };

    initAnimation();
  }, [url]);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div className="animate-pulse text-primary">Loading animation...</div>
      </div>
    );
  }

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animationData}
      {...LOTTIE_CONFIG.defaultOptions}
      onError={(error) => {
        console.error("Lottie error:", error);
      }}
      className={className}
    />
  );
};