const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Excellent  v12 Sürümüyle Yeniden Sizlerle.")
.setTitle("<a:zil:796394115628662826>Excellent Botun'un Yardım Menüsüne Hoşgeldin! <a:zil:796394115628662826>")
 .setTimestamp()
.setDescription("<a:zill:798886583737647104> **-eğlence** = __Eğlence Komutlarını Görüntülersiniz.__ \n <a:ayarlardestiny:798886582076702741> **-moderasyon** = __Moderasyon komutlarını görüntülersiniz.__ \n <:membericonpng21:798887741642506292> **-kullanıcı** = __Kullanıcı komutlarını görüntülersiniz.__ \n <a:Yldz:742698148329291826> **-logo** = __Logo komutlarını görüntülersiniz.__")
.setImage("https://cdn.discordapp.com/attachments/744536225230094360/751100899836821534/Night_Sky_Mountain_Decorative_Border_Youtube_Thumbnail.png")
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