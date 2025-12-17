// types/index.ts
export interface TextInputProps {
  onTextChange: (text: string) => void;
  placeholder?: string;
  initialValue?: string;
}

// types/index.ts
export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number; // in minutes
}
 
export interface StatsDisplayProps {
  stats: TextStats;
  showReadingTime?: boolean;
}


// types/index.ts
export interface CharacterCounterProps {
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number; // in minutes
}