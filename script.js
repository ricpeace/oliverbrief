require('dotenv').config();

// Use OPENAI_API_KEY in your API calls

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';

const prefixPrompt = "You are an AI assistant specializing in creative briefs for advertising campaigns. Based on the following brief, provide a concise summary and three creative ideas for the campaign:";

document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('.submit-button');
    const briefInput = document.querySelector('.brief-input');
    const resultText = document.getElementById('result-text');

    submitButton.addEventListener('click', async () => {
        const briefContent = briefInput.value;
        if (briefContent.trim() !== '') {
            submitButton.disabled = true;
            submitButton.textContent = 'Submitting...';
            
            try {
                const response = await axios.post(API_ENDPOINT, {
                    model: "gpt-3.5-turbo",
                    messages: [
                        {"role": "system", "content": prefixPrompt},
                        {"role": "user", "content": briefContent}
                    ]
                }, {
                    headers: {
                        'Authorization': `Bearer ${OPENAI_API_KEY}`,
                        'Content-Type': 'application/json'
                    }
                });

                resultText.textContent = response.data.choices[0].message.content;
            } catch (error) {
                console.error('Error:', error);
                resultText.textContent = 'An error occurred while processing your request.';
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = 'Submit';
            }
        } else {
            alert('Please enter a brief before submitting.');
        }
    });
});
