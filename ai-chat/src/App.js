import React, { useState } from 'react';
import './App.css';

function App() {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:8080/?m=${(message)}`);
            const data = await res.text();
            setResponse(data);
        } catch (error) {
            setResponse('Error connecting to server.');
        }
    };

    return (
        <div>
            <h1>Simple AI Chat</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit">Send</button>
            </form>
            {response && (
                <div className="response">
                    <strong>Response:</strong> {response}
                </div>
            )}
        </div>
    );
}

export default App;
