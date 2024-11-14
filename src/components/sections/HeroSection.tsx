import { motion } from 'framer-motion';
import { LottieAnimation } from '@/components/LottieAnimation';
import { heroAnimations, lottieAnimationStates } from '@/utils/animation';
import { Sparkles } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <motion.section 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={heroAnimations.container}
    >
      {/* Content Container */}
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          className="space-y-10 text-center lg:text-left"
          variants={heroAnimations.item}
        >
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center rounded-full bg-primary/10 px-6 py-3 text-lg md:text-xl lg:text-2xl font-medium text-primary"
          >
            <Sparkles className="w-6 h-6 mr-3" />
            Transforming Ideas into Digital Reality
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-400 tracking-tight"
            variants={heroAnimations.fadeIn}
          >
            Welcome to LEAPS
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground leading-relaxed"
            variants={heroAnimations.fadeIn}
          >
            Where we help you LEAPS FORWARD
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-6 justify-center lg:justify-start pt-6"
            variants={heroAnimations.fadeIn}
          >
            <button className="px-10 py-5 bg-primary text-white rounded-xl hover:bg-primary-400 transition-all duration-300 hover:scale-105 font-medium text-xl">
              Get Started
            </button>
            <button className="px-10 py-5 border-2 border-primary text-primary rounded-xl hover:bg-primary-100 transition-all duration-300 hover:scale-105 font-medium text-xl">
              Learn More
            </button>
          </motion.div>
        </motion.div>

        {/* Animation Container - Made smaller */}
        <motion.div 
          className="relative w-full h-[300px] lg:h-[900px]" // Reduced height significantly
          variants={heroAnimations.item}
          {...lottieAnimationStates}
        >
          <LottieAnimation />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;