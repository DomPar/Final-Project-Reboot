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

const syncModels = async () => {
    const {User} = require ('../api/models/user.model')
    const {Post} = require ('../api/models/post.model')
    const {Shelter} = require ('../api/models/shelter.model')
    try {
        await connection.sync()
        console.log("Model syncronized")
    } catch (error) {
        console.log("Error in sync")
    }
}

module.exports = {
    connection,
    checkDB,
    syncModels
} 
