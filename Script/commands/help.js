module.exports.config = {
        name: "help",
        version: "1.0.2",
        hasPermssion: 0,
        credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
        description: "FREE SET-UP MESSENGER",
        commandCategory: "system",
        usages: "[Name module]",
        cooldowns: 5,
        envConfig: {
                autoUnsend: true,
                delayUnsend: 20
        }
};

module.exports.languages = {
 "en": {
    "moduleInfo": "╭──────•◈•──────╮\nNOOB ☢️_𖣘 -BOT ⚠️ TEAM_ ☢️\n |●𝗡𝗮𝗺𝗲: •—» %1 «—•\n |●𝗨𝘀𝗮𝗴𝗲: %3\n |●𝗗𝗲𝘀𝗰𝗿𝗶p𝘁𝗶𝗼𝗻: %2\n |●𝗖𝗮𝘁𝗲𝗴𝗼𝗿𝘆: %4\n |●𝗪𝗮𝗶𝘁𝗶𝗻𝗴 𝘁𝗶𝗺𝗲: %5 seconds(s)\n |●𝗣𝗲𝗿𝗺𝗶𝘀𝘀𝗶𝗼𝗻: %6\n |𝗠𝗼𝗱𝘂𝗹𝗲 𝗰𝗼𝗱𝗲 𝗯𝘆\n |•—» ᏕᏗᏦᎥᏰ ᏰᏂᏗᎥ «—•\n╰──────•◈•──────╯",
    "helpList": '[ There are %1 commands on this bot, Use: "%2help nameCommand" to know how to use! ]',
    "user": "User",
        "adminGroup": "Admin group",
        "adminBot": "Admin bot"
  }
};

module.exports.handleEvent = function ({ api, event, getText }) {
 const { commands } = global.client;
 const { threadID, messageID, body } = event;

 if (!body || typeof body == "undefined" || body.indexOf("help") != 0) return;
 const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
 if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
 const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
 const command = commands.get(splitBody[1].toLowerCase());
 const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
 return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
}

