const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Excellent v12 sürümüyle yeniden sizlerle.")
.setTitle("<:yan:798889269024391180> Excellent Logo Komutları <:yan:798889269024391180>")
 .setTimestamp()
.setDescription("<:yan:798889269024391180> **x!dinamik** = Dinamik logo oluşturur. <:yan:798889269024391180> \n <:yan:798889269024391180> **x!altın** = Altın logo oluşturur. <:yan:798889269024391180> \n <:yan:798889269024391180> **x!banner** = Banner logo oluşturur. <:yan:798889269024391180> \n <:yan:798889269024391180> **x!basit** = Basit logo oluşturur. <:yan:798889269024391180> \n <:yan:798889269024391180> **x!elmas** = Elmas logo oluşturur. <:yan:798889269024391180> \n <:yan:798889269024391180> **x!sarı** = Sarı logo oluşturur. <:yan:798889269024391180> \n <:yan:798889269024391180> **x!neonmavi** = Neon mavi logo oluşturur. <:yan:798889269024391180> \n <:yan:798889269024391180> **x!kalın** = Kalın logo oluşturur. <:yan:798889269024391180> \n <:yan:798889269024391180> **x!anime** = Anime yazı tipinde logo oluşturur. <:yan:798889269024391180> \n <:yan:798889269024391180> **x!habbo** = Habbo yazı tipinde logo oluşturur. <:yan:798889269024391180> \n <:yan:798889269024391180> **x!arrow** = Ok işaretli logo oluşturur. <:yan:798889269024391180> \n <:yan:798889269024391180> **x!green** = Yeşil logo oluşturur. <:yan:798889269024391180> \n <:yan:798889269024391180> **x!alev** = Alevli logo oluşturur. <:yan:798889269024391180> \n <:yan:798889269024391180> **x!red** = Kırmızı logo oluşturur. <:yan:798889269024391180>")
.setImage("https://cdn.discordapp.com/attachments/798485372392439818/798889938087182376/excellent-sticker-excellent-rounded-isolated-sign-excellent-excellent-sticker-158772142.jpg")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["logo"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logo',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!logo'
}