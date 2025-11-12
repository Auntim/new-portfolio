import React, { useState } from 'react';
import MessageBubble from './MessageBubble';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSendMessage = () => {
        if (input.trim()) {
            const userMessage = { text: input, sender: 'user' };
            setMessages([...messages, userMessage]);
            setInput('');

            // Simulate AI response
            setTimeout(() => {
                const aiMessage = { text: `AI response to: ${input}`, sender: 'ai' };
                setMessages(prevMessages => [...prevMessages, aiMessage]);
            }, 1000);
        }
    };

    return (
        <div className="chat-container">
            <div className="messages">
                {messages.map((msg, index) => (
                    <MessageBubble key={index} message={msg} />
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
};

export default Chat;