module.exports.config = {
  name: "botinfo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "YourName",
  description: "Show information about the bot",
  commandCategory: "info",
  usages: "",
  cooldowns: 5,
};

module.exports.run = async function({ api, event }) {
  const time = process.uptime();
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);
  
  const message = `
==== 🤖 BOT INFO 🤖 ====
👤 Owner: ᏕᏗᏦᎥᏰ ᏰᏂᏗᎥ
🌐 Facebook: https://www.facebook.com/Sakib.bhai.4x/
🕰️ Uptime: ${hours}h ${minutes}m ${seconds}s
🔧 Version: 1.0.0
📂 Category: Information
=======================
  `;

  return api.sendMessage(message, event.threadID, event.messageID);
};
