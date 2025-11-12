export const chatHandler = async (req, res) => {
    if (req.method === 'POST') {
        const { userMessage } = req.body;

        // Here you would typically call your AI service to get a response
        const aiResponse = await getAIResponse(userMessage);

        res.status(200).json({ response: aiResponse });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};

const getAIResponse = async (message) => {
    // Placeholder for AI service integration
    // Replace this with actual API call to your AI service
    return `You said: ${message}`;
};