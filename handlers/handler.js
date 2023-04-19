// handler File for app.js
const fs = require("fs");
const employee = require("../models/Schema");
const validators = require("../utilities/validator");

//  paths Functions****************************************************************

exports.home = (req, res) => {
  res.send(" home page");
};
exports.contact = (req, res) => {
  res.send("this is contact page :)");
};
exports.services = (req, res) => {
  res.send("services");
};
exports.users = (req, res) => {
  res.send("users");
};
exports.employees = (req, res) => {
  res.send("employees");
};

exports.register = (req, res) => {
  fs.appendFileSync(
    "user.txt",
    ` {name : ${req.body.username}, password : ${req.body.password} }\n`
  );
  console.log(`Registering ${req.body.username}\n`);
  console.log(`name : ${req.body.username}, password : ${req.body.password}`);
  res.send(" User  registration successful");
};

// Database functions****************************************************************

exports.insertEmp = async (req, res) => {
  
  try {
    if (validators.ValidateName(req.body.name)&& validators.ValidateSalary(req.body.salary)) {
      const newemp = await employee.create(req.body)
      res.status(201).json({
        status:'success',
        data:{
          newemp,
        }
      })
      
    }
    else if(!validators.ValidateName(req.body.name)){
      res.status(400).json({
        status:'error',
        results:'Enter a name b/w 3-20 characters',
      })
    }
    else if(!validators.ValidateSalary(req.body.salary)){
      res.status(400).json({
        status:'error',
        results:'Enter salary greater than 0 and less than 1 lakh'
      })
    }
    
  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.errmsg,
    })
  }
};

exports.findEmp = async (req, res) => {

  try {
    const result = await employee.findOne({ empid: req.params.id },{ _id: 0, __v: 0 })
    if (result !== null) {
      // res.status(200).json({
      //   status: "success",
      //   data: result,
      // });
      res.send(result)
      
    } else {
      res.status(200).json({
        status: "success",
        message: " No Employee found",
      });
    }
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.allEmp = async (req, res) => {
  try {
    let result = await employee.find({}, { _id: 0, __v: 0 });
    if (result.length > 0) {
      // res.status(200).json({
      //   status: "success",
      //   results: result.length,
      //   data: {
      //     result,
      //   },
      // });
      
      // console.log(result)
      res.send(result)
    } else {
      res.status(400).json({
        status: "success",
        data: {
          message: "No records found in the database",
        },
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteEmp = async (req, res) => {
  const delDat = await employee.deleteOne({ empid: req.params.id });
  if (delDat.deletedCount == 0) {
    res.status(404).json({
      status: 'fail',
      message: `No record found with this ID ${req.params.id}`
    })
  }
  else {
    res.status(200).json({
      status: 'success',
      message: `Record with ID ${req.params.id} deleted successfully`
    })
  }
};

exports.updateEmp = async (req, res) => {
  let emp = await employee.findOneAndUpdate(
    { empid: req.params.id },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (emp != null) {
    res.status(200).json({
      status: "success",
      data: {
        emp,
      },
    });
  } else {
    res.status(400).json({
      status: "success",
      data: {
        message: `No record found with this ID ${req.params.id}`,
      },
    });
  }
};

exports.invalid = (req, res) => {
  var err = new Error();
  err.message = "Invalid Route";
  err.status = 404;
  throw err;
};
