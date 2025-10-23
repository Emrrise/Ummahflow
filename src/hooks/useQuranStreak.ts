import { useState, useEffect } from 'react';

const SURAHS = ['Al-Fatiha', 'Al-Baqarah', 'Al-Imran', 'An-Nisa', 'Al-Ma\'idah'];

const useQuranStreak = () => {
    const [streak, setStreak] = useState<number>(0);
    const [lastReadDate, setLastReadDate] = useState<string | null>(null);

    useEffect(() => {
        const storedStreak = localStorage.getItem('quranStreak');
        const storedDate = localStorage.getItem('lastReadDate');

        if (storedStreak) setStreak(Number(storedStreak));
        if (storedDate) setLastReadDate(storedDate);
    }, []);

    const updateStreak = () => {
        const todayStr = new Date().toDateString();
        if (lastReadDate !== todayStr) {
            const next = streak + 1;
            setStreak(next);
            setLastReadDate(todayStr);
            localStorage.setItem('quranStreak', String(next));
            localStorage.setItem('lastReadDate', todayStr);
        }
    };

    const randomSurah = () => {
        const idx = new Date().getDate() % SURAHS.length;
        return SURAHS[idx];
    };

    return { streak, updateStreak, currentSurah: randomSurah() };
};

export default useQuranStreak;