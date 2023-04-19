// This is the ErrorLogger Middleware 


const fs = require('fs');
const errorLogger =  (err, req, res, next) => {
    if (err) {
            fs.appendFile('ErrorLogger.txt', `${new Date().toDateString()} - ${err.message}\n` ,  (error) => {
            if (error) {
                console.log("logging failed");
            }
        });
        if(err.status){
            res.status(err.status);
        }
        else{
            res.status(500)
        }
       
        res.json({
            status: 'error',
            message: err.message
          })
    }
    next()
}
module.exports = errorLogger;