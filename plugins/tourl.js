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





const axios = require("axios");
const FormData = require('form-data');
const fs = require('fs');
const os = require('os');
const path = require("path");
const {
  cmd,
  commands
} = require("../command");
cmd({
  'pattern': "tourl",
  'alias': ["imgtourl", "img2url", "url"],
  'react': '🖇',
  'desc': "Download anime maid images.",
  'category': 'anime',
  'use': ".maid",
  'filename': __filename
}, async (_0x5aa2a5, _0x3e4d2c, _0x4572c0, {
  from: _0x3dbf21,
  mnu: _0x5b9835,
  quoted: _0x2aa830,
  body: _0x102661,
  isCmd: _0x458182,
  command: _0x17afd2,
  args: _0x584452,
  q: _0x1e8526,
  isGroup: _0x2ca4de,
  sender: _0x59f221,
  senderNumber: _0x4307ab,
  botNumber2: _0x17667f,
  botNumber: _0x359bfc,
  pushname: _0x2b3b71,
  isMe: _0xed0daf,
  isOwner: _0x5d3e22,
  groupMetadata: _0x169324,
  groupName: _0x432187,
  participants: _0x4c725d,
  groupAdmins: _0x276007,
  isBotAdmins: _0x13439b,
  isAdmins: _0x1d0a9d,
  reply: _0x2cab4a
}) => {
  try {
    let _0x4f43a6 = _0x4572c0.quoted ? _0x4572c0.quoted : _0x4572c0;
    let _0x2b3347 = (_0x4f43a6.msg || _0x4f43a6).mimetype || '';
    if (!_0x2b3347) {
      throw "_`🌻 Reply To image`_";
    }
    let _0x4fb74b = await _0x4f43a6.download();
    let _0x45ad97 = path.join(os.tmpdir(), 'ManulOfcX');
    fs.writeFileSync(_0x45ad97, _0x4fb74b);
    let _0x807e20 = new FormData();
    _0x807e20.append("image", fs.createReadStream(_0x45ad97));
    let _0xf67b93 = await axios.post("https://api.imgbb.com/1/upload?key=06d00f0e4520243a32b58138765a2ecc", _0x807e20, {
      'headers': {
        ..._0x807e20.getHeaders()
      }
    });
    if (!_0xf67b93.data || !_0xf67b93.data.data || !_0xf67b93.data.data.url) {
      throw "❌ Error al subir el archivo";
    }
    let _0x56f6ae = _0xf67b93.data.data.url;
    fs.unlinkSync(_0x45ad97);
    _0x4572c0.reply("*SUBZERO-MD IMG URL 📸*\n " + _0x4fb74b.length + " Byte(s)\n *URL-IMG* 🖇️ " + _0x56f6ae + "\n\n> *⚖️UPLOAD - : © BY SUBZERO ❄️*");
  } catch (_0x141b19) {
    _0x2cab4a('' + _0x141b19);
    console.log(_0x141b19);
  }
});
