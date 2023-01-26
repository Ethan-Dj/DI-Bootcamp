// // part 1

// const people = ["Greg", "Mary", "Devon", "Jason", "James"];
// people.splice(0,1);
// people.push("Ethan");
// people.indexOf("Mary")

// // copying array

// let newPeople = people;

// newPeople.splice(people.indexOf("Mary"),1)

// console.log(newPeople);

// //indexes

// console.log(newPeople.indexOf("foo"))

// let last = newPeople[newPeople.length-1]

// console.log(last)

// // part 2.1

// for (let i = 0; i < people.length; i ++){
//     console.log(people[i])
// }

// // part 2.2

// for (let i = 0; i < people.length; i ++){
//     if (people[i]== "Jason"){
//         break
//     } else {
//         console.log(people[i])
//     }
// }

// //exercise 2

// let colors = ["red", "yellow", "green", "blue", "purple"];

// for (let i = 0; i < colors.length; i ++){
//     console.log(`My #${i+1} choice is ${colors[i]}`)
// }

// //exercise 2 bonus 

// for (let i = 0; i < colors.length; i ++){
//     if (i == 0 ){
//         console.log(`My ${i+1}st choice is ${colors[i]}`)
//     } else if (i == 1){
//         console.log(`My ${i+1}nd choice is ${colors[i]}`)
//     } else if (i == 2){
//         console.log(`My ${i+1}rd choice is ${colors[i]}`)
//     } else {
//         console.log(`My ${i+1}th choice is ${colors[i]}`)
//     }
// }

// //exercise 3

// let entered = prompt("Please enter a number:")

// let numberEntered = parseInt(entered);
// while(`${numberEntered}` == "NaN"){
//     entered = prompt("Give us a number, not a word")
//     numberEntered = parseInt(entered);
//     break
// }

// while (numberEntered < 10 ){
//     console.log("That is not the correct number")
//     entered = prompt("Please enter a bigger number:")
//     numberEntered = parseInt(entered)
//     while(`${numberEntered}` == "NaN"){
//         entered = prompt("Give us a number, not a word");
//         numberEntered = parseInt(entered);
//     }
// }

// alert(`Your number, ${numberEntered}, is bigger than 10!`)

// exercise 4

// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }

// console.log(building["numberOfFloors"])

// console.log(building["numberOfAptByFloor"]["secondFloor"])

// console.log(building["numberOfAptByFloor"]["thirdFloor"])

// console.log(building["nameOfTenants"][1])

// console.log(building["numberOfRoomsAndRent"]["dan"][0])

// if (((building["numberOfRoomsAndRent"]["sarah"][1] + 
// building["numberOfRoomsAndRent"]["david"][1])) > 
// building["numberOfRoomsAndRent"]["dan"][1]) {
//     building["numberOfRoomsAndRent"]["dan"][1] = 1200
// }

// console.log(building["numberOfRoomsAndRent"]["dan"][1])

//  Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

//exercise 5

// const family = {
//     members : 6,
//     name : "smith",
//     location : "London"
// }

// for (let key in family){
//     console.log(key)
// }

// for (let key in family){
//     console.log(family[key])
// }

//exercise 6

// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
//   }

// let sentance = [];

// for (let key in details){
//     sentance.push(key)
//     sentance.push(details[key])
// }

// let fullSentance = sentance.join(" ")

// console.log(fullSentance)

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
const list = [];

for (let i = 0; i < names.length; i++){
    list.push(names[i].slice(0,1))
}

let orderedCode = list.sort((a, b) => a.localeCompare(b))

let orderedCodeString = orderedCode.join("")

console.log(orderedCodeString)

// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”
