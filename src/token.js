/// use the command `git update-index --assume-unchanged src/secret_tokens.json`
/// and the commend `git update-index --no-assume-unchanged src/secret_tokens.json`
/// to toggle hiding the secret tokens from version control
import secretTokens from './secret_tokens.json';

export default (function () {
    switch (process.env.NODE_ENV) {
        case 'production':
            return process.env.BOT_TOKEN;

        case 'development':
            return secretTokens.discord;

        default:
            return secretTokens.discord;
    }
})();