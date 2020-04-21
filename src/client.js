import Discord from 'discord.js';

const Client = {};

Client.init = function (logger, token, service) {
  this.logger = logger;
  this.client = new Discord.Client();
  this.token = token;
  this.service = service;

  return this;
};

Client.start = function () {
  this.client.on('ready', () => {
    this.logger.log(`Logged in as ${this.client.user.tag}!`);
  });

  this.client.on('message', (message) => {
    if (message.content === 'ping') {
      message.reply('pong');
    }
  });

  this.client.on('debug', this.logger.log.bind(this.logger));

  this.client.login(this.token).catch(this.logger.error.bind(this.logger));
};

export default Client;
