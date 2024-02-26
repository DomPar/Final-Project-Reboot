require('dotenv').config()


const {
    checkDB
} = require('./database/index')

checkDB()