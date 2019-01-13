const PORT = 3003

const express    = require('express');
const bodyParser = require('body-parser');
const allowCors  = require('../config/cors');

server = express();
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(allowCors);

server.listen(PORT, () => {
    console.log('Server running, PORT:', PORT);
});

module.exports = server;
