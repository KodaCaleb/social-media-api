const { connect, connection } = require('mongoose');

connect('mongodb://localhost:27017/social_network_db')

module.exports = connection;