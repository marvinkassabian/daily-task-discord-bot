const getContainer = require('./src/get_container.js');

const container = getContainer();
const client = container.render("Client");
client.run();