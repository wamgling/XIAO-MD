const { cmd } = require("../command");

cmd({
    pattern: "subzeroinc",
    desc: "All About The Bot & Dev",
    category: "fun",
    react: "🦄",
    filename: __filename
}, async (conn, mek, m, { reply }) => {
    const familyList = `*•────────────•⟢*
       *[ • Developer: Darrell M ]*
       *•────────────•⟢*
              
      *╭┈───────────────•*
      *│*  ◦🗂️ *REPOSITORY*
      *│*   
      *╵* https://github.com/mrfrank-ofc/SUBZERO-MD
      *╰╶╶╶╶╶✲*\n
      *╭┈───────────────•*
      *│*  ◦🔗 *PROJECT NAME*
      *│* SUBZERO-MD W.A BOT
      *╰╶╶╶╶╶✲*\n
      *╭┈───────────────•*
      *│*  ◦👨‍💻 *DEVELOPER*
      *│* https://github.com/mrfrank-ofc
       *╰╶╶╶╶╶✲*\n
      *╭┈───────────────•*
      *│*  ◦🧮 *RELEASE DATE*
      *│* 15 December 2024 
       *╰╶╶╶╶╶✲*\n
      *╭┈───────────────•*
      *│*  ◦📩 *SUPPORT GROUP* 
      *│* https://chat.whatsapp.com/InsR5qk3cBsG2781A6uxcO
      *╰╶╶╶╶╶✲*\n
      *╭┈───────────────•*
      *│*  ◦🎀 *SUPPORT CHANNEL*
      *│* https://whatsapp.com/channel/0029VagQEmB002T7MWo3Sj1D
      *│*  
      *│*  ◦🪄  Hit Me Here :wa.me/263719647303* 
      *╰┈───────────────•*
        *•────────────•⟢*
    `;

    try {
        // Envoi de la réponse avec l'image et la liste de la famille
        await conn.sendMessage(m.chat, {
            image: { url: "https://i.postimg.cc/FHN6KVzM/In-Shot-20241227-205053424.jpg" },
            caption: familyList.trim()
        }, { quoted: mek });
    } catch (error) {
        console.error(error);
        reply("❌ *An error occurred while fetching the family list. Please try again.*");
    }
});
