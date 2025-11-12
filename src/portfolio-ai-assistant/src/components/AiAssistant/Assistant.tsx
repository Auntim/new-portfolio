import React, { useState } from 'react';
import Chat from './Chat';
import { sendMessage } from '../../services/ai/assistant';

const Assistant: React.FC = () => {
    const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'assistant' }[]>([]);
    const [input, setInput] = useState('');

    const handleSendMessage = async () => {
        if (input.trim()) {
            const userMessage = { text: input, sender: 'user' };
            setMessages((prev) => [...prev, userMessage]);
            setInput('');

            const assistantResponse = await sendMessage(input);
            const assistantMessage = { text: assistantResponse, sender: 'assistant' };
            setMessages((prev) => [...prev, assistantMessage]);
        }
    };

    return (
        <div>
            <Chat messages={messages} onSendMessage={handleSendMessage} input={input} setInput={setInput} />
        </div>
    );
};

export default Assistant;