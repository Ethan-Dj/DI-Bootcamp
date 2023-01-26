//part 1
let x = 5;
let y = 4;

if (x > y){
    console.log("X is the bigger number")
} else{
    console.log("Y is the bigger number")
}

//part 2

const newDog = "Chihuahua";

const newDogLength = newDog.length;

console.log(newDogLength)

console.log(newDog.toUpperCase())

console.log(newDog.toLowerCase())

if (newDog == "Chihuahua"){
    console.log("I love those dogs, they are my favourite breed")
} else {
    console.log("I don't care I prefer cats")
}

const userInput = prompt("Enter a random number");
if (userInput == 0){
    console.log(`${userInput} is an even number`)
} else {
    console.log(`${userInput} is an odd number`)
}

//part 3

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

if (users.length == 0) {
    console.log("No-one is online")
}else if (users.length == 1) {
    console.log(`${users[0]} is online`)
} else if (users.length == 2) {
    console.log(`${users[0]} and ${users[1]} are online`)
} else {
    console.log(`${users[0]}, ${users[1]} and ${users.length - 2} more are online`)
}
