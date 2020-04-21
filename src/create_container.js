"use strict";

import Container from './container.js';
import Client from './client.js';
import Service from './service.js';
import Api from './api.js';
import token from './token.js';

export default function () {
    let container = Object.create(Container).init();

    container.service('Logger', _container => Object.create(Logger).init());
    container.service('token', _container => token);
    container.service('Client', container => Object.create(Client).init(container.Logger, container.token, container.Service));
    container.service('Api', _container => Object.create(Api).init());
    container.service('Service', container => Object.create(Service).init(container.Api))

    return container;
};
