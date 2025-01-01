/*╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    ⭐ＰＲＯＪＥＣＴ ＮＡＭＥ:
    ＳＵＢＺＥＲＯ ＷＨＡＴＳＡＰＰ ＭＤ ＢＯＴ
    
    ⭐ＤＥＶＥＬＯＰＥＲ
     ＭＲ ＦＲＡＮＫ 
     
    ⭐ ＭＹ ＴＥＡＭ
     ＸＥＲＯ ＣＯＤＥＲＳ
     
    ⭐ ＯＵＲ ＷＥＢＳＩＴＥ
     https://github.com/ZwSyntax/SUBZERO-MD

© ＴＲＹ ＤＥＣＲＹＰＴＩＮＧ ＩＦ ＹＯＵ ＣＡＮ⚠

╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺*/






const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*⟣━━━━━━━━━━━━━━━━━━━⟢*
   👨‍💻   *BOT OWNER:*
 
> *Darrell Mucheri ( Mr Frank OFC )*

   🔗   *SUBZERO REPO:*
 
> *https://github.com/mrfrank-ofc/SUBZERO-MD*

   🎀  *SUPPORT GROUP:*
 
> *https://whatsapp.com/channel/0029VagQEmB002T7MWo3Sj1D*

  🔎  *DEVELOPER NUMBER:*
 
> *wa.me/+263718647303/*

*⟣━━━━━━━━━━━━━━━━━━━⟢*
> *CREATED BY MR FRANK*
*⟣━━━━━━━━━━━━━━━━━━━⟢*
`
await conn.sendMessage(
            from,
            {
                image: { url: `https://i.postimg.cc/yNf7rQFw/prn.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363304325601080@newsletter',
                        newsletterName: '❄️ 𝐒𝐔𝐁𝐙𝐄𝐑𝐎 𝐌𝐃 ❄️',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio //https://github.com/mrfrank-ofc/SUBZERO-MD-DATABASE/raw/refs/heads/main/audios/subzero-menu.mp3
        await conn.sendMessage(from, { //https://github.com/mrfrank-ofc/SUBZERO-MD-DATABASE/blob/main/audios/subzero-menu.mp3
            audio: { url: 'https://github.com/mrfrank-ofc/SUBZERO-MD-DATABASE/raw/refs/heads/main/audios/subzero-menu.mp3' },//https://github.com/JawadYTX/KHAN-DATA/raw/refs/heads/main/autovoice/sigma.m4a
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});




//  SUBZERO SC BY MR FRANK
