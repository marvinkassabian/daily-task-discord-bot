const Discord = require('discord.js');

module.exports = ({ logger, config, parseMessage, getCommands }) => {
  const discordClient = new Discord.Client();
  const commands = getCommands();

  const run = () => {
    discordClient.once('ready', () => {
      logger.log(`Logged in as ${discordClient.user.tag}!`);
    });

    discordClient.on('message', message => {
      const { command, args, isValid } = parseMessage(message);

      if (!isValid)
        return;

      if (commands.has(command))
        commands.get(command)(message, args);
    });

    discordClient.on('debug', info => logger.info(info));

    discordClient.login(config.discord.bot_token).catch(reason => logger.error(reason));
  };

  return Object.freeze({
    run,
  });
}