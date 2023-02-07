// const famousPeople = [
//     {
//         name: "Angelina Jolie",
//         job: "actor",
//         age: 80
//     },
//     {
//         name: "Georges Clooney",
//         job: "actor",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         job: "actor",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         job: "singer",
//         age: 16
//     },
//     {
//         name: "Britney Spears",
//         job: "singer",
//         age: 100
//     }
// ]

// const names = famousPeople.map(elem => elem.name)

// const nameAndJob = famousPeople.map(elem => ({ name: elem.name, job: elem.job }))

// console.log(nameAndJob)



// const studentsFootball = [
//     {name: 'Rich', score: 33}, 
//     {name: 'Peter', score: 55}
//    ];

// const newObj = studentsFootball.map(elem => 
//     ({name: elem.name, 
//     score: elem.score, 
//     aboveAVG: (elem.score >= 50 ? true : false) }))

// console.log(newObj)

// //Exercise 1: create a new array that filters only the positive value
// const numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

// const biggerThanZero = numbers.filter(elem => elem >= 0)

// console.log(biggerThanZero)

// Exercise 2: Suppose you have a list of Star Trek characters,
// and you want to get just the characters that appeared in Star Trek: The Next Generation. 
// Use filter() to filter the array of characters below

// const characters = [
//    { name: 'James T. Kirk', series: ['Star Trek'] },
//    { name: 'Spock', series: ['Star Trek', 'Star Trek: The Next Generation'] },
//    { name: 'Jean-Luc Picard', series: ['Star Trek: The Next Generation'] },
//    { name: 'Worf', series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine'] }
// ]; 

// // const appeared = characters.forEach(elem => elem.series.
// //     filter(element => element == "Star Trek: The Next Generation"))

// const appeared = characters.filter(elem => elem.series.forEach(element => element) == 'Star Trek: The Next Generation')

// console.log(appeared)

// const ages = [3, 10, 18, 20];

// function checkAdult(age) {
//     return age > 18;
//   }

// let find = ages.some(checkAdult);

// console.log(find)


// const students = [
//     {name: 'Rich', score: 33}, 
//     {name: 'Peter', score: 55},
//     {name: 'John', score: 75}
// ];

//accumulator takes the entire first object, regardless of what it is

const totalScore = students.reduce((accumulator, elem)=>{
    return accumulator + elem.score
}, 0)

console.log(totalScore)

// count number who votes

let voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Bob' , age: 30, voted: true},
];

const noVotes = voters.reduce((accumulator, elem) => {
    elem.voted == true ? accumulator += 1 : null;
    return accumulator
},0)

console.log(noVotes)