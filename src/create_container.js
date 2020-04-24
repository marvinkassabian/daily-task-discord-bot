import Container from './container.js';
import Client from './client.js';
import Api from './api.js';
import secretTokens from './secret_tokens.js';
import config from './config.json';
import Logger from './logger.js';

export default function () {
    let container = Object.create(Container).init();

    container.service('Logger', _container => Object.create(Logger).init());
    container.service('Api', _container => Object.create(Api).init());
    container.service('Client', container => Object.create(Client).init(
        container.Logger,
        secretTokens.discord,
        config));

    return container;
};
