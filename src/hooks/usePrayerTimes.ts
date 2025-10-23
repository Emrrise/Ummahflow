import { useEffect, useState } from 'react';
import { calculatePrayerTimes, getNextPrayerTime } from '../utils/prayerCalculations';

const usePrayerTimes = (city?: string) => {
    const [prayerTimes, setPrayerTimes] = useState<string[]>([]);
    const [nextPrayer, setNextPrayer] = useState<{ name: string; time: string } | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTimes = async () => {
            setLoading(true);
            try {
                let lat = 0, lon = 0;
                if (navigator.geolocation) {
                    await new Promise<void>((res) => {
                        navigator.geolocation.getCurrentPosition(pos => { lat = pos.coords.latitude; lon = pos.coords.longitude; res(); }, () => res());
                    });
                }

                const times = calculatePrayerTimes(new Date(), lat, lon);
                setPrayerTimes(times);
                const np = getNextPrayerTime(times);
                setNextPrayer({ name: np.name, time: np.timeLeft });
            } catch (e) {
                console.warn('prayer times error', e);
            } finally {
                setLoading(false);
            }
        };

        fetchTimes();
    }, [city]);

    return { prayerTimes, nextPrayer, loading };
};

export default usePrayerTimes;