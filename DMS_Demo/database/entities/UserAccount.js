const Sequelize = require('sequelize');
const { configDB } = require('../../configuration');
const { configUser } = require('../../configuration');
const { configPwd } = require('../../configuration');
const { config } = require('../../configuration');

const sequelize = new Sequelize(configDB, configUser, configPwd, config);
const Contact = require('./Contact')(sequelize);
const userModel = require('../../models/user');
const contactModel = require('../../models/contact');
const usercontactModel = require('../../models/usercontact');

module.exports = (sequelize) => {
    const User = sequelize.define('UserAccount', {
        Id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        Username: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        PasswordHash: {
            type: Sequelize.STRING,
        },
        ContactId: {
            type: Sequelize.INTEGER
        },
        LoginEnabled: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        LastLogon: {
            type: Sequelize.DATE
        },
        TimeZone: {
            type: Sequelize.STRING,
        },
        CreatedBy: {
            type: Sequelize.INTEGER
        },
        CreatedOn: {
            type: Sequelize.DATE
        },
        DeletedBy: {
            type: Sequelize.INTEGER,
        },
        DeletedOn: {
            type: Sequelize.DATE,
        },
        LastModifiedBy: {
            type: Sequelize.INTEGER
        },
        LastModifiedOn: {
            type: Sequelize.DATE
        },

    }, { timestamps: false,freezeTableName: true});
    
    // Map to application model so we don't have tight coupling 
    // throughout the app with the db implemenation
    User.prototype.toUserModel = function toUserModel() {
        return new userModel(this.Id, this.Username, this.PasswordHash, this.ContactId, this.LoginEnabled, this.LastLogon, this.TimeZone, this.CreatedBy, this.CreatedOn, this.DeletedBy, this.DeletedOn, this.LastModifiedBy, this.LastModifiedOn);
    };
    User.prototype.toUserContactModel = function toUserContactModel() {
        return new usercontactModel(User,Contact);
    };

    return User;
};

