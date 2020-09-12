const DbManager = require('../controller/DbManager');
DbManager.connectMongoDb();

const votingRoutes = require('./voting');
const frontEndRoutes = require('./frontend');

module.exports = (app) => {
    votingRoutes(app)
    frontEndRoutes(app)
    return
}