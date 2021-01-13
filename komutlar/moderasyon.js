const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Excellent v12 sürümüyle sizlerle.")
.setTitle("<:koruma:798883296615858237> Excellent Moderasyon Komutları <:koruma:798883296615858237>")
 .setTimestamp()
.setDescription("<:koruma:798883296615858237> **x!sil** = Yazdığınız miktarda mesajı siler. <:koruma:798883296615858237> \n <:koruma:798883296615858237> **x!ban** = Etiketlediğiniz kişiyi banlarsınız. <:koruma:798883296615858237> \n <:koruma:798883296615858237> **x!kick** = Etiketlediğiniz kişiyi atarsınız. <:koruma:798883296615858237> \n <:koruma:798883296615858237> **x!duyuru** = Bota duyuru yaptırırsınız. <:koruma:798883296615858237> \n <:koruma:798883296615858237> **x!küfür** = Küfür engel sistemini açarsınız. <:koruma:798883296615858237> \n <:koruma:798883296615858237> **x!reklam** = Reklam engel sistemi açarsınız. <:koruma:798883296615858237> \n <:koruma:798883296615858237> **x!slowmode** = Yavaş modu ayarlarsınız. <:koruma:798883296615858237> \n <:koruma:798883296615858237> **x!forceban** = Birisine id ban atarsınız. <:koruma:798883296615858237> \n <:koruma:798883296615858237> **x!unban** = Birisinin banını açarsınız. <:koruma:798883296615858237> \n <:koruma:798883296615858237> **x!sa-as** = Bot biri sa dedimi cevap verir. <:koruma:798883296615858237> \n <:koruma:798883296615858237> **x!sunucubilgi** = Sunucu bilgilerini görürsün. <:koruma:798883296615858237> \n <:koruma:798883296615858237> **x!üyedurum** = Üyelerin durumlarını görürsün. <:koruma:798883296615858237> \n <:koruma:798883296615858237> **x!çekiliş** = Çekiliş başlatırsınız. <:koruma:798883296615858237>")
.setImage("https://cdn.discordapp.com/attachments/798485372392439818/798889938087182376/excellent-sticker-excellent-rounded-isolated-sign-excellent-excellent-sticker-158772142.jpg")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!moderasyon'
}