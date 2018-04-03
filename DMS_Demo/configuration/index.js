const configDB = 'DMS';
const configUser = 'NextGencia'
const configPwd = 'nextgencia2018'
const config =  {
    host: 'nextgencia.cuze9uvn3shp.us-east-1.rds.amazonaws.com',
    dialect:'mssql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

};

module.exports = { configDB, configUser, configPwd, config }