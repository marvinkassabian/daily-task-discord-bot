const fs = require('fs');

module.exports = ({ api, logger }) => () => {
    const commandFiles = fs
        .readdirSync('./src/commands')
        .filter(file => file.endsWith('.js'));
    const _commands = commandFiles
        .map(file => require(`./commands/${file}`))
        .map(command => [command.name, (message, args) => {
            api.logMessage(message);
            command.execute({ api, logger })(message, args);
        }]);
    const commands = new Map(_commands);

    logger.log(commands);

    return Object.freeze(commands);
}