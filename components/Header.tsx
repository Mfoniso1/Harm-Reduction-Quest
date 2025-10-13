// FIX: Created the Header component to display game stats.
import React from 'react';
import { Badge } from '../types';

interface HeaderProps {
  score: number;
  safetyLevel: number;
  badges: Badge[];
  isMuted: boolean;
  onToggleMute: () => void;
}

const MutedIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l2 2" />
    </svg>
);

const UnmutedIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
    </svg>
);


const Header: React.FC<HeaderProps> = ({ score, safetyLevel, badges, isMuted, onToggleMute }) => {
  return (
    <header className="w-full max-w-4xl mx-auto bg-white/30 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/30 text-white mb-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tighter">Harm Reduction Quest</h1>
          <p className="text-sm md:text-base text-gray-200">Level up your awareness!</p>
        </div>
        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="text-center">
            <div className="text-xs font-bold uppercase tracking-wider text-gray-300">Score</div>
            <div className="text-xl md:text-2xl font-bold">{score}</div>
          </div>
          <div className="text-center">
            <div className="text-xs font-bold uppercase tracking-wider text-gray-300">Safety</div>
            <div className="text-xl md:text-2xl font-bold">{safetyLevel}%</div>
          </div>
           <button 
              onClick={onToggleMute} 
              className="p-2 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label={isMuted ? "Unmute sound" : "Mute sound"}
          >
              {isMuted ? <MutedIcon /> : <UnmutedIcon />}
          </button>
        </div>
      </div>
      {badges.length > 0 && (
        <div className="mt-4 pt-3 border-t border-white/20">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">Badges Earned</h3>
          <div className="flex flex-wrap gap-2">
            {badges.map((badge, index) => (
              <span key={index} className="bg-yellow-400/80 text-yellow-900 text-xs font-semibold px-2.5 py-1 rounded-full">
                {badge}
              </span>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;