require('dotenv').config(
    {
        path: "../.env"
    }
);

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbName = process.env.DB_NAME;
const dbHost = process.env.DB_HOST;

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    host: dbHost,
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log('Conexão realizada com sucesso!')
    })
    .catch((err) => {
        console.error('Erro de conexão com o banco de dados!', err)
    })

module.exports = sequelize