// // ex1
// // let text = "Hello";

// // function checkText (){
// // 	console.log("In the function",text); 
// // 	text += " World";
// // 	console.log("Still in the function",text);
// // }

// // console.log("before the function", text);

// // checkText()

// // console.log("after the function", text);

// // console reads: Hello, Hello, Hello World, Hello World

// let friend = "Harry";

// function checkfriend (){
// 	let friend = "Alice";
// 	console.log("In the function",friend); 
// 	friend += " Smith";
// 	console.log("Still in the function",friend);
// }

// console.log("before the function", friend);

// checkfriend()

// console.log("after the function", friend);

// //console reads: Harry, Alice, Alice Smith, Harry

// Exercise 1:
// Greet the user with his name, the user's name is a parameter. Do this exercise,
// first by using function declarations
// then function expression,
// then arrow function

function helloUser(name){
    console.log(`Hello ${name}`)
}

const helloUserr = (name){
    console.log(`Hello ${name}`)
}

const helloUserrr = name => console.log(`Hello ${name}`)