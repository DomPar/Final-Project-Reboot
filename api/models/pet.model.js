const {DataTypes} = require("sequelize")
const {connection} = require("../../database/index")

const Pet = connection.define(
    "pet",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        preferences: {
            type: DataTypes.STRING,
            allowNull: false,
            
        }
    }
)

module.exports = {
    Pet
}