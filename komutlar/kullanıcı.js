const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Destiny v12 sürümüyle yeniden sizlerle.")
.setTitle("<a:Yldz:742698148329291826> Destiny Kullanıcı Komutları <a:Yldz:742698148329291826>")
 .setTimestamp()
.setDescription("<:s:798887741642506292> **-avatar** = Avatarınıza bakarsınız. <:s:798887741642506292> \n <:s:798887741642506292> **-yetkilerim** = Yetkilerini görürsün. <:s:798887741642506292> \n <:s:798887741642506292> **-profil** = Profilini görürsün. <:s:798887741642506292> \n <:s:798887741642506292> **-sunucuresmi** = Sunucu resmini gösterir. <:s:798887741642506292> \n <:s:798887741642506292> **-ping** = Botun Pingine Bakarsın. <:s:798887741642506292> \n <:s:798887741642506292> **-id** = Birisinin id'sine Bakarsın. <:s:798887741642506292> \n <:s:798887741642506292> **-davet** = Beni Sunucuna Ekle. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-botbilgi** = Bot istatistiklerini görürsünüz. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-bug-bildir** = Yazdığınız bug'u yapımcılarıma bildirir. <a:developeremoji:749525084586115153>")
.setImage("https://cdn.discordapp.com/attachments/744536225230094360/751100899836821534/Night_Sky_Mountain_Decorative_Border_Youtube_Thumbnail.png")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!kullanıcı'
}