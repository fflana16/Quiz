export interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  category: string;
  text: string;
  options: Option[];
}

export type QuizState = 'welcome' | 'quiz' | 'result';
