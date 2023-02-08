// //ex1

// function printFullName(studentObj){
//     const {first : fname, last: lname} = studentObj
//     console.log(fname,lname)
// }

// printFullName({first: 'Elie', last:'Schoppik'})

// ex 2

//Create a function that takes an object and returns the
// keys and values as separate arrays.

// function takes (obj){
//     let object = Object.keys(obj)
//     let values = Object.values(obj)
//     console.log(object,values)
// }

// takes({ a: 1, b: 2, c: 3 })

// Return the keys sorted alphabetically, and their
// corresponding values in the same order.

// function organise (obj){
//     let arranged = Object.entries(obj)
//     arranged.sort((a,b)=>{
//         a[0] - b[0]
//     })
//     console.log(arranged)
// }

// organise({ d: 1, b: 2, t: 3 })

// function organise (obj){
//     let orderedArray = Object.entries(obj)
//     orderedArray.sort( (a,b) => a[0].localeCompare(b[0]))
//     let letters = orderedArray.map(elem => elem[0])
//     let numbers = orderedArray.map(elem => elem[1])
//     console.log(letters)
//     console.log(numbers)
// }

// organise({d: 1, b: 2, t: 3})

// // ex 3
// class Counter {
//     constructor() {
//       this.count = 0;
//     }
  
//     increment() {
//       this.count++;
//     }
//   }
  
//   const counterOne = new Counter();
//   counterOne.increment();
//   counterOne.increment();

//   // counterOne = 2
  
//   const counterTwo = counterOne;
//   counterTwo.increment();
  
//   console.log(counterOne.count);
//   // 3

// /////////////////////////////////////////////////////////

// Ninja 

class Bird {
    constructor() {
      console.log("I'm a bird. 🦢");
    }
  }
  
  class Flamingo extends Bird {
    constructor() {
      console.log("I'm pink. 🌸");
      super();
    }
  }
  
  const pet = new Flamingo();

  // I'm pink
  // I'm a bird

