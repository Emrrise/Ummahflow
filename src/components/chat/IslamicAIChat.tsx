import React, { useState } from 'react';

type Message = { from: 'user' | 'bot'; text: string };

const IslamicAIChat: React.FC = () => {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState<Message[]>([]);
    const [variant, setVariant] = useState<'green' | 'gold'>('green');
    const [saturated, setSaturated] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setUserInput(e.target.value);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!userInput.trim()) return;
        const userMsg: Message = { from: 'user', text: userInput };
        setChatHistory(prev => [...prev, userMsg]);

        // Simulated simple response (do NOT provide jurisprudential rulings). Keep generic, encouraging.
        const botText = `Assalamu Alaikum — I heard: "${userInput}". Try this gentle guidance: reflect, consult trusted sources, and ask a scholar for rulings.`;
        setTimeout(() => setChatHistory(prev => [...prev, { from: 'bot', text: botText }]), 600);
        setUserInput('');
    };

    return (
        <div className={`ai-chat-container ${variant === 'gold' ? 'pale-gold' : ''} ${saturated ? 'ai-chat-saturated' : ''}`}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>Islamic AI Chat</h2>
                <div style={{ display: 'flex', gap: 8 }}>
                    <select value={variant} onChange={e => setVariant(e.target.value as any)}>
                        <option value="green">Pale Green</option>
                        <option value="gold">Pale Gold</option>
                    </select>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <input type="checkbox" checked={saturated} onChange={e => setSaturated(e.target.checked)} /> Saturate
                    </label>
                </div>
            </div>

            <div className="chat-history" aria-live="polite">
                {chatHistory.map((m, i) => (
                    <div className="chat-message" key={i}>
                        <div className={m.from === 'user' ? 'user-message' : 'bot-message'}>{m.from === 'user' ? 'You' : 'Bot'}: {m.text}</div>
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                <input value={userInput} onChange={handleInputChange} placeholder="Ask a gentle question about faith or productivity" />
                <button className="button" type="submit">Send</button>
            </form>
        </div>
    );
};

export default IslamicAIChat;