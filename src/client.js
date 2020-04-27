import Discord from 'discord.js';

const Client = {};

Client.init = function (logger, token, config, api) {
  this.logger = logger;
  this.discordClient = new Discord.Client();
  this.token = token;
  this.config = config;
  this.api = api;

  return this;
};

Client.start = function () {

  this.api.postAda();

  this.discordClient.once('ready', () => {
    this.logger.log(`Logged in as ${this.discordClient.user.tag}!`);
  });

  const prefix = this.config.prefix;

  this.discordClient.on('message', (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot)
      return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
      message.channel.send('Pong.');
    } else if (command === 'beep') {
      message.channel.send('Boop.');
    } else if (command === 'server') {
      message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nCreated at: ${message.guild.createdAt}\n Region: ${message.guild.region}`);
    } else if (command === 'user-info') {
      message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    } else if (command === 'args-info') {
      if (!args.length) {
        return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
      } else if (args[0] === 'foo') {
        return message.channel.send('bar');
      }

      message.channel.send(`First argument: ${args[0]}`);

      message.channel.send(`Command name: ${command}\nArguments: ${args}`);
    }

  });

  this.discordClient.on('debug', this.logger.log.bind(this.logger));

  this.discordClient.login(this.token).catch(this.logger.error.bind(this.logger));
};

export default Client;
