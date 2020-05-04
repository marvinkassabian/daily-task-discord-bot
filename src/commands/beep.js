module.exports = Object.freeze({
    name: "beep",
    execute: () => (message, _args) => {
        message.channel.send('Boop.');
    }
})