module.exports = Object.freeze({
    name: "args-info",
    execute: () => (message, _args) => {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        } else if (args[0] === 'foo') {
            return message.channel.send('bar');
        }

        message.channel.send(`First argument: ${args[0]}`);

        message.channel.send(`Command name: ${command}\nArguments: ${args}`);
    }
})