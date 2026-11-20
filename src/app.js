const express = require("express")
const authrouter = require("./routes/auth.route")


// medellwars
const app = express()
app.use(express.json())



// apis
// POST /api/create/create
app.use("/api/auth",authrouter)


module.exports = app