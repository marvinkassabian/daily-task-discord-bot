"use strict";

import config from './config.json';

export default (function () {
    switch (process.env.NODE_ENV) {
        case 'production':
            return process.env.BOT_TOKEN;

        case 'development':
            return config.token;

        default:
            return config.token;
    }
})();