// DATA LAYER
// UserRepository:
// is used to provide an abstraction on top of the database ( and possible other data sources)
// so other parts of the application are decoupled from the specific database implementation.
// Furthermore it can hide the origin of the data from it's consumers.
// It is possible to fetch the entities from different sources like inmemory cache, 
// network or the db without the need to alter the consumers code.
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const { configDB } = require('../configuration');
const { configUser } = require('../configuration');
const { configPwd } = require('../configuration');
const { config } = require('../configuration');

const sequelize = new Sequelize(configDB, configUser, configPwd, config);

function create({ User,Contact,db }) {
    async function getAll() {
        console.log(User)
        const users = await User.findAll();
        return users.map(user => user.toUserModel());
    }

    async function getUserInfo(user) {
        var newuser = user;
        const query = 'UserInfoGet @username=\'' + newuser.Username + '\' ,@userId=' + newuser.Id;
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

    async function add(usercontact) {
       

        const password = await bcrypt.hash(usercontact.user.PasswordHash, 10);

       const t = await sequelize.transaction();
       try {

           
           //save user
           var newuser = usercontact.user;
           var newcontact = usercontact.contact;
          
           newuser.PasswordHash = password;
           const query = 'UserAdd @username=\'' + newuser.Username + '\',@passwordHash=\'' + newuser.PasswordHash + '\',@hasLoginEnabled=\'' + newuser.LoginEnabled + '\', @timeZone=\'' + newuser.TimeZone + '\',@createdBy=' + newuser.CreatedBy + ',@salutation=\'' + newcontact.Salutation + '\',' +
               '@firstName=\'' + newcontact.FirstName + '\', @lastName =\'' + newcontact.LastName + '\',@middleInitials=\'' + newcontact.MiddleInitials + '\', @suffix = \'' + newcontact.Suffix + '\',@birthDate=' + newcontact.BirthDate + ', @addressLine1 = \'' + newcontact.AddressLine1 + '\',@addressLine2=\'' + newcontact.AddressLine2 + '\', @addressLine3 = \'' + newcontact.AddressLine3 + '\',@city=\'' + newcontact.City + '\', @state = \'' + newcontact.State + '\',@postalCode=\'' + newcontact.PostalCode + '\', @dayPhone = \'' + newcontact.DayPhone + '\',@eveningPhone=\'' + newcontact.EveningPhone + '\', @email = \'' + newcontact.Email + '\',@mobilePhone=\'' + newcontact.MobilePhone + '\', @company = \'' + newcontact.Company + '\',@fax=\'' + newcontact.Fax + '\', @country =\'' + newcontact.Country + '\',@result=0';
           const q = await sequelize.query(query, { transaction: t });
           
           console.log(q);
           
           await t.commit();
           return ("Inserted");

           //return result;
       }
       catch (error) {
           // Rollback transaction if any errors were encountered
           console.log(error);
           await t.rollback();
           console.log(t);
           return (error);
       }
    }

    //async function update(user) {

    //}

    return {
        add,
        getAll,
        getUserInfo,
    };
}

module.exports.create = create;