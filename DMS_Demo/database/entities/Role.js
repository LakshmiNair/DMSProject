const Sequelize = require('sequelize');
const roleModel = require('../../models/role');

module.exports = (sequelize) => {
    const Role = sequelize.define('Role', {
        Id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        Name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        Description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        IsEnabled: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },

    }, { timestamps: false, freezeTableName: true });

// Map to application model so we don't have tight coupling 
// throughout the app with the db implemenation
Role.prototype.toRoleModel = function toRoleModel() {
    return new roleModel(this.Id, this.Name, this.Description, this.IsEnabled);
};

return Role;
};
