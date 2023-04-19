//  Validator Functions are stored Here

exports.ValidateName= function(name) {
    if (name.trim().length >3 && name.trim().length<20) {
        return true
        
    }
    else
    return false

};

exports.ValidateSalary=function(salary){
    if (salary>0 && salary<100000) {
        return true
    }
    else 
    return false
};