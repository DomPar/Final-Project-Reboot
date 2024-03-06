const {Sequelize} = require('sequelize')


const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
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

const syncModels = async () => {
    try {
        await connection.sync({})
        console.log("Model syncronized")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    connection,
    checkDB,
    syncModels
} 
