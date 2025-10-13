// FIX: Created constants used throughout the application.
import { CandyType } from './types';

export const BOARD_SIZE = 8;

export const CANDY_TYPES: CandyType[] = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

export const CANDY_VISUALS: Record<CandyType, { emoji: string; color: string }> = {
  red: { emoji: '🔴', color: 'bg-red-500' },
  blue: { emoji: '🔵', color: 'bg-blue-500' },
  green: { emoji: '🟢', color: 'bg-green-500' },
  yellow: { emoji: '🟡', color: 'bg-yellow-500' },
  purple: { emoji: '🟣', color: 'bg-purple-500' },
  orange: { emoji: '🟠', color: 'bg-orange-500' },
};
