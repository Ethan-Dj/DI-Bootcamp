// // ex 1
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// // I am John Doe, from Vancouver. Latitude 49.2827, Longtitiude -123.1207.

// // ex 2
// function displayStudentInfo(objUser){
//     const {first : fname, last : lname} = objUser;

//     console.log(`First name is ${fname}, last name is ${lname}`)
// }

// displayStudentInfo({first: 'Elie', last:'Schoppik'});

// ex 3

//const users = { user1: 18273, user2: 92833, user3: 90315 }

// // pt 1 [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]

// console.log(Object.entries(users))

// // pt 2 
//  const array = [...Object.entries(users)]

// const doubled = array.map(elem => [elem[0], elem[1]*2]);

// console.log(doubled)

// // ex 4

// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const member = new Person('John');
//   console.log(typeof member);

//   // object

// ex 5
// option 2

// ex 6 
// [2] === [2] // true 
// {} === {} // false 

// const object1 = { number: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { number: 5}; 

// object1.number = 4;
// console.log(object2.number) // 4 
// console.log(object3.number) // 4
// console.log(object4.number) // 5 

//ex 7

// pt 1
class Animal {
    constructor(name,type,color){
        this.Name = name
        this.Type = type
        this.Color = color
    }
}

// pt 2
class Mamal extends Animal{
    constructor(name,type,color){
        super(name,type,color)
    }

    sound(sound){
        console.log(sound, this.Name, this.Type, this.Color)
    }
}

const test = new Mamal("a","b","c")
test.sound("d")

//pt 3

const farmerCow = new Mamal("john", "cow", "brown")
farmerCow.sound("mooo")