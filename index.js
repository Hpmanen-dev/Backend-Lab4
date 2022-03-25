const express = require("express");
const app = express()
const dotenv = require("dotenv")
const PORT = process.env.PORT || 1335
const mongoose = require("mongoose")

dotenv.config()

mongoose.connect(process.env.DB_Connection, {useUnifiedTopology: true, useNewUrlParse: true}, () => {
    console.log("Connected!")
})

app.use(express.static('public'));
app.use(express.json)


app.listen(PORT, () => {
    console.log("Listening on port: " + PORT)
})