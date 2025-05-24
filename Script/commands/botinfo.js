const moment = require("moment-timezone");
const os = require("os");
const fs = require("fs");

module.exports = {
  config: {
    name: "botinfo",
    version: "1.0.0",
    author: "Ullash", // চাইলে নিজের নাম লিখে দিতে পারো
    countDown: 5,
    role: 0,
    shortDescription: "Show bot status",
    longDescription: "Displays information about the bot's current status",
    category: "info",
    guide: {
      en: "{pn}"
    }
  },

  onStart: async function ({ message }) {
    const uptimeInSeconds = process.uptime();
    const hours = Math.floor(uptimeInSeconds / 3600);
    const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
    const seconds = Math.floor(uptimeInSeconds % 60);

    const currentTime = moment.tz("Asia/Dhaka").format("HH:mm:ss");
    const currentDate = moment.tz("Asia/Dhaka").format("DD/MM/YYYY");

    const botInfo = 
      "╭──────•◈•───────╮\n" +
      "  —͟͟͞͞NOOB ☢️_𖣘 -BOT ⚠️ TEAM_ ☢️\n\n" +
      "☄️𝘽𝙊𝙏𝙉𝘼𝙈𝙀☄️ »» NOOB ☢️_𖣘 -BOT ⚠️\n" +
      "🌸𝙋𝙍𝙀𝙁𝙄𝙓🌸  »» . ««\n\n" +
      "🥳𝙐𝙋𝙏𝙄𝙈𝙀🥳\n\n" +
      `𝑫𝑨𝑻𝑬 𝑨𝑵𝑫 𝑻𝑰𝑴𝑬 \n『${currentDate}』 【${currentTime}】\n\n` +
      "⚡𝘽𝙊𝙏 𝙄𝙎 𝙍𝙐𝙉𝙉𝙄𝙉𝙂⚡ \n" +
      `🕛${hours}:${minutes}:${seconds}🕧\n\n` +
      "𝐁𝐎𝐓 𝐅𝐎𝐑𝐊 :- https://github.com/cyber-ullash/CYBER-BOT-COMMUNITY\n\n" +
      "BOT BY SAKIB\n" +
      "╰──────•◈•───────╯";

    message.reply(botInfo);
  }
};
