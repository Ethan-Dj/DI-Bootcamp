// const menu = [
//     {
//       type : "starter",
//       name : "Houmous with Pita"
//     },
//     {
//       type : "starter",
//       name : "Vegetable Soup with Houmous peas"
//     },
//     {
//       type : "dessert",
//       name : "Chocolate Cake"
//     }
//   ]

// // let desertsOnMenu = false
// // const deserts = menu.forEach(function(element){
// //     element["type"] == "dessert" ?  desertsOnMenu = true : null
// // })

// // let mainCourseOnMenu = false
// // const mains = menu.forEach(function(element){
// //     element["type"] == "main" ? mainCourseOnMenu = true : null
// // })

// // if (mainCourseOnMenu == false){
// //     menu.push({type : "main", name : "pasta"})
// // }

// // console.log(menu)

// const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes" ]

// const veggie = menu.forEach(function(element){
//     element["vegetarian"] = false 
//     let checkVegArray = element["name"].split(" ")
//     const check = checkVegArray.forEach(function(inMenu){
//         const check = vegetarian.forEach(function(vegetable){
//             let menuFoods = inMenu.toLowerCase()
//             vegetable == menuFoods? element["vegetarian"] = true : null 
//         })    
//     })
// })

// console.log(menu)

//ex 2 
// function splitString(string, number){
//     let singleCharacterArray = string.split("")
//     let newArray = []
//     let currentString = ""
//     const makeStrings = singleCharacterArray.forEach(function(element,index){
//         let wholeNumber = (index + 1) % number
//         if (wholeNumber == 0){
//             currentString += element
//             newArray.push(currentString)
//             currentString = ""
//         } else {
//             currentString += element
//         }
//     })
//     console.log(newArray)
// }

// splitString("helloo",2)

//ex3 

function there (string, word){
    let array = string.split(" ")
    let isThereCounter = 0 
    const check = array.forEach(function(element){
        element == word ? isThereCounter += 1 : null
    })
    console.log(isThereCounter)
}

there("a dkfjalka a a a", "a")
















//ex 4

// function reverse (array){
//     let reversed = []
//     let counterStart = array.length - 1
//     for(let i = counterStart ; i >= 0 ; i--){
//         reversed.push(array[i])
//     }
//     console.log(reversed)
// }
// reverse([1,2,3,4,5])