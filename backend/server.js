const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

const PORT = 5000 || process.env.PORT
const dbUrl = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PWD}@cluster0.a4ouc.mongodb.net/Sapling?retryWrites=true&w=majority`

mongoose.connect(dbUrl)
.then(()=>console.log("database connected"))

app.get("/",(req,res)=> {

    res.send("Welcome to Elite Hackers Backend")
})
app.post("/login", (req, res)=> {

})

app.listen(PORT,()=>console.log(`Listening to port ${PORT}`))