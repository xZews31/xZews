const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Excellent  v12 Sürümüyle Yeniden Sizlerle.")
.setTitle("<a:zil:796394115628662826>Excellent Botun'un Yardım Menüsüne Hoşgeldin! <a:zil:796394115628662826>")
 .setTimestamp()
.setDescription("<a:zill:798886583737647104> **x!Eğlence** = __Eğlence Komutlarını Görüntülersiniz.__ \n <:koruma:798883296615858237> **x!Moderasyon** = __Moderasyon Komutlarını Görüntülersiniz.__ \n <:membericonpng21:798887741642506292> **x!Kullanıcı** = __Kullanıcı Komutlarını Görüntülersiniz.__ \n <:Yldz:798889269024391180> **x!Logo** = __Logo Komutlarını Görüntülersiniz.__")
.setImage("https://cdn.discordapp.com/attachments/798485372392439818/798889938087182376/excellent-sticker-excellent-rounded-isolated-sign-excellent-excellent-sticker-158772142.jpg")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}