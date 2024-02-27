const {User} = require ('../api/models/user.model')
const {Post} = require ('../api/models/post.model')
const {Shelter} = require ('../api/models/shelter.model')

const addRelations = () => {
    User.hasMany(Post)
    Post.belongsTo(User)

    User.hasMany(Shelter)
    Shelter.belongsTo(User)
}

module.exports = addRelations