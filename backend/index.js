const express = require('express')
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const playerRoute = require('./routes/players')
dotenv.config()
const cors = require('cors')
mongoose.connect(process.env.MONGO_URL, ()=>{
    console.log("db connected");
})

app.use(cors())

app.use(express.json())
app.use('/icc', playerRoute)


app.listen(5000, ()=>{
    console.log("listening");
})