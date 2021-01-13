const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Excellent v12 sürümüyle yeniden sizlerle.")
.setTitle("<:s:798887741642506292> Excellent Kullanıcı Komutları <:s:798887741642506292>")
 .setTimestamp()
.setDescription("<:s:798887741642506292> **x!avatar** = Avatarınıza bakarsınız. <:s:798887741642506292> \n <:s:798887741642506292> **x!yetkilerim** = Yetkilerini görürsün. <:s:798887741642506292> \n <:s:798887741642506292> **x!profil** = Profilini görürsün. <:s:798887741642506292> \n <:s:798887741642506292> **x!sunucuresmi** = Sunucu resmini gösterir. <:s:798887741642506292> \n <:s:798887741642506292> **x!ping** = Botun Pingine Bakarsın. <:s:798887741642506292> \n <:s:798887741642506292> **x!id** = Birisinin id'sine Bakarsın. <:s:798887741642506292> \n <:s:798887741642506292> **x!davet** = Beni Sunucuna Ekle. <:s:798887741642506292> \n <:s:798887741642506292> **x!botbilgi** = Bot istatistiklerini görürsünüz. <:s:798887741642506292> \n <:s:798887741642506292> **x!bug-bildir** = Yazdığınız bug'u yapımcılarıma bildirir. <:s:798887741642506292>")
.setImage("https://cdn.discordapp.com/attachments/798485372392439818/798889938087182376/excellent-sticker-excellent-rounded-isolated-sign-excellent-excellent-sticker-158772142.jpg")
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