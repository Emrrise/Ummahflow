type Prayer = { name: string; time: string; date?: Date };

export const calculatePrayerTimes = (date: Date, latitude: number, longitude: number): Prayer[] => {
    // Placeholder generating times relative to date. Replace with accurate algorithm.
    const base = new Date(date);
    const format = (h: number, m: number) => {
        const d = new Date(base);
        d.setHours(h, m, 0, 0);
        return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return [
        { name: 'Fajr', time: format(5, 5), date: new Date(base) },
        { name: 'Dhuhr', time: format(12, 30), date: new Date(base) },
        { name: 'Asr', time: format(15, 45), date: new Date(base) },
        { name: 'Maghrib', time: format(18, 15), date: new Date(base) },
        { name: 'Isha', time: format(20, 0), date: new Date(base) },
    ];
};

export const getNextPrayerTime = (prayerTimes: Prayer[]) => {
    const now = new Date();
    for (const p of prayerTimes) {
        if (!p.date) continue;
        const t = new Date(p.date);
        const [hours, minutes] = p.time.split(':').map(s => parseInt(s));
        t.setHours(hours, minutes || 0, 0, 0);
        if (t > now) {
            const diff = Math.max(0, Math.floor((t.getTime() - now.getTime()) / 60000));
            const hoursLeft = Math.floor(diff / 60);
            const minsLeft = diff % 60;
            return { name: p.name, timeLeft: `${hoursLeft}h ${minsLeft}m` };
        }
    }
    // If none left, return next day's Fajr
    return { name: prayerTimes[0].name, timeLeft: 'tomorrow' };
};