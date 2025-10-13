
// FIX: Created the QuestionRenderer component to display questions.
import React, { useState, useEffect } from 'react';
import { Question, Option } from '../types';
import Button from './Button';

interface QuestionRendererProps {
  question: Question;
  currentQuestionIndex: number;
  onAnswer: (selectedOptionIds: string[]) => void;
  disabled: boolean;
  isMuted: boolean;
}

const SpeakerIcon: React.FC<{ isSpeaking: boolean }> = ({ isSpeaking }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`w-6 h-6 transition-colors ${isSpeaking ? 'text-cyan-300' : 'text-white'}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
    />
  </svg>
);


const QuestionRenderer: React.FC<QuestionRendererProps> = ({ question, currentQuestionIndex, onAnswer, disabled, isMuted }) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    // Reset selections and stop speech when question changes
    setSelectedIds([]);
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }, [question]);

  const handleSpeak = () => {
    if (isMuted) {
        return;
    }
    if (!('speechSynthesis' in window)) {
        alert("Sorry, your browser doesn't support text-to-speech.");
        return;
    }

    if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        return;
    }
    
    window.speechSynthesis.cancel(); // Clear any previous utterances

    const textsToRead = [
        `Question ${currentQuestionIndex + 1}`,
        question.text,
        ...question.options.map(o => o.text),
        'Please make your selection.'
    ];
    
    const utterances = textsToRead.map(text => new SpeechSynthesisUtterance(text));
    
    let utteranceIndex = 0;

    const speakNext = () => {
        if (utteranceIndex >= utterances.length) {
            setIsSpeaking(false);
            return;
        }
        const currentUtterance = utterances[utteranceIndex];
        currentUtterance.onend = () => {
            utteranceIndex++;
            speakNext();
        };
        window.speechSynthesis.speak(currentUtterance);
    };
    
    setIsSpeaking(true);
    speakNext();
  };

  const handleOptionClick = (optionId: string) => {
    if (question.type === 'MultiSelect') {
      setSelectedIds(prev =>
        prev.includes(optionId)
          ? prev.filter(id => id !== optionId)
          : [...prev, optionId]
      );
    } else {
      onAnswer([optionId]);
    }
  };

  const renderOptions = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {question.options.map((option: Option) => (
          <button
            key={option.id}
            onClick={() => handleOptionClick(option.id)}
            disabled={disabled}
            className={`p-4 rounded-lg text-left transition-all duration-200 w-full disabled:cursor-not-allowed disabled:opacity-70
              ${question.type === 'MultiSelect' && selectedIds.includes(option.id)
                ? 'bg-blue-600 ring-2 ring-white'
                : 'bg-white/20 hover:bg-white/30'
              }
            `}
          >
            <span className="font-semibold">{option.icon} {option.text}</span>
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-black/40 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-white/30 text-white">
      <p className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Question {currentQuestionIndex + 1}</p>
      {question.scenario && <p className="text-lg text-cyan-300 mb-2 italic">"{question.scenario}"</p>}
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 flex-1">{question.text}</h2>
        <button
          onClick={handleSpeak}
          disabled={isMuted}
          className={`p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 ${isMuted ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/20'}`}
          aria-label={isSpeaking ? "Stop reading question" : "Read question aloud"}
        >
          <SpeakerIcon isSpeaking={isSpeaking} />
        </button>
      </div>
      
      {renderOptions()}

      {question.type === 'MultiSelect' && (
        <div className="mt-6 text-right">
          <Button onClick={() => onAnswer(selectedIds)} disabled={disabled || selectedIds.length === 0}>
            Submit Answer
          </Button>
        </div>
      )}
    </div>
  );
};

export default QuestionRenderer;
