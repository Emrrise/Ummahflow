import React from 'react';
import ThemeSelector from '../components/settings/ThemeSelector';

const Settings: React.FC = () => {
    return (
        <div>
            <h1>Settings</h1>
            <p>Customize your UmmahFlow experience</p>
            <ThemeSelector />
        </div>
    );
};

export default Settings;