import React from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import QuranVerse from '../components/dashboard/QuranVerse';
import PrayerTimes from '../components/dashboard/PrayerTimes';
import QuranStreak from '../components/dashboard/QuranStreak';
import QuickActions from '../components/dashboard/QuickActions';
import TaskManager from '../components/dashboard/TaskManager';
import './Dashboard.css'; // Optional: Import any specific styles for the Dashboard

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <Header />
            <Sidebar />
            <main className="main-content">
                <QuranVerse />
                <PrayerTimes />
                <QuranStreak />
                <QuickActions />
                <TaskManager />
            </main>
        </div>
    );
};

export default Dashboard;