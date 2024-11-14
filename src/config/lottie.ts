export const LOTTIE_CONFIG = {
    HERO_ANIMATION_URL: "https://lottie.host/44fdf684-3427-4f54-aceb-f063765606ee/QnVDExeYh5.json",
    defaultOptions: {
      loop: true,
      autoplay: true,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    }
  };
  
  export const loadLottieAnimation = async (url: string) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      
      if (data && data.layers && Array.isArray(data.layers)) {
        return data;
      }
      throw new Error("Invalid animation data structure");
    } catch (error) {
      console.error("Failed to load animation:", error);
      throw error;
    }
  };