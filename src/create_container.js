"use strict";

import Container from './container.js';
import provideLogger from './provide/provide_logger.js';
import provideApi from './provide/provide_api.js';
import provideClient from './provide/provide_client.js';
import provideToken from './provide/provide_token.js';

export default function createContainer() {
    let container = Object.create(Container).init();

    provideLogger(container);
    provideApi(container);
    provideClient(container);
    provideToken(container);

    return container;
};
