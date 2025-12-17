// components/StatsDisplay/StatsDisplay.tsx
import React from 'react';
import { StatsDisplayProps } from '../../types';

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  showReadingTime = true,
}) => {
  const formatReadingTime = (minutes: number) => {
    const mins = Math.floor(minutes);
    const secs = Math.round((minutes - mins) * 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
      <div className="p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-500">Characters</p>
        <p className="text-2xl font-semibold">{stats.characterCount}</p>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-500">Words</p>
        <p className="text-2xl font-semibold">{stats.wordCount}</p>
      </div>

      {showReadingTime && (
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500">Reading Time</p>
          <p className="text-2xl font-semibold">
            {formatReadingTime(stats.readingTime)}
          </p>
        </div>
      )}
    </div>
  );
};
