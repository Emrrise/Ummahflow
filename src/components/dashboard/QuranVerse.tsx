import React, { useMemo } from 'react';

type Verse = { arabic: string; translation: string; reference: string; audio?: string };

const VERSES: Verse[] = [
    { arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', translation: 'All praise is due to Allah, Lord of the worlds.', reference: 'Surah Al-Fatiha 1:1' },
    { arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', translation: 'Guide us to the straight path.', reference: 'Surah Al-Fatiha 1:6' },
    { arabic: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا', translation: 'Indeed, with hardship [will be] ease.', reference: 'Surah Ash-Sharh 94:6' },
    { arabic: 'وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ', translation: 'And my success is not but through Allah.', reference: "Prophetic du'a" },
];

const QuranVerse: React.FC = () => {
    const index = useMemo(() => {
        const d = new Date();
        return d.getDate() % VERSES.length;
    }, []);

    const verse = VERSES[index];

    const playRecitation = () => {
        const audio = new Audio();
        audio.src = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA=';
        audio.play().catch(() => {});
    };

    return (
        <div className="quran-verse card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>Daily Quran Verse</h2>
                <button className="button alt" onClick={playRecitation} aria-label="Play recitation">Recite</button>
            </div>
            <p className="arabic-text" style={{ marginTop: 12 }}>{verse.arabic}</p>
            <p className="translation">{verse.translation}</p>
            <p className="reference">{verse.reference}</p>
        </div>
    );
};

export default QuranVerse;