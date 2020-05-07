const config = require('./config.json');

module.exports = () => {
    const Config = {
        firebase: {
            service_account: {
                type: process.env.FIREBASE_SERVICE_ACCOUNT_TYPE,
                project_id: process.env.FIREBASE_SERVICE_ACCOUNT_PROJECT_ID,
                private_key_id: process.env.FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY_ID,
                private_key: process.env.FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY,
                client_email: process.env.FIREBASE_SERVICE_ACCOUNT_CLIENT_EMAIL,
                client_id: process.env.FIREBASE_SERVICE_ACCOUNT_CLIENT_ID,
                auth_uri: process.env.FIREBASE_SERVICE_ACCOUNT_AUTH_URI,
                token_uri: process.env.FIREBASE_SERVICE_ACCOUNT_TOKEN_URI,
                auth_provider_x509_cert_url: process.env.FIREBASE_SERVICE_ACCOUNT_AUTH_PROVIDER_X509_CERT_URL,
                client_x509_cert_url: process.env.FIREBASE_SERVICE_ACCOUNT_CLIENT_X590_CERT_URL
            },
            database_url: process.env.FIREBASE_DATABASE_URL
        },
        discord: {
            bot_token: process.env.DISCORD_BOT_TOKEN,
        },
        ...config
    };

    return Object.freeze(Config);
};