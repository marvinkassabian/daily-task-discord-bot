module.exports = ({ config }) => message => {
    const prefix = config.prefix;
    const [head, ...tail] = message.content.slice(prefix.length).split(/ +/);
    const command = head.toLowerCase();
    const args = Object.freeze(tail);
    const isValid = message.content.startsWith(prefix) && !message.author.bot;

    return Object.freeze({
        isValid,
        command,
        args,
    });
};