import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import userRoutes from './routes/user.js'

const app = express()

dotenv.config()

app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

const PORT = process.env.PORT || 3000

app.use('/user', userRoutes)

app.get('/', (req, res) => {
    res.send("Welcome to Elite Hacker's Backend!")
})

const dbUrl = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PWD}@cluster0.a4ouc.mongodb.net/Sapling?retryWrites=true&w=majority`

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
}).then(() => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
}).catch((error) => console.log(error.message))

mongoose.connection.on("connected", () => {
    console.log("Mongodb bridge connected")
})

mongoose.connection.on("error", (err) => {
    console.log(`Mongoose connection ERROR: ${err}`)
})

mongoose.connection.on("disconnected", () => {
    console.log("Mongoose connection disconnected")
})