module.exports. run = function({ api, event, args, getText }) {
  const axios = require("axios");
  const request = require('request');
  const fs = require("fs-extra");
 const { commands } = global.client;
 const { threadID, messageID } = event;
 const command = commands.get((args[0] || "").toLowerCase());
 const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
 const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
 const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
if (args[0] == "all") {
    const command = commands.values();
    var group = [], msg = "";
    for (const commandConfig of command) {
      if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
      else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
    }
    group.forEach(commandGroup => msg += `❄️ ${commandGroup.group.charAt(0).toUpperCase() + commandGroup.group.slice(1)} \n${commandGroup.cmds.join(' • ')}\n\n`);

    return axios.get('https://loidsenpaihelpapi.miraiandgoat.repl.co').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
      let admID = "61551846081032";

      api.getUserInfo(parseInt(admID), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var firstname = data[obj].name.replace("@", "");
    let callback = function () {
        api.sendMessage({ body:`✿🄲🄾🄼🄼🄰🄽🄳 🄻🄸🅂🅃✿\n\n` + msg + `✿══════════════✿\n│𝗨𝘀𝗲 ${prefix}help [Name?]\n│𝗨𝘀𝗲 ${prefix}help [Page?]\n│𝗡𝗔𝗠𝗘 𝗢𝗪𝗡𝗘𝗥 : │ ᏕᏗᏦᎥᏰ ᏰᏂᏗᎥ\n│𝗧𝗢𝗧𝗔𝗟 :  ${commands.size}\n————————————`, mentions: [{
                           tag: firstname,
                           id: admID,
                           fromIndex: 0,
                 }],
            attachment: fs.createReadStream(__dirname + `/cache/472.${ext}`)
        }, event.threadID, (err, info) => {
        fs.unlinkSync(__dirname + `/cache/472.${ext}`);
        if (autoUnsend == false) {
            setTimeout(() => {
                return api.unsendMessage(info.messageID);
            }, delayUnsend * 1000);
        }
        else return;
    }, event.messageID);
        }
         request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/472.${ext}`)).on("close", callback);
     })
      })
};
 if (!command) {
  const arrayInfo = [];
  const page = parseInt(args[0]) || 1;
    const numberOfOnePage = 15;
    let i = 0;
    let msg = "";
module.exports.config = {
  name: "help",
  version: "1.0.2",
  hasPermssion: 0,
  credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
  description: "FREE SET-UP MESSENGER",
  commandCategory: "system",
  usages: "[name | all | page]",
  cooldowns: 5,
  envConfig: {
    autoUnsend: true,
    delayUnsend: 20
  }
};

module.exports.languages = {
  "en": {
    "moduleInfo": `
📦 Module Name: %1
📄 Description: %2
💡 Usage: %3
📁 Category: %4
⏱️ Cooldown: %5s
🔐 Permission: %6
👨‍💻 Coded by: %7`,
    "helpList": '[There are %1 commands. Use: "%2help nameCommand" to learn more]',
    "user": "User",
    "adminGroup": "Admin (Group)",
    "adminBot": "Admin (Bot)"
  }
};

module.exports.handleEvent = function ({ api, event, getText }) {
  const { commands } = global.client;
  const { threadID, messageID, body } = event;

  if (!body || !body.toLowerCase().startsWith("help")) return;

  const args = body.trim().split(/\s+/);
  if (args.length < 2) return;

  const commandName = args[1].toLowerCase();
  const command = commands.get(commandName);
  if (!command) return;

  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  const prefix = threadSetting.PREFIX || global.config.PREFIX;

  return api.sendMessage(getText("moduleInfo",
    command.config.name,
    command.config.description,
    `${prefix}${command.config.name} ${command.config.usages || ""}`,
    command.config.commandCategory,
    command.config.cooldowns,
    command.config.hasPermssion == 0 ? getText("user") :
      command.config.hasPermssion == 1 ? getText("adminGroup") :
      getText("adminBot"),
    command.config.credits
  ), threadID, messageID);
};

module.exports.run = function ({ api, event, args, getText }) {
  const { commands } = global.client;
  const { threadID, messageID } = event;
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  const prefix = threadSetting.PREFIX || global.config.PREFIX;

  const arrayInfo = Array.from(commands.keys()).sort();
  const totalCommands = arrayInfo.length;
  const perPage = 15;
  const page = Math.max(1, parseInt(args[0])) || 1;
  const start = (page - 1) * perPage;
  const end = start + perPage;

  if (args[0]?.toLowerCase() === "all") {
    const grouped = {};
    for (const [_, cmd] of commands) {
      const group = cmd.config.commandCategory || "Others";
      if (!grouped[group]) grouped[group] = [];
      grouped[group].push(cmd.config.name);
    }

    let msg = "📚 COMMAND LIST\n\n";
    for (const category in grouped) {
      msg += `🔸 ${category}:\n${grouped[category].join(", ")}\n\n`;
    }

    msg += `🧮 Total: ${totalCommands} commands\n🧭 Use "${prefix}help [name]" for details`;
    return api.sendMessage(msg, threadID, messageID);
  }

  if (args[0] && commands.has(args[0].toLowerCase())) {
    const cmd = commands.get(args[0].toLowerCase());
    return api.sendMessage(getText("moduleInfo",
      cmd.config.name,
      cmd.config.description,
      `${prefix}${cmd.config.name} ${cmd.config.usages || ""}`,
      cmd.config.commandCategory,
      cmd.config.cooldowns,
      cmd.config.hasPermssion == 0 ? getText("user") :
        cmd.config.hasPermssion == 1 ? getText("adminGroup") :
        getText("adminBot"),
      cmd.config.credits
    ), threadID, messageID);
  }

  const listToShow = arrayInfo.slice(start, end);
  const helpText = listToShow.map(cmd => `• ${cmd}`).join("\n");

  const message = `📖 HELP MENU (Page ${page}/${Math.ceil(totalCommands / perPage)})
Total Commands: ${totalCommands}
Use: ${prefix}help [name] for details

${helpText}`;

  return api.sendMessage(message, threadID, messageID);
};

    for (var [name, value] of (commands)) {
      name += ``;
      arrayInfo.push(name);
    }

    arrayInfo.sort((a, b) => a.data - b.data);  
const first = numberOfOnePage * page - numberOfOnePage;
   i = first;
   const helpView = arrayInfo.slice(first, first + numberOfOnePage);


   for (let cmds of helpView) msg += `•—»[ ${cmds} ]«—•\n`;
    const siu = `╭──────•◈•──────╮\nNOOB ☢️_𖣘 -BOT ⚠️ TEAM_ ☢️ \n |   🄲🄾🄼🄼🄰🄽🄳 🄻🄸🅂🅃       \n╰──────•◈•──────╯`;
const text = `╭──────•◈•──────╮\n│𝗨𝘀𝗲 ${prefix}help [Name?]\n│𝗨𝘀𝗲 ${prefix}help [Page?]\n│𝗡𝗔𝗠𝗘 𝗢𝗪𝗡𝗘𝗥 : │ ᏕᏗᏦᎥᏰ ᏰᏂᏗᎥ\n│𝗧𝗢𝗧𝗔𝗟 : [${arrayInfo.length}]\n│📛🄿🄰🄶🄴📛 :  [${page}/${Math.ceil(arrayInfo.length/numberOfOnePage)}]\n╰──────•◈•──────╯`; 
    var link = [
"https://imgur.com/a/Czjo94h",
    ]
     var callback = () => api.sendMessage({ body: siu + "\n\n" + msg  + text, attachment: fs.createReadStream(__dirname + "/cache/loidbutter.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/loidbutter.jpg"), event.messageID);
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/loidbutter.jpg")).on("close", () => callback());
 }
const leiamname = getText("moduleInfo", command.config.name, command.config.description, `${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits);

  var link = [
"https://i.postimg.cc/QdgH08j6/Messenger-creation-C2-A39-DCF-A8-E7-4-FC7-8715-2559476-FEEF4.gif",
  ]
    var callback = () => api.sendMessage({ body: leiamname, attachment: fs.createReadStream(__dirname + "/cache/loidbutter.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/loidbutter.jpg"), event.messageID);
return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/loidbutter.jpg")).on("close", () => callback());
};
