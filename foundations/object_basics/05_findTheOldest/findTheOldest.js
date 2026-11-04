const findTheOldest = function(objs) {
    let retval;
    let date = new Date()
    let currDate = date.getFullYear();
    let topAge = 0;
        for (let obj of objs){
            if("yearOfBirth" in obj && "yearOfDeath" in obj){
                let age = obj.yearOfDeath - obj.yearOfBirth;
                if(topAge < age){
                    topAge = age;
                    retval = obj;
                }
            }
            else if("yearOfBirth" in obj && !("yearOfDeath" in obj)){
                let age = currDate - obj.yearOfBirth;
                if(topAge < age){
                    topAge = age;
                    retval = obj;
                }
            }
    }
    return retval;
};

// Do not edit below this line
module.exports = findTheOldest;
