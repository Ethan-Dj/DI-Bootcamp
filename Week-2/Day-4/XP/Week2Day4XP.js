// //ex1 part 1 

// function infoAboutMe(){
//     console.log("I like to eat chocolate")
// }

// infoAboutMe()

// //ex1 part 2

// function infoAboutPerson(personName, personAge, personFavoriteColor){
//     console.log(personName, personAge, personFavoriteColor)
// }

// infoAboutPerson("garry",22,"red")

//ex2

// function CalculateTip(){
//     bill = prompt("How much did you spend?")
//     if (bill < 50){
//         tip = 20
//     } else if (bill < 200 && bill >= 50){
//         tip = 15
//     } else{
//         tip = 10
//     }
//     console.log(tip)
//     multipliedAmount = 1 + (tip/100);
//     console.log(multipliedAmount)
//     console.log(bill*multipliedAmount)
// }

// CalculateTip()

// ex3 

// function isDivisible(divisor=500){
//     for (let i = 1; i <=500; i ++){
//         if((i%divisor) == 0 ){
//             console.log(i)
//         }
//     }
// }

// isDivisible(66)

//ex4

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// let shoppingList = ["banana","orange","apple"];

// function myBill (){
//     let cost = 0;
//     for (i = 0; i < shoppingList.length; i++){
//         if (stock[shoppingList[i]] == 0){
//             console.log(`We have no more ${shoppingList[i]}s`)
//         } else {
//             cost += (prices[shoppingList[i]])
//             stock[shoppingList[i]] -= 1
//         }

//     }
//     console.log(`Your Shopping basket will cost ${cost}`)
// }

// myBill()

//ex 5

// function changeEnough (itemPrice = 10, amountOfChange = [1,2,1,1]){
//     let total = 0;
//     let change = [0.5,0.25,0.05,0.01]
//     for (let i = 0; i < amountOfChange.length; i ++){
//         total += (amountOfChange[i]*change[i])

//     }
//     if (total <= itemPrice){
//         console.log(`You only have ${total} dollars, the price is ${itemPrice}`)
//     } else {
//         console.log(`Yes, you have ${total} dollars, the price is ${itemPrice}`)
//     }
// }

// changeEnough()

//ex 6

function datatype(input){
    let type;
    if (input == ""){
        type = "empty"
    } else {
        input = parseInt(input);
        if (`${input}` == "NaN"){
            type = "letters"
        } else {
            type = "number"
        }
    }
    return type

}

function hotelCost(){
    let hotelRoomPricePerNight = 140
    let numberOfNights = prompt("How many night would you like to stay for?");
    let numberOfNightsDataType = datatype(numberOfNights)
    while(numberOfNightsDataType == "letters" || numberOfNightsDataType == "empty"){
        numberOfNights = prompt("Please enter a number of night you wish to stay!")
        numberOfNightsDataType = datatype(numberOfNights)
    }
    let hotelCost = numberOfNights*hotelRoomPricePerNight
    console.log(hotelCost)
    return hotelCost
}

function planeRideCost(){
    let cost;
    let destinationCase = prompt("What is your destination").toLowerCase();
    let destination = destinationCase.toLocaleLowerCase();
    console.log(destination)
    let destinationType = datatype(destination)
    while(destinationType == "number" || destinationType == "empty"){
        destination = prompt("Please enter a City")
        destinationType = datatype(destination)}
    if (destination == "paris"){
        cost = 183
    } else {
        cost = 300
    }
    console.log(cost)
    return cost
}

function rentalCarCost (){
    let cost;
    days = prompt("How many days would you like to rent a car for?");
    let daysType = datatype(days)
    while(daysType == "letters" || daysType == "empty"){
        days = prompt("Please enter a number of days")
        daysType = datatype(days)}
    cost = 40*days;
    if (days > 10 ){
        cost *= 0.95
    }
    console.log(cost)
    return cost
}

function totalVacationCost() {
    let hotel = hotelCost();
    let planeRide = planeRideCost()
    let rentalCar = rentalCarCost()
    let totalCost = hotel + planeRide + rentalCar
    console.log(totalCost)
}

totalVacationCost()

