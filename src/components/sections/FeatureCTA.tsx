'use client';

interface FeatureCTAProps {
  title: string;
  description: string;
  buttonText: string;
  onAction: () => void;
}

export const FeatureCTA = ({ title, description, buttonText, onAction }: FeatureCTAProps) => {
  return (
    <div className="py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 mb-8">{description}</p>
      <button
        onClick={onAction}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        {buttonText}
      </button>
    </div>
  );
};
