
// // ex 1 pt 1
// // What does the following code return/print?
// const facts = {numPlanets: 8, 
//     yearNeptuneDiscovered: 1846};

// const {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets); // ?8
// console.log(yearNeptuneDiscovered); // ?1846

// // ex 1 pt 2
// //What does the following code return/print?
// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };

// let {numPlanets, ...discoveryYears} = planetFacts;

// console.log(discoveryYears); // ? {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// ex 3
// Modify the code below, and destructure the object in the parameter 
// (ie. you should have 3 parameters : name, house and goodstudents)

// function getDetails({name, house, goodstudent}) {
// 	console.log(name, house, goodstudent)
// }

// getDetails({name: 'Harry Potter',house: 'Gryfindor',goodstudent : false})

// ex 4
// Modify the code below, and destructure the object in the parameter 
//(ie. you should have 4 parameters : name, house, friendName and age)

// function getMoreDetails({name, house, friend : {friendName, age}}) {
// 	console.log(name, house, friendName, age)
// }

// getMoreDetails(
// 			{name: 'Hermione Granger', 
// 				house: 'Gryfindor', 
// 				friend :  {
// 					friendName : 'Harry Potter', 
//                     age : 20
// 				}
// 			})

// ex 5

//Modify the code below, and destructure the object in the parameter 
//(ie. you should have 4 parameters : firstname, lastname, locationOne, locationTwo, valueHouses)

// const elonPerson = {
//     first: 'Elon',
//     last: 'Musk',
//     housesLocation : ["new york", "paris"],
//     twitter: '@elonmusk',
//     company: 'Space X',
//     houses : {
//       amount: 2,
//       value : "5Million"
//     }
// }

// function getElonMuskDetails({first : firstname, last : lastname, housesLocation :[locationOne, 
//     locationTwo], houses: { value: valueHouses}}){
// 	console.log(firstname, lastname)
// 	console.log(locationOne, locationTwo, valueHouses)

// }

// getElonMuskDetails(elonPerson)

// // ex 6

// //Display in the body of the document, the name, email and phone of every employee.
// //Use a loop and object destructuring
// const employees = [
// 	{name: "Anne", email: "Anna@example.com", phone:"0000-000-0000"},
// 	{name: "Tom", email: "Tom@gmail.com", phone:"0111-111-1111"},
// ]

// function displayEmployeeInfo (obj){
//     obj.forEach(element => {
//         const {name, email, phone} = element
//         let divTo = document.getElementById("div")
//         let each = document.createElement("div")
//         divTo.appendChild(each)
//         each.innerHTML = `<h1> ${name}, ${email}, ${phone} </h1>`
//     });
// }

// displayEmployeeInfo(employees)

// Bonus
//Using MAP,  create a new array of objects, containing the name, score
//and isAboveAverage if the students has a score bigger that 50, 
//the key isAboveAverage will be true, else the key isAboveAverage will be false. Use ternary operator

// const studentsFootball = [
//     {name: 'Rich', score: 33}, 
//     {name: 'Peter', score: 55}
//    ];

// const mapped = studentsFootball.map(elem => {
//    let isAbove = elem.score > 50 ? true : false;
//     const newObj = { ...elem, isAboveAverage : isAbove} 
//     // if key and variable have same name, just put that name
//     // and js will create the key and value

//     return newObj
// })

// console.log(mapped)


/////////////////////////////////////////////////////////////////////////////////////////////////////

//Part I
// Create a TV function constructor with 3 parameters : brand, channel 
// and volume Channel should be 1 by default. Volume should be 50 by default.

//Part II
// Create a subclass for Smart TV
// It overrides the method increase, so it increase the volume by 10 and not by 1
// Add a attribute of Netflix that should be equal to true by default



class Test{
    constructor(brand, channel = 1, volumeChannel = 50){
        this.brandTV = brand;
        this.channelTV = channel;
        this.volumeTV = volumeChannel;
    }

    increaseVolume(){
        this.volumeTV < 100 ? this.volumeTV += 1 : this.volumeTV
    }

    decreaseVolume(){
        this.volumeTV > 0 ? this.volumeTV -= 1 : this.volumeTV
    }

    reset(){
        this.channelTV = 1
        this.volumeTV = 50
        console.log(this)
    }
}

let LGTV = new Test("LG",7,70)
LGTV.reset()

// Create a subclass for Smart TV
// It overrides the method increase, so it increase the volume by 10 and not by 1
// Add a attribute of Netflix that should be equal to true by default

// class SmartTV extends Test{
//     // pass attributes to the parent class
//     constructor(brand, channel, volumeChannel, Netflix){
//         super(brand, channel, volumeChannel)
//         // ^ calls constructor of parent class with all variables 
//         this.isNetflix = Netflix // this is new, so we initialize it here
//     }

//     increaseVolume(){
//         this.volumeTV += 10
//     }
// }

// let smart = new SmartTV("TV", 6, 50, false)
// // smart.increaseVolume()
// console.log(smart)





