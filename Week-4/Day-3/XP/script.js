// ex 1

//------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

// result is [bread, carrot, potato, chicken, apple, orange]

//------2------
const country = "USA";
console.log([...country]);

// [U,S,A]

//------Bonus------
let newArray = [...[,,]];
console.log(newArray);

// [undefined,undefined]

// // ex 2

// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// const mapped = users.map(elem => "Hello " + elem["firstName"])

// //console.log(mapped)

// const filtered = users.filter(elem => elem["role"] == "Full Stack Resident")

// console.log(filtered)

// const mapFilter = users.filter(elem => elem["role"] == "Full Stack Resident")
//                         .map(elem => elem["firstName"])

// //console.log(mapFilter)

// //ex 3

// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// const sentance = epic.reduce( (acc,elem) => {
//     return acc + " " + elem
// })

// console.log(sentance)

// ex 4

// const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
//                {name: "Liam", course: "Computer Science", isPassed: false}, 
//                {name: "Jenner", course: "Information Technology", isPassed: true}, 
//                {name: "Marco", course: "Robotics", isPassed: true}, 
//                {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
//                {name: "Jamie", course: "Big Data", isPassed: false}];

// // create a new array, containing the students that passed the course.

// students.filter(elem => elem.isPassed == true).forEach(element => console.log(`You passed: ${element.name}`))

