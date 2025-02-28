const { EmbedBuilder } = require('discord.js')
module.exports = {
    name: "ping",
    aliases: [''], 
    async run(client, message, args){
        let created = message.createdTimestamp
        message.channel.send(`pinging...`).then(x => {
            let responce = x.createdTimestamp - created
            x.edit({
                content: null,
                embeds:[
                    new EmbedBuilder()
                    .setTitle(`🏓 | Bot ping`)
                    .setColor(`${responce > 300 ? responce > 1000 ? "Red" : "Yellow" : "Green"}`)
                    .setDescription(`API ping: ${client.ws.ping}ms\nAnswered in: ${responce}ms`)
                ]
            })
        })
    }
}
