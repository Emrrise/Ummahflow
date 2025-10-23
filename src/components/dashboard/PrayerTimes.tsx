import React, { useState } from 'react';
import usePrayerTimes from '../../hooks/usePrayerTimes';

const PrayerTimes: React.FC = () => {
  const [city, setCity] = useState('');
  const { prayerTimes, nextPrayer, loading } = usePrayerTimes(city);

  return (
    <div className="prayer-times card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Prayer Times</h2>
        <div style={{ display: 'flex', gap: 8 }}>
          <input placeholder="Manual city (optional)" value={city} onChange={e => setCity(e.target.value)} />
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ul>
            {prayerTimes.map((time, index) => (
              <li key={index}>
                {time.name}: {time.time}
              </li>
            ))}
          </ul>
          <div className="next-prayer">
            <strong>Next Prayer:</strong> {nextPrayer ? `${nextPrayer.name} in ${nextPrayer.time}` : '—'}
          </div>
        </>
      )}
    </div>
  );
};

export default PrayerTimes;