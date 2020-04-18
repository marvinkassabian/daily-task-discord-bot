(function main() {
  const Discord = require('discord.js');
  const client = new Discord.Client();

  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

  client.on('message', message => {
    if (message.content === 'ping') {
      message.reply('pong');
    }
  });

  client.on('debug', console.log);

  console.log('Attempting login');
  const token = process.env.BOT_TOKEN;
  client.login(token).catch(console.error);

})();
