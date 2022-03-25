const express = require("express");
const app = express()
const dotenv = require("dotenv")
const PORT = process.env.PORT || 1335
const mongoose = require("mongoose")

dotenv.config()

mongoose.connect("mongodb+srv://Hampus:Hampus!23@hampusdatabase.r73oj.mongodb.net/Lab4Database?retryWrites=true&w=majority", {useUnifiedTopology: true, useNewUrlParse: true}, () => {
    console.log("Connected!")
})

app.use(express.static('public'));
app.use(express.json)


app.listen(PORT, () => {
    console.log("Listening on port: " + PORT)
})