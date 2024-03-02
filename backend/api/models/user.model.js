const {DataTypes} = require("sequelize")
const {connection} = require("../../database/index")

const User = connection.define(
    "user",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.ENUM("admin", "user"),
            defaultValue: 'user'
        },
        followers: {
            type: DataTypes.INTEGER,
            defaultValue: '0'
        },
    }
)

module.exports = {
    User
}
