const admin = require('firebase-admin');

module.exports = ({ $config }) => {
    admin.initializeApp({
        credential: admin.credential.cert($config.firebase.service_account),
        databaseURL: $config.firebase.database_url,
    });

    const firestore = admin.firestore();

    const postMessageLog = (message) => {
        firestore
            .collection(`guilds/${message.guild.id}/command_logs`)
            .add({
                message: {
                    id: message.id,
                    content: message.content,
                    createdTimestamp: message.createdTimestamp,
                },
                author: {
                    id: message.author.id,
                    username: message.author.username,
                }
            });
    };

    const postTask = (guildId, task) => {
        firestore
            .collection(`guilds/${guildId}/tasks`)
            .add(task);
    };

    return Object.freeze({
        postMessageLog,
    });
};