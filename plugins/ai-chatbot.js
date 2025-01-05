const axios = require('axios');
const { cmd } = require('../command');

cmd({
    pattern: "chatai",
    desc: "Chat with the AI chatbot.",
    category: "fun",
    react: "🤖",
    filename: __filename
},
async (conn, mek, m, { from, reply, text }) => {
    // Ensure the user has sent a query
    if (!text) {
        return reply("Please type a question or message to chat with the bot.");
    }

    try {
        // Construct the API URL
        const url = `https://api.davidcyriltech.my.id/ai/chatbot?query=${encodeURIComponent(text)}`;

        // Make the request to the chatbot API
        const response = await axios.get(url);

        // Extract the chatbot's reply from the API response
        const botReply = response.data.reply;

        // Check if the response contains the bot's reply
        if (botReply) {
            // Send the bot's reply back to the user
            return reply(botReply);
        } else {
            // If the bot response is empty or undefined
      return reply("Sorry, I couldn't understand your message. Please try again.");
        }
    } catch (e) {
        console.error("Error with chatbot API:", e);
        reply("There was an issue while chatting with the bot. Please try again later.");
    }
});
