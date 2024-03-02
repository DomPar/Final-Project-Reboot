const {DataTypes} = require("sequelize")
const {connection} = require("../../database/index")

const Shelter = connection.define(
    "shelter",
    {
        shelterName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
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
