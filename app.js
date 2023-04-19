//  Main File Of the Project NodeApp

const error_logger = require("./utilities/errorlogger")
const reqlog = require("./utilities/requestlog")
const express = require("express")
const bodyparser = require('body-parser')
const route = require('./routes/route')
const cors = require("cors")
var corsOp = {
    origin: ['http://127.0.0.1:5500', 'null'],               // allowed origin(s)
    methods: ['GET', 'POST', 'DELETE', 'PUT'],               // allowed HTTP methods
}

const app = express()
app.use(cors(corsOp))
app.use(reqlog)                                             // use for logging server requests
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))


app.use('/', route)
app.use('/', error_logger)                                   //use of error logger is always at last

const port = process.env.PORT || 4000                        // Edit here to change the port on which node server is running
app.listen(port, () => {
    console.log(`server running on port ${port}...`)
})



module.exports = app