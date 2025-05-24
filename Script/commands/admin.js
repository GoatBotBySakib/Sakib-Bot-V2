const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
    name: "admin",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ULLASH", //don't change my credit 
    description: "Show Owner Info",
    commandCategory: "info",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function({ api, event }) {
    var time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

    var callback = () => api.sendMessage({
        body: `
┏━━━━━━━━━━━━━━━━━━━━━┓
┃      🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟      
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 👤 𝐍𝐚𝐦𝐞      : 𝐒𝐀𝐊𝐈𝐁 𝐁𝐇𝐀𝐈
┃ 🚹 𝐆𝐞𝐧𝐝𝐞𝐫    : 𝐌𝐚𝐥𝐞
┃ ❤️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧  : 𝐒𝐢𝐧𝐠𝐥𝐞 
┃ 🎂 𝐀𝐠𝐞       : 𝟏𝟖+
┃ 🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧  : 𝐈𝐬𝐥𝐚𝐦 
┃ 🏫 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 : 𝐇𝐬𝐜 𝐁𝐚𝐭𝐜𝐡 𝟐𝐤𝟐𝟓
┃ 🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬  : 𝐔𝐥𝐥𝐚𝐩𝐚𝐫𝐚 𝐒𝐢𝐫𝐚𝐣𝐠𝐚𝐧𝐣
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 📢 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 : https://t.me/second.johhny.sins
┃ 🌐 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : https://www.facebook.com/Sakib.Bhai.4x
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🕒 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐓𝐢𝐦𝐞:  ${time}
┗━━━━━━━━━━━━━━━━━━━━━┛
        `,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));
  
    return request(encodeURI(`https://scontent.fdac20-1.fna.fbcdn.net/v/t39.30808-6/472796285_122118705218674221_5876343853182013289_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeF9dCWuou8scHD_qQrGMMQMSv9SUH336SdK_1JQfffpJ5JIhF0oz464epJUwDcikWi9Qij_dkvtlO6U_32CWD3_&_nc_ohc=8m766Etpa0kQ7kNvwGV0G4R&_nc_oc=AdlIP6cNCdzDdY9bmlJEYr5u3WJrNrM6uwZ3UJfn8jxrEFA-azKOCr5N7tt41DEwL4g&_nc_zt=23&_nc_ht=scontent.fdac20-1.fna&_nc_gid=auhjLxSTWeqkA5uHZ94eZQ&oh=00_AfJ67wwt2kIhNIFD6_czOcpUrIzcWD1STV6iDnw0P2dhyg&oe=68371BD8`))
        .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
        .on('close', () => callback());
};
