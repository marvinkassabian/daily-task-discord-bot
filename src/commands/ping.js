module.exports = Object.freeze({
    name: "ping",
    execute: () => (message, _args) => {
        message.channel.send('Pong.');
    }
})