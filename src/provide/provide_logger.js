"use strict";

import Logger from '../logger.js';

export default function (container) {
  container.service('Logger', container => Object.create(Logger).init());
};
