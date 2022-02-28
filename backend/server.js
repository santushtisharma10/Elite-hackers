const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const PORT = 5000 

app.get("/",(req,res)=> {

    res.send("Welcome to Elite Hackers Backend")
})

app.listen(PORT,()=>console.log(`Listening to port ${PORT}`))