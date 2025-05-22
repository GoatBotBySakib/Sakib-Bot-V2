const fs = require("fs");
const axios = require("axios");

module.exports = {
  config: {
    name: "fuck", // কমান্ডের নাম (যে কমান্ড দিলে বটটি কাজ করবে)
    version: "1.0.0",
    author: "Team Project",
    role: 0,
    shortDescription: "Send video with message",
    longDescription: "Sends a random video from a preset list",
    category: "fun",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    const videoLinks = [
      "https://i.imgur.com/ai3oQIE.mp4",
      "https://i.imgur.com/XMiFj3M.mp4",
      "https://i.imgur.com/BrTlrF2.mp4"
    ];

    // র‍্যান্ডম ভিডিও বেছে নেওয়া
    const randomLink = videoLinks[Math.floor(Math.random() * videoLinks.length)];

    // ভিডিও লোকাল ফাইলে ডাউনলোড
    const response = await axios.get(randomLink, { responseType: "arraybuffer" });
    fs.writeFileSync("fuck.mp4", Buffer.from(response.data));

    // ম্যাসেজের টেক্সট
    const message = `
╭──────•◈•─╮
NOOB ☢️_𖣘 -BOT ⚠️ TEAM_ ☢️

OWNER : ᏕᏗᏦᎥᏰ ᏰᏂᏗᎥ
╰──────•◈•─╯
`;

    // ম্যাসেজ পাঠানো এবং ভিডিও ফাইল মুছে ফেলা
    api.sendMessage({
      body: message,
      attachment: fs.createReadStream("fuck.mp4")
    }, event.threadID, () => fs.unlinkSync("fuck.mp4"), event.messageID);
  }
};
