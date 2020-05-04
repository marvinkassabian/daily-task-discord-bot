const Logger = require('./logger.js');
const Api = require('./api.js');
const Client = require('./client.js');
const Container = require('./container.js');
const parseMessage = require('./parse_message.js');
const getCommands = require('./get_commands.js');
const Config = require('./config.js');

module.exports = () => {
    const container = Container();

    container.register("Config", _render => Config());
    container.register("parseMessage", render => parseMessage({
        $config: render("Config"),
    }));
    container.register("Logger", _render => Logger());
    container.register("Api", render => Api({
        $config: render("Config"),
    }));
    container.register("Client", render => Client({
        $logger: render("Logger"),
        $config: render("Config"),
        $parseMessage: render("parseMessage"),
        $getCommands: render("getCommands")
    }));
    container.register("getCommands", render => getCommands({
        $api: render("Api"),
        $logger: render("Logger"),
    }))

    return Object.freeze(container);
}