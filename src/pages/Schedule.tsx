import React from 'react';
import Calendar from '../components/schedule/Calendar';
import ScheduleMaker from '../components/schedule/ScheduleMaker';

const Schedule: React.FC = () => {
    return (
        <div>
            <h1>Schedule</h1>
            <Calendar />
            <ScheduleMaker />
        </div>
    );
};

export default Schedule;