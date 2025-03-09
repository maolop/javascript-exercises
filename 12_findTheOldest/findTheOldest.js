const findTheOldest = function(people) {
    let maxAge = 0

    for (person of people) {
        if (!("yearOfDeath" in person))
            person.age = new Date().getFullYear() - person.yearOfBirth
        else
            person.age = person.yearOfDeath - person.yearOfBirth
    }

    for (person of people)
        if (person.age > maxAge) maxAge = person.age

    for (person of people)
        if (person.age === maxAge) return person

};

// Do not edit below this line
module.exports = findTheOldest;
