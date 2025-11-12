export const sendQueryToAI = async (query: string): Promise<string> => {
    const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
    });

    if (!response.ok) {
        throw new Error('Failed to communicate with AI service');
    }

    const data = await response.json();
    return data.response;
};

export const getAIResponse = async (userInput: string): Promise<string> => {
    try {
        const response = await sendQueryToAI(userInput);
        return response;
    } catch (error) {
        console.error('Error fetching AI response:', error);
        return 'Sorry, I could not process your request at this time.';
    }
};