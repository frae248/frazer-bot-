const axios = require("axios");

// Example: sending message to your API
async function getReply(text) {
    const res = await axios.post("http://localhost:5000/api/message", {
        message: text
    });

    return res.data.reply;
}

// TEST BOT
async function test() {
    const reply = await getReply("Hello bot");
    console.log(reply);
}

test();
