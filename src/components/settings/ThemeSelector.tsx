import React, { useEffect, useState } from 'react';

const AVAILABLE = [
    { id: 'emerald', name: 'Emerald Green & Gold' },
    { id: 'ocean', name: 'Ocean Blue & Coral' },
    { id: 'purple', name: 'Purple & Pink' },
    { id: 'teal', name: 'Teal & Amber' },
    { id: 'indigo', name: 'Indigo & Rose' },
];

const applyTheme = (id: string) => {
    // For simplicity we toggle data-theme dark/ light; more complex variable sets could be loaded here
    if (id === 'dark') document.body.setAttribute('data-theme', 'dark');
    else document.body.removeAttribute('data-theme');
    localStorage.setItem('ummah_theme', id);
};

const ThemeSelector: React.FC = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem('ummah_theme') || 'emerald');

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    return (
        <div className="theme-selector card">
            <h2>Settings — Customize your UmmahFlow experience</h2>
            <p style={{ marginTop: 8 }}>Color Theme</p>
            <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
                {AVAILABLE.map(t => (
                    <button key={t.id} className={`button ${t.id === theme ? '' : 'alt'}`} onClick={() => setTheme(t.id)}>
                        {t.name}
                    </button>
                ))}
            </div>
            <div style={{ marginTop: 12 }}>
                <button className="button alt" onClick={() => { setTheme('emerald'); applyTheme('emerald'); }}>Reset to Default Theme</button>
            </div>
            <div style={{ marginTop: 12 }}>
                <h3>About Color Themes</h3>
                <p>Each theme is designed to create peace, clarity, and focus.</p>
            </div>
        </div>
    );
};

export default ThemeSelector;