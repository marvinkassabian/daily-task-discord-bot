module.exports = Object.freeze({
    name: "log-message",
    execute: ({ $logger }) => (message, _args) => {
        $logger.log(message);
    }
})