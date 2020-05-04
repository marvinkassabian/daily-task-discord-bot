const createInjector = require('./src/create_injector.js');

const container = createInjector();
const client = container.render("$client");
client.run();