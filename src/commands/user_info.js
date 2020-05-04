module.exports = Object.freeze({
    name: "user-info",
    execute: () => ({ channel, author }, _args) => {
        channel.send(`Your username: ${author.username}\nYour ID: ${author.id}`);
    }
})