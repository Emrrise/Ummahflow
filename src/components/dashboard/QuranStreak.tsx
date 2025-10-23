import React from 'react';
import { useQuranStreak } from '../../hooks/useQuranStreak';

const QuranStreak: React.FC = () => {
    const { streak, currentSurah } = useQuranStreak();

    return (
        <div className="quran-streak">
            <h2>Your Quran Reading Streak</h2>
            <p>Consecutive Days: <strong>{streak}</strong></p>
            <p>Today's Surah: <strong>{currentSurah}</strong></p>
            <p className="motivation">Keep your streak alive!</p>
        </div>
    );
};

export default QuranStreak;