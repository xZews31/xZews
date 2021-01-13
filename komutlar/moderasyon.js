const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Destiny v12 sürümüyle sizlerle.")
.setTitle("<a:Yldz:742698148329291826> Destiny Moderasyon Komutları <a:Yldz:742698148329291826>")
 .setTimestamp()
.setDescription("<:koruma:798883296615858237> **x!sil** = Yazdığınız miktarda mesajı siler. <:koruma:798883296615858237> \n <:koruma:798883296615858237> **x!ban** = Etiketlediğiniz kişiyi banlarsınız. <:koruma:798883296615858237> \n <:koruma:798883296615858237> **x!kick** = Etiketlediğiniz kişiyi atarsınız. <:koruma:798883296615858237> \n <:koruma:798883296615858237> **x!duyuru** = Bota duyuru yaptırırsınız. <:koruma:798883296615858237> \n <:koruma:798883296615858237> **x!küfür** = Küfür engel sistemini açarsınız. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **x!reklam** = Reklam engel sistemi açarsınız. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **x!slowmode** = Yavaş modu ayarlarsınız. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **x!forceban** = Birisine id ban atarsınız. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **x!unban** = Birisinin banını açarsınız. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **x!sa-as** = Bot biri sa dedimi cevap verir. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **x!sunucubilgi** = Sunucu bilgilerini görürsün. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **x!üyedurum** = Üyelerin durumlarını görürsün. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **x!çekiliş** = Çekiliş başlatırsınız. <a:developeremoji:749525084586115153>")
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