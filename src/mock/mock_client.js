"use strict";

const Client = {};
Client.init = function (logger, service) {
  this.logger = logger;
  this.service = service;
};

Client.start = function () {
  this.on('ready', () => {
    this.logger.log(`Logged in as ${this.client.user.tag}!`);
  });

  this.client.on('message', message => {
    if (message.content === 'ping') {
      message.reply('pong');
    }
  });

  this.client.on('debug', this.logger.log);

  this.logger.log('Attempting login');
};

Client.on = function (eventType) {
  if (eventType === 'ready') {
    this.service.onReady();
  } else if (eventType === 'message') {
    const message = Object.create().init();
    this.service.onMessage();
  }
}

export default Client;
