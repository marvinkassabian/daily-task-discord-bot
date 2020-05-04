module.exports = ({ $config: { prefix } }) => ({ content, author }) => {
    if (!content.startsWith(prefix) || author.bot)
        return Object.freeze({ isValid: false });

    const [head, ...tail] = content.slice(prefix.length).split(/ +/);
    const command = head.toLowerCase();
    const args = Object.freeze(tail);

    return Object.freeze({
        isValid: true,
        command,
        args,
    });
};