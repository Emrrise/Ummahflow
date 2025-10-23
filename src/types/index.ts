export interface QuranVerse {
    arabic: string;
    translation: string;
    surah: string;
    verse: number;
}

export interface PrayerTime {
    fajr: string;
    dhuhr: string;
    asr: string;
    maghrib: string;
    isha: string;
}

export interface Task {
    id: string;
    title: string;
    completed: boolean;
}

export interface Theme {
    primaryColor: string;
    secondaryColor: string;
    backgroundColor: string;
}