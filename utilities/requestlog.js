//  This is the Request Logger Middleware

const fs = require('fs');
const requestlog=(req,res,next) => {
   fs.appendFileSync( 'req_log.txt',`${new Date()} - ${req.method} - ${req.url} \n`)
   console.log( `${new Date()} - ${req.method} - ${req.url} \n`)

   next()
}

module.exports =requestlog

