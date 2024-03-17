const findTheOldest = function(people) {
    let age = [];

    for (obj in people) {
        age[obj] = people[obj].yearOfDeath - people[obj].yearOfBirth;
    }

    let oldest =  Math.max.apply(null, age);

    for (obj in people) {
        if ((people[obj].yearOfDeath - people[obj].yearOfBirth) === oldest) {
            return people[obj];
        }
    }
};

// Do not edit below this line
module.exports = findTheOldest;
