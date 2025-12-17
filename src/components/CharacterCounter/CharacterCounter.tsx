// components/CharacterCounter/CharacterCounter.tsx
import React, { useState, useMemo } from 'react';
import { CharacterCounterProps, TextStats } from '../../types';
import { TextInput } from '../TextInput/TextInput';
import { StatsDisplay } from '../StatsDisplay/StatsDisplay';

const WORDS_PER_MINUTE = 200;

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
  minWords = 25,
  maxWords = 100,
  targetReadingTime,
}) => {
  const [text, setText] = useState('');

  const stats: TextStats = useMemo(() => {
    const trimmed = text.trim();

    const words = trimmed
      ? trimmed.split(/\s+/).filter(Boolean)
      : [];

    const wordCount = words.length;
    const characterCount = text.length;
    const readingTime = wordCount / WORDS_PER_MINUTE;

    return {
      characterCount,
      wordCount,
      readingTime,
    };
  }, [text]);

  const progress =
    maxWords > 0
      ? Math.min((stats.wordCount / maxWords) * 100, 100)
      : 0;

  const wordStatus =
    stats.wordCount < minWords
      ? 'text-red-500'
      : stats.wordCount > maxWords
      ? 'text-yellow-500'
      : 'text-green-600';

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      <TextInput onTextChange={setText} />

      <StatsDisplay
        stats={stats}
        showReadingTime={targetReadingTime !== undefined}
      />

      {/* Word Count Goals */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-gray-600">
          <span className={wordStatus}>
            Words: {stats.wordCount}
          </span>
          <span>
            Min: {minWords} | Max: {maxWords}
          </span>
        </div>

        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Optional Reading Time Target */}
      {targetReadingTime !== undefined && (
        <p className="text-sm text-gray-600">
          Target reading time: {targetReadingTime} min
        </p>
      )}
    </div>
  );
};
