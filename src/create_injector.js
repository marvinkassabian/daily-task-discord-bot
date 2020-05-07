const { Injector } = require('@marvinkassabian/dependency-injection');
const Logger = require('./logger.js');
const Api = require('./api.js');
const Client = require('./client.js');
const parseMessage = require('./parse_message.js');
const getCommands = require('./get_commands.js');
const Config = require('./config.js');

module.exports = () => {
    const injector = Injector({ prefix: '$' });

    injector.register("$config", Config);
    injector.register("$parseMessage", parseMessage);
    injector.register("$logger", Logger);
    injector.register("$api", Api);
    injector.register("$client", Client);
    injector.register("$getCommands", getCommands);

    return Object.freeze(injector);
}
