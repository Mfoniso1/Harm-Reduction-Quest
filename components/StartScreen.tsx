import React from 'react';
import Button from './Button';

interface StartScreenProps {
  onStart: () => void;
}

const DoctorIcon = () => (
    <svg 
      className="w-24 h-24 md:w-32 md:h-32 text-white/70 mb-6 inline-block" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2Z"/>
      <path d="M17.5 14H6.5C4.01472 14 2 16.0147 2 18.5V22H11V19C11 17.8954 11.8954 17 13 17V17C14.1046 17 15 17.8954 15 19V22H22V18.5C22 16.0147 19.9853 14 17.5 14Z"/>
    </svg>
);


const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <main className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 min-h-screen text-white flex flex-col items-center justify-center p-4">
      <div className="text-center bg-black/40 backdrop-blur-lg p-8 md:p-12 rounded-2xl shadow-2xl border border-white/30 max-w-2xl">
        <DoctorIcon />
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
          Harm Reduction Quest
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto">
          Embark on an 'Urban Survival Mission' to test your knowledge, make safe choices, and become a Harm Hero.
        </p>
        <Button onClick={onStart} className="text-xl px-10 py-4">
          Start Quest
        </Button>
      </div>
    </main>
  );
};

export default StartScreen;