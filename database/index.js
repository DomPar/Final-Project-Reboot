const {Sequelize} = require('sequelize')

const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false
    })

const checkDB = async () => {
    try {
        await connection.authenticate();
        console.log('Connection OK.');
      } catch (error) {
        console.error('Pachuru:', error);
      }
}

module.exports = {
    connection,
    checkDB
} 
