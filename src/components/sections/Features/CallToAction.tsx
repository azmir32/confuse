import React from 'react';

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  onAction: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  buttonText,
  onAction,
}) => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-xl text-gray-600 mb-8">{description}</p>
        <button
          onClick={onAction}
          className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
