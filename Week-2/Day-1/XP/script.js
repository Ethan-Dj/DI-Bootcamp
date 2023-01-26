// part 1

const favouriteFood = "sushi";

const foodOfTheDay = "Dinner";

console.log(`I ead ${favouriteFood} at every ${foodOfTheDay}`)

const myWatchSeries = ["black mirror","money heist","the big bang theory"];

//part 2

myWatchSeriesLength = myWatchSeries.length;

myWatchedSeriesSentance = `I watched 3 series: ${myWatchSeries}`;

console.log(myWatchedSeriesSentance)

myWatchSeries.splice(myWatchSeriesLength-1,1,"friends");

myWatchSeries.push("The Peaky Blinders");

myWatchSeries.splice(0,0,"Breaking Bad");

myWatchSeries.splice(1,1)

console.log(myWatchSeries)

//part 3

let tempC = 22;

let tempF = tempC*(9/5) + 32;

console.log(tempF)

// part 4

let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: 55
// Actual:55

a = 2;

console.log(a+b) //second expression
// Prediction: 23
// Actual: 23

console.log(3 + 4 + '5');

//part 5

typeof(15)
// Prediction:number
// Actual:

typeof(5.5)
// Prediction:number
// Actual:

typeof(NaN)
// Prediction:number
// Actual:number

typeof("hello")
// Prediction:string
// Actual: string

typeof(true)
// Prediction:boolean
// Actual:boolean

typeof(1 != 2)
// Prediction:true
// Actual:

"hamburger" + "s"
// Prediction: hamburgers
// Actual: hamburgers

"hamburgers" - "s"
// Prediction:error
// Actual: Nan

"1" + "3"
// Prediction: 13
// Actual: 13

"1" - "3"
// Prediction: -20
// Actual: -2

"johnny" + 5
// Prediction: Johnny + 5
// Actual:Johnny5

"johnny" - 5
// Prediction: Johnny - 5
// Actual:Nan

99 * "hello"
// Prediction: error
// Actual: Nan

1 != 1
// Prediction: false
// Actual:flase 

1 == "1"
// Prediction:true 
// Actual:

1 === "1"
// Prediction:false
// Actual:false






//part 6

5 + "34"
// Prediction: 39
// Actual: 534

5 - "4" 
// Prediction: 1
// Actual: 1

10 % 5
// Prediction: 0
// Actual: 0

5 % 10
// Prediction: 1
// Actual: 5

"Java" + "Script"
// Prediction: JavaScript
// Actual: JavaScript
// Actual:

" " + " "
// Prediction:
// Actual: ' '

"" + 0
// Prediction:0
// Actual: ' 0'

true + true
// Prediction: true + true
// Actual: 2

true + false
// Prediction: true + false
// Actual: 1

false + true
// Prediction: false + true
// Actual: 1

false - true
// Prediction:Nan
// Actual: - 1

!true
// Prediction: Nan
// Actual: false

3 - 4
// Prediction: -1
// Actual: -1 

"Bob" - "bill"
// Prediction: Nan
// Actual:Nan



