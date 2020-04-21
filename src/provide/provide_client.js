"use strict";

import Client from '../client.js';

export default function (container) {
  container.service('Client', container => Object.create(Client).init(container.Logger, container.token));
};
