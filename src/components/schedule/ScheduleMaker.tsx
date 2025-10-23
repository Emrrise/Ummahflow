import React, { useState } from 'react';

const ScheduleMaker: React.FC = () => {
    const [events, setEvents] = useState<{ title: string; time: string }[]>([]);
    const [eventTitle, setEventTitle] = useState('');
    const [eventTime, setEventTime] = useState('');

    const addEvent = () => {
        if (eventTitle && eventTime) {
            setEvents([...events, { title: eventTitle, time: eventTime }]);
            setEventTitle('');
            setEventTime('');
        }
    };

    return (
        <div>
            <h2>Schedule Maker</h2>
            <input
                type="text"
                placeholder="Event Title"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
            />
            <input
                type="time"
                value={eventTime}
                onChange={(e) => setEventTime(e.target.value)}
            />
            <button onClick={addEvent}>Add Event</button>
            <ul>
                {events.map((event, index) => (
                    <li key={index}>
                        {event.title} at {event.time}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ScheduleMaker;