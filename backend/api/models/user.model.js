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
        description: {
            type: DataTypes.STRING,
            defaultValue: ''
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
        avatar: {
            type: DataTypes.STRING,
            defaultValue: 'https://miro.medium.com/v2/resize:fit:720/1*W35QUSvGpcLuxPo3SRTH4w.png'
        }
    }
)

module.exports = {
    User
}
