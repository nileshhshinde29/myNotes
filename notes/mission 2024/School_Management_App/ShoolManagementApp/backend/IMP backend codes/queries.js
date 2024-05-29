
https://mongoosejs.com/docs/queries.html#executing
db.students.insertMany([
    { id: 1, name: { first: 'Nilesh', last: 'Shinde' }, gender: 'M', occupation: "Mechanical Engineer", marks: 20, age: 22, amount: 22, np: 2, },
    { id: 2, name: { first: 'Saudagar', last: 'Sevale' }, gender: 'F', occupation: "Design Engineer", marks: 40, age: 21, amount: 10, np: 2 },
    { id: 3, name: { first: 'Onkar', last: 'Bhosale' }, gender: 'M', occupation: "Software Engineer", marks: 50, age: 18, amount: 15, np: 3 },
    { id: 4, name: { first: 'Bhagesh', last: 'Yadav' }, gender: 'M', occupation: "Instrumentation Engineer", marks: 60, age: 20, amount: 10, np: 3 }
]);

const Person = mongoose.model('Person', yourSchema);

// find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
const person = await Person.findOne({ 'name.last': 'Ghost' }, 'name occupation');
// Prints "Space Ghost is a talk show host".
console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation);

// find each person with a last name matching 'Ghost'
const query = Person.findOne({ 'name.last': 'Ghost' });

// selecting the `name` and `occupation` fields
query.select('name occupation');

// execute the query at a later time
const person1 = await query.exec();
// Prints "Space Ghost is a talk show host."
console.log('%s %s is a %s.', person1.name.first, person1.name.last, person1.occupation);

// With a JSON doc
await Person.
    find({
        occupation: /host/,
        'name.last': 'Ghost',
        age: { $gt: 17, $lt: 66 },
        likes: { $in: ['vaporizing', 'talking'] }
    }).
    limit(10).
    sort({ occupation: -1 }).
    select({ name: 1, occupation: 1 }).
    exec();

// Using query builder
await Person.
    find({ occupation: /host/ }).
    where('name.last').equals('Ghost').
    where('age').gt(17).lt(66).
    where('likes').in(['vaporizing', 'talking']).
    limit(10).
    sort('-occupation').
    select('name occupation').
    exec();