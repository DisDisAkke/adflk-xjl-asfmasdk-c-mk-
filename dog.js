const Discord = require('discord.js');

//Defined it as client
const client = new Discord.Client();

const config = require('./config.json');

//Insert bot prefix
const prefix = '=='

//Install snekfetch (npm install snekfetch)
const {get} = require("snekfetch"); 

client.on('ready', () =>{
	console.log('I am ready!')
});


client.on('message', message => {
	if (message.content.startsWith(prefix + 'cat')) {
		try {
			get('https://random.cat/meow').then(response => {
				message.channel.send({files: [{attachment: response.body.file, name: `cat.${response.body.file.split('.')[2]}`}]});
			})
		} catch (e) {
			console.log(e);
		}
	};
});

//Login to discord
client.login('NDA1MzYyNDEzNjcyNTk1NDU3.DU9I9w.2vvEY0X7rPX_zgJpVC1K4Ebamck');
