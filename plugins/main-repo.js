const { cmd, commands } = require('../command');
const config = require('../config');
// repo info
cmd({
    pattern: "repo",
    alias: ["sc", "script", "info"],
    desc: "Info about the bot repository",
    category: "main",
    react: "🗂️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `*Hello There SUBZERO W.A BOT User! 😄👋* 

> Simple, Icy, Cold  & Rich Loaded Bot With Amazing Features, SubZero WhatsApp Bot. ❄️

*Thanks for using SubZero MD🌹🫶* 

> Don't forget to star & fork the repo🌟🍴

https://github.com/mrfrank-ofc/SUBZERO-MD`;

        await conn.sendMessage(from, { image: { url: `https://i.postimg.cc/yNf7rQFw/prn.jpg` }, caption: dec, contextInfo: { mentionedJid: [m.sender], forwardingScore: 999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363304325601080@newsletter', newsletterName: '『 sᴜʙᴢᴇʀᴏ ᴍᴅ 』', serverMessageId: 143 } } }, { quoted: mek });

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/mrfrank-ofc/SUBZERO-MD-DATABASE/raw/refs/heads/main/audios/subzero-menu.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

