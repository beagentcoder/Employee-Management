const reqfilter = (req, res, next) => {
    if (!req.query.age) {
      res.send("Please provide a age")
    }
    else if (req.query.age < 18) {
      res.send("Acess Denied")
    }
    else {
      next()
    } 
 }
 

 module.exports ={reqfilter}