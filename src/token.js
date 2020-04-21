"use strict";

/// use the command `git update-index --assume-unchanged <file>`
/// and the commend `git update-index --no-assume-unchanged <file>`
/// to toggle hiding the secret token from version control
import { token } from './secret_token.json';

export default (function () {
    switch (process.env.NODE_ENV) {
        case 'production':
            return process.env.BOT_TOKEN;

        case 'development':
            return token;

        default:
            return token;
    }
})();