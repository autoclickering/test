const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("510213840068411413")
setInterval(function() {
channel.send(♥الله اكبر);
}, 25)
})
 
 
client.login(process.env.BOT_TOKEN);
