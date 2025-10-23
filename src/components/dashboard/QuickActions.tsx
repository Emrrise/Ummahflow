import React from 'react';

const QuickActions: React.FC = () => {
    const handleAIChat = () => {
        // Logic for AI chat action
    };

    const handleSchedule = () => {
        // Logic for opening schedule
    };

    const handleHabits = () => {
        // Logic for managing habits
    };

    const handleRecite = () => {
        // Logic for reciting Quran
    };

    return (
        <div className="quick-actions">
            <button onClick={handleAIChat}>AI Chat</button>
            <button onClick={handleSchedule}>Schedule</button>
            <button onClick={handleHabits}>Habits</button>
            <button onClick={handleRecite}>Recite</button>
        </div>
    );
};

export default QuickActions;