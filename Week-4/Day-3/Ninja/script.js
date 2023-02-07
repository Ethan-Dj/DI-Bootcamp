// //ex 1

// const data = [
//     {
//       name: 'Butters',
//       age: 3,
//       type: 'dog'
//     },
//      {
//       name: 'Cuty',
//       age: 5,
//       type: 'rabbit'
//     },
//     {
//       name: 'Lizzy',
//       age: 6,
//       type: 'dog'
//     },
//     {
//       name: 'Red',
//       age: 1,
//       type: 'cat'
//     },
//     {
//       name: 'Joey',
//       age: 3,
//       type: 'dog'
//     },
//     {
//       name: 'Rex',
//       age: 10,
//       type: 'dog'
//     },
//   ];

//   console.log( 
//     data.reduce((acc, elem) => elem.age + acc,0)
//     )

// ex 2

// const userEmail3 = ' cannotfillemailformcorrectly@gmail.com '
// let new1 = [...userEmail3]
// new1.forEach( (elem, index) => elem == " " ? new1.splice(index,1): null)

// console.log(new1.join(""))

// ex 3

// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// const newUsers = []

// users.forEach(elem => {
//     let obj= {}
//     obj[`${elem.firstName} ${elem.lastName}`] = elem.role
//     newUsers.push(obj)
// })

// console.log(newUsers)

/////////////////////////////////////////////////////////////////////////////////////////////

// console.log([1, 2, 3].map(num => {
//     if (typeof num === 'number') return num * 2;
//     return ;
//   }))
  
  // returns [2,3,6]

  // ex 3

  console.log([[0, 1], [2, 3]].reduce((acc, elem) => {return acc.concat(elem)},[1, 2]));

  // ex4

  const arrayNum = [1, 2, 4, 5, 8, 9];

const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})

newArray()