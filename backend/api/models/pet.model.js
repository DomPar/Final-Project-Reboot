const {DataTypes} = require("sequelize")
const {connection} = require("../../database/index")

const Pet = connection.define(
    "pet",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        media: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
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