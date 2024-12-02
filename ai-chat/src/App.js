import React, { useState } from 'react';


function App() {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
            const res = await fetch(`http://localhost:8080/?m=${(message)}`);
            const data = await res.text();
            setResponse(data);
    };

    return (
        <div>
            <h1>Simple AI Chat</h1>
           <form onSubmit={handleSubmit}>
               <input
                   type="text"
                   placeholder="Message"
                   value={message}
                   onChange={(e) => setMessage(e.target.value)}
               />
                <button type="submit">Send</button>
           </form>
            <div>
                {response}
            </div>
        </div>
    );
}

export default App;
