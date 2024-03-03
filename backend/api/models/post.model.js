const {DataTypes} = require("sequelize")
const {connection} = require("../../database/index")

const Post = connection.define(
    "post",
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        media: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        likes: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    }
)

module.exports = {
    Post
}
