const findTheOldest = function(people) {
    let age = [], currentYear = new Date().getFullYear();;
    for (obj in people) {
        if (people[obj].yearOfDeath === undefined) {
            age[obj] = currentYear - people[obj].yearOfBirth;
        } else {
            age[obj] = people[obj].yearOfDeath - people[obj].yearOfBirth;
        }
    }

    let oldest =  Math.max.apply(null, age);

    for (obj in people) {
        if ((people[obj].yearOfDeath - people[obj].yearOfBirth) === oldest || (currentYear - people[obj].yearOfBirth) === oldest) {
            return people[obj];
        }
    }
};

// Do not edit below this line
module.exports = findTheOldest;
