
// FIX: Created the main App component to manage game state and UI.
import React, { useState } from 'react';
import GameBoard from './components/GameBoard';
import Header from './components/Header';
import QuestionRenderer from './components/QuestionRenderer';
import StartScreen from './components/StartScreen';
import { GameBoardType, Badge, Buff } from './types';
import { QUESTIONS } from './data/questions';
import { BOARD_SIZE, CANDY_TYPES } from './constants';
import { playSound } from './utils/audio';

const createInitialBoard = (): GameBoardType => {
  return Array.from({ length: BOARD_SIZE }, () =>
    Array.from({ length: BOARD_SIZE }, () => {
      const randomCandyType = CANDY_TYPES[Math.floor(Math.random() * CANDY_TYPES.length)];
      return {
        id: crypto.randomUUID(),
        type: randomCandyType,
      };
    })
  );
};

const findMatches = (board: GameBoardType): {row: number, col: number}[] => {
    // Check horizontal matches
    for (let r = 0; r < BOARD_SIZE; r++) {
        for (let c = 0; c < BOARD_SIZE - 2; c++) {
            if (board[r][c].type === board[r][c+1].type && board[r][c].type === board[r][c+2].type) {
                const match = [{row: r, col: c}, {row: r, col: c+1}, {row: r, col: c+2}];
                let k = c + 3;
                while(k < BOARD_SIZE && board[r][k].type === board[r][c].type) {
                    match.push({row: r, col: k});
                    k++;
                }
                return match; // Return first found match
            }
        }
    }

    // Check vertical matches
    for (let c = 0; c < BOARD_SIZE; c++) {
        for (let r = 0; r < BOARD_SIZE - 2; r++) {
             if (board[r][c].type === board[r+1][c].type && board[r][c].type === board[r+2][c].type) {
                const match = [{row: r, col: c}, {row: r+1, col: c}, {row: r+2, col: c}];
                let k = r + 3;
                 while(k < BOARD_SIZE && board[k][c].type === board[r][c].type) {
                    match.push({row: k, col: c});
                    k++;
                }
                return match; // Return first found match
            }
        }
    }

    return []; // No matches
}

const App: React.FC = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [board, setBoard] = useState<GameBoardType>(createInitialBoard());
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [safetyLevel, setSafetyLevel] = useState(50);
  const [badges, setBadges] = useState<Badge[]>([]);
  const [buffs, setBuffs] = useState<Buff[]>([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [crushedCells, setCrushedCells] = useState<{row: number; col: number}[]>([]);
  const [isMuted, setIsMuted] = useState(false);

  const currentQuestion = QUESTIONS[currentQuestionIndex];
  
  const toggleMute = () => {
    setIsMuted(prev => !prev);
  };

  const handleAnswer = (selectedOptionIds: string[]) => {
    if (isAnswered) return;

    setIsAnswered(true);

    const correctOptions = currentQuestion.options.filter(o => o.isCorrect).map(o => o.id);
    const isCorrect = selectedOptionIds.length === correctOptions.length && selectedOptionIds.every(id => correctOptions.includes(id));
    
    if (!isMuted) {
      playSound(isCorrect ? 'correct' : 'incorrect');
    }

    if (isCorrect) {
      let cellsToCrush = findMatches(board);

      if (cellsToCrush.length === 0) { // Fallback to random if no match found
        const numToCrush = Math.floor(Math.random() * 3) + 3;
        const tempCells: {row: number, col: number}[] = [];
        while(tempCells.length < numToCrush) {
            const row = Math.floor(Math.random() * BOARD_SIZE);
            const col = Math.floor(Math.random() * BOARD_SIZE);
            if (!tempCells.some(c => c.row === row && c.col === col)) {
                tempCells.push({row, col});
            }
        }
        cellsToCrush = tempCells;
      }
      setCrushedCells(cellsToCrush);

      // After animation, update board and clear crushed cells
      setTimeout(() => {
          setBoard(prevBoard => 
              prevBoard.map((row, rIndex) => 
                  row.map((cell, cIndex) => {
                      if (cellsToCrush.some(c => c.row === rIndex && c.col === cIndex)) {
                          const randomCandyType = CANDY_TYPES[Math.floor(Math.random() * CANDY_TYPES.length)];
                          return { id: crypto.randomUUID(), type: randomCandyType };
                      }
                      return cell;
                  })
              )
          );
          setCrushedCells([]);
      }, 500);


      setScore(prev => prev + 10);
      if (currentQuestion.reward) {
        setSafetyLevel(prev => Math.min(100, prev + currentQuestion.reward!.safetyChange));
        if (currentQuestion.reward.badge && !badges.includes(currentQuestion.reward.badge)) {
          setBadges(prev => [...prev, currentQuestion.reward!.badge!]);
        }
        if (currentQuestion.reward.buff && !buffs.includes(currentQuestion.reward.buff)) {
          setBuffs(prev => [...prev, currentQuestion.reward!.buff!]);
        }
      }
    } else {
        setSafetyLevel(prev => Math.max(0, prev - 5));
    }

    setTimeout(() => {
      if (currentQuestionIndex < QUESTIONS.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setIsAnswered(false);
      } else {
        // Game over logic
        alert(`Game Over! Your final score: ${score}, Safety Level: ${safetyLevel}%`);
      }
    }, 2000);
  };

  if (!isGameStarted) {
    return <StartScreen onStart={() => setIsGameStarted(true)} />;
  }

  return (
    <main className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 min-h-screen text-white p-4 sm:p-6 lg:p-8 flex flex-col items-center">
      <Header score={score} safetyLevel={safetyLevel} badges={badges} isMuted={isMuted} onToggleMute={toggleMute} />
      <div className="flex flex-col lg:flex-row items-start gap-8 w-full max-w-7xl mx-auto mt-6">
        <div className="lg:w-1/3 w-full flex justify-center">
            <GameBoard board={board} crushedCells={crushedCells} />
        </div>
        <div className="lg:w-2/3 w-full">
            {currentQuestion ? (
                <QuestionRenderer 
                    question={currentQuestion}
                    currentQuestionIndex={currentQuestionIndex}
                    onAnswer={handleAnswer}
                    disabled={isAnswered}
                    isMuted={isMuted}
                />
            ) : (
                <div className="text-center text-2xl font-bold">You've completed the quest!</div>
            )}
        </div>
      </div>
    </main>
  );
};

export default App;
