require('dotenv').config()
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")


const {
    checkDB,
    syncModels
} = require('./database/index')

const connectToDB = async () => {
    await checkDB()
    syncModels()
}

const startExpress = () => {
   try { 
    const app = express()

    const mainRouter = require('./api/routers/routers')

    app.use(morgan("dev"))
    app.use(cors())
    app.use(express.json())

    app.use('/api', mainRouter )

    app.listen(process.env.PORT, () => {
        console.log(`Express started. Listening on ${process.env.PORT}`)
    })
    } catch (error) {
        throw new Error (error)
    }
}

;(async () => {
    await connectToDB()
    startExpress()
})()
