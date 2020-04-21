"use strict";

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