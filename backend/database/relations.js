const {User} = require ('../api/models/user.model')
const {Post} = require ('../api/models/post.model')
const {Shelter} = require ('../api/models/shelter.model')
const {Pet} = require ('../api/models/pet.model')

const addRelations = () => {

    User.belongsToMany(Pet, { through: 'User_Pet', timestamps: false, onDelete: 'CASCADE'});
    Pet.belongsToMany(User, { through: 'User_Pet', timestamps: false, onDelete: 'CASCADE'});

    User.hasMany(Post)
    Post.belongsTo(User)

    User.hasMany(Shelter)
    Shelter.belongsTo(User)

    Shelter.hasMany(Pet)
    Pet.belongsTo(Shelter)


}

module.exports = addRelations