const Sequelize = require('sequelize');
const contactModel = require('../../models/contact');


module.exports = (sequelize) => {
    const Contact = sequelize.define('Contact', {
        Id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        Salutation: {
            type: Sequelize.STRING,
        },
        FirstName: {
            type: Sequelize.STRING,
        },
        LastName: {
            type: Sequelize.STRING
        },
        MiddleInitials: {
            type: Sequelize.STRING,
        },
        Suffix: {
            type: Sequelize.STRING
        },
        BirthDate: {
            type: Sequelize.DATE,
        },
        AddressLine1: {
            type: Sequelize.STRING
        },
        AddressLine2: {
            type: Sequelize.STRING
        },
        AddressLine3: {
            type: Sequelize.STRING,
        },
        City: {
            type: Sequelize.STRING,
        },
        State: {
            type: Sequelize.STRING
        },
        PostalCode: {
            type: Sequelize.STRING
        },
        DayPhone: {
            type: Sequelize.STRING
        },
        EveningPhone: {
            type: Sequelize.STRING
        },
        Email: {
            type: Sequelize.STRING,
        },
        MobilePhone: {
            type: Sequelize.STRING,
        },
        Company: {
            type: Sequelize.STRING
        },
        Fax: {
            type: Sequelize.STRING
        },
        Country: {
            type: Sequelize.STRING
        },

    }, { timestamps: false, freezeTableName: true });

    // Map to application model so we don't have tight coupling 
    // throughout the app with the db implemenation
    Contact.prototype.toContactModel = function toContactModel() {
        return new contactModel(this.Salutation, this.FirstName, this.LastName, this.MiddleInitials, this.Suffix, this.BirthDate, this.AddressLine1, this.AddressLine2, this.AddressLine3, this.City, this.State, this.PostalCode, this.DayPhone, this.EveningPhone, this.Email, this.MobilePhone, this.Company, this.Fax, this.Country);
    };

    return Contact;
};

