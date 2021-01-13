const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Destiny v12 sürümüyle yeniden sizlerle.")
.setTitle("<a:zill:798886583737647104>  Destiny Eğlence Komutları <a:zill:798886583737647104> ")
 .setTimestamp()
.setDescription("<a:zill:798886583737647104>  **x!tersyazı** = Bir Yazıyı Bot Ters Yazar. <a:zill:798886583737647104>  \n <a:zill:798886583737647104>  **x!mcskin** = Yazdığınız ismin minecraft görünüşünü atar. <a:zill:798886583737647104>  \n <a:zill:798886583737647104>  **x!fbi** = Bot FBi Gif Atar. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **x!token** = Tokenimi Öğrenmek İstemezmisin? <a:zill:798886583737647104>  \n <a:yan:750065080741134407> **x!düello** = Düello Atarsın. <a:zill:798886583737647104>  \n <a:zill:798886583737647104>  **x!wasted** = Polis tarafından yakalanırsın. <a:zill:798886583737647104>  \n <a:zill:798886583737647104>  **x!atatürk** = Dene ve gör... (1881-1938) <a:zill:798886583737647104> ")
.setImage("https://cdn.discordapp.com/attachments/744536225230094360/751100899836821534/Night_Sky_Mountain_Decorative_Border_Youtube_Thumbnail.png")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}