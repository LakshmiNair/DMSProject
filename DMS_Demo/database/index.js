const Sequelize = require('sequelize');
const { configDB } = require('../configuration');
const { configUser } = require('../configuration');
const { configPwd } = require('../configuration');
const { config } = require('../configuration');


const sequelize = new Sequelize(configDB, configUser,configPwd,config);
const Product = require('./entities/Product')(sequelize);
const User = require('./entities/UserAccount')(sequelize);
const Contact = require('./entities/Contact')(sequelize);
//sequelize.sync();



// TODO: Specify your models here
module.exports = {
    Product,
    User,
    Contact,
    //sync: sequelize.sync.bind(this),
    close: () => sequelize.connectionManager.close(),
};