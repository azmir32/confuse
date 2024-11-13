interface FeatureHeroProps {
  title: string;
  description: string;
}

export const FeatureHero = ({ title, description }: FeatureHeroProps) => {
  return (
    <div className="py-20 px-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        {title}
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        {description}
      </p>
    </div>
  );
};
