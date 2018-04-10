const Sequelize = require('sequelize');
const { configDB } = require('../configuration');
const { configUser } = require('../configuration');
const { configPwd } = require('../configuration');
const { config } = require('../configuration');

const sequelize = new Sequelize(configDB, configUser, configPwd, config);

function create({ Role,db }) {
    
    async function getRoleInfo(role) {
        var newrole = role; 
        if(!newrole.Id)
            newrole.Id=null;
        const query = 'RoleGet @roleId=\'' + newrole.Id ;
        
        console.log(query);
        const usercontact = await sequelize.query(query, { type: sequelize.QueryTypes.SELECT});
        const user1 = User.build(usercontact);
        const contact = Contact.build(usercontact);
        //user1.setContacts(contact);
        //const uc = user1.toUserModel();
        //.toUserContactModel(user1, contact);
        //console.log(user1);
        const uc = {
            "user": user1,
            "contact":contact

        }
        return uc;

    }
    return {
        getRoleInfo
        };
}

module.exports.create = create;