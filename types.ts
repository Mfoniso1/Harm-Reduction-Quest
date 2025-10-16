// FIX: Defined all necessary types for the application.
export enum QuestionType {
  MultipleChoice = 'MultipleChoice',
  MultiSelect = 'MultiSelect',
  MiniMap = 'MiniMap',
  Defense = 'Defense',
  ConceptLink = 'ConceptLink',
  VibeCheck = 'VibeCheck',
}

export enum Badge {
  PeerAlly = 'Peer Ally',
  CleanStreets = 'Clean Streets',
  RiskAverter = 'Risk Averter',
  HarmHeroMaster = 'Harm Hero Master',
}

export enum Buff {
  TimerFreeze = 'Timer Freeze',
}

export interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
  icon?: string;
}

export interface Reward {
  safetyChange: number;
  badge?: Badge;
  buff?: Buff;
}

export interface Question {
  id: number;
  type: QuestionType;
  text: string;
  options: Option[];
  scenario?: string;
  reward?: Reward;
}

export type CandyType = 'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'orange';

export interface Candy {
  id: string;
  type: CandyType;
}

export type GameBoardType = Candy[][];

export interface Clinic {
  name: string;
  address: string;
  contact?: string;
}
