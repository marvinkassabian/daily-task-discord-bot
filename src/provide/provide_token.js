"use strict";

import token from '../token.js';

export default function (container) {
    container.service('token', _container => token);
};
