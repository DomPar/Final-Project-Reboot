const {DataTypes} = require("sequelize")
const {connection} = require("../../database/index")

const Shelter = connection.define(
    "shelter",
    {
        shelterName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        avatar: {
            type: DataTypes.STRING,
            defaultValue: 'https://miro.medium.com/v2/resize:fit:720/1*W35QUSvGpcLuxPo3SRTH4w.png'
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cif: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tlf: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        role: {
            type: DataTypes.ENUM("manager", "user"),
            defaultValue: 'manager'
        },
        
    }, {
        timestamps:false
    }
)

module.exports = {
    Shelter
}
