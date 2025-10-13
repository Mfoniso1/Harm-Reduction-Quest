
import React from 'react';
import { GameBoardType } from '../types';
import { CANDY_VISUALS } from '../constants';

interface GameBoardProps {
  board: GameBoardType;
  crushedCells: { row: number; col: number }[];
}

const GameBoard: React.FC<GameBoardProps> = ({ board, crushedCells }) => {
  const showFeedback = crushedCells.length > 0;
  let feedbackPosition = { top: '50%', left: '50%' };

  if (showFeedback) {
    const avgRow = crushedCells.reduce((sum, c) => sum + c.row, 0) / crushedCells.length;
    const avgCol = crushedCells.reduce((sum, c) => sum + c.col, 0) / crushedCells.length;
    // Approximation: cell size (40px) + gap (6px) = 46px per cell
    const cellSize = 40 + 6; 
    feedbackPosition = {
      top: `${avgRow * cellSize}px`,
      left: `${avgCol * cellSize}px`,
    };
  }

  return (
    <div className="bg-white/20 backdrop-blur-lg p-3 rounded-2xl shadow-2xl border border-white/30 relative">
      {showFeedback && (
        <div style={feedbackPosition} className="animate-good-job">
          Good Job!
        </div>
      )}
      <div className="grid grid-cols-8 gap-1.5">
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            const isCrushing = crushedCells.some(
              (c) => c.row === rowIndex && c.col === colIndex
            );
            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center relative"
              >
                <div
                  key={cell.id}
                  className={`w-full h-full rounded-lg flex items-center justify-center text-2xl shadow-inner transition-transform duration-300 transform hover:scale-110 ${
                    isCrushing ? 'animate-crush' : 'animate-drop-in'
                  }`}
                  style={{
                    backgroundColor: CANDY_VISUALS[cell.type].color.replace(
                      'bg-',
                      '#'
                    ),
                    boxShadow: `inset 0 0 10px rgba(255,255,255,0.5), 0 2px 4px rgba(0,0,0,0.2)`,
                  }}
                >
                  {CANDY_VISUALS[cell.type].emoji}
                </div>
                {isCrushing && <div className="animate-points">+10</div>}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default GameBoard;