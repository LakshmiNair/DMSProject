const Sequelize = require('sequelize');
const { configDB } = require('../configuration');
const { configUser } = require('../configuration');
const { configPwd } = require('../configuration');
const { config } = require('../configuration');
var db = {};

const sequelize = new Sequelize(configDB, configUser, configPwd, config);
db.Sequelize = Sequelize;
db.sequelize = sequelize;
const Product = require('./entities/Product')(sequelize);
const User = require('./entities/UserAccount')(sequelize);
const Contact = require('./entities/Contact')(sequelize);
db.User = require('./entities/UserAccount')(sequelize);
db.Contact = require('./entities/Contact')(sequelize);
//sequelize.sync();
User.belongsTo(db.Contact, { foreignKey: 'ContactId', sourceKey: 'Id' });
//db.User.belongsTo(db.Contact, { foreignKey: 'ContactId', sourceKey: 'Id' });
//db.Contact.hasOne(db.User, { foreignKey: 'ContactId', sourceKey: 'Id' }); 


// TODO: Specify your models here
module.exports = {
    Product,
    User,
    Contact,
    db,
    //sync: sequelize.sync.bind(this),
    close: () => sequelize.connectionManager.close(),
};