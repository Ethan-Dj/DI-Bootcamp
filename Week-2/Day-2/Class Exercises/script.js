// const userCart = {
// 	username : "John",
// 	password: 1234,
// 	isUserSignedIn : true,
// 	cart : {
// 		apple : 2,
// 		banana : 1,
// 		pear : 5,
// 	},
// 	prices : {
// 		apple : 0.5,
// 		banana : 0.8646466363,
// 		pear : 0.2
// 	}
// };


// userCart["lastName"] = "Smith";

// userCart["username"] = "Tom";

// userCart["prices"]["pear"] *= 1.17

// console.log(userCart["prices"]["pear"])

// let fruitUserWants = prompt(`From the list ${Object.keys(userCart["cart"])}, what fruit do you want?`)

// lwrFruitUserWants = fruitUserWants.toLowerCase()

// let prices = userCart["prices"][lwrFruitUserWants]

// console.log(prices)

// const family = {
//     lastName : "Smith",
//     members : 3,
//     names : ["John", "Tom", "Diana"],
//     isInVacation: true,
// }

// family["isInVacation"] = !family["isInVacation"]

// console.log(family["isInVacation"])

// let finalName = family["names"][family["members"]-1]

// console.log(finalName)

let age = prompt("What is your age")

if (age >= 18) {
    console.log("Good")
} else {
    console.log("Bad")
}
