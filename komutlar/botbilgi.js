const  Discord = require("discord.js"); 
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async(client, message, args) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('<a:zil:796394115628662826> İstatistik;')
    .addField('<a:zil:796394115628662826> Gecikme: ', client.ws.ping + 'ms')
    .addField('<a:zil:796394115628662826> Çalışma Süresi: ', `${duration}`)
    .addField('<a:zil:796394115628662826> Kullanıcılar:', client.users.cache.size)
    .addField('<a:zil:796394115628662826> Kanallar:', client.channels.cache.size)
    .addField('<a:zil:796394115628662826> Sunucular:', client.guilds.cache.size)
    .addField('<a:zil:796394115628662826> Bellek kullanımı:', (process.memoryUsage().heapUsed / 2048 / 2048).toFixed(2))
    .addField('<a:zil:796394115628662826> Kütüphanesi;', `Discord.js`)
    .addField(`<a:zil:796394115628662826> Discord.js sürümü:`, Discord.version)
    .setTimestamp()
    message.channel.send(embed);
}
exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: ['istatistik', 'botbilgi', 'bot-bilgi','i'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi-bot',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'istatistik [bot durumunu yazar]'
};