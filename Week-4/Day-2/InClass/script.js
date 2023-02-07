// function setObj(person) {
//     person.age = 25; 
//     return person;
// }

// let personObj1 = {
//     name: 'Alex',
//     age: 30
// };

// let personObj2 = setObj(personObj1);

// console.log(personObj1); // -> name = 'Alex', age: 25

// console.log(personObj2); // -> name = 'Alex', age: 25

// function setObj(person) {
// 	person = {
//         name: 'John',
//         age: 50
//     };
    
//     return person;
// }

// let personObj1 = {
//     name: 'Alex',
//     age: 30
// };

// let personObj2 = setObj(personObj1);

// console.log(personObj1); // -> ? name: 'Alex, age 30
// console.log(personObj2); // -> ? name: 'John', age: 50

// (function (username) {
//     console.log(document.getElementsByTagName("h1")[0].innerHTML += ` ${username}`)
// })("John")

// Add in your html file a div with an id of container
// Create a self invoking function that takes one parameter the name of the user
// When invoked, the function adds the name of the user in a sentence in the div

function starWars(){
    let characters = []

    function createCharacter (fname = "", lname = "Smith"){
        let names = `${fname} ${lname}`  
        characters.push(names)
    }

    function displayCharacter(){

        let nameH1 = document.createElement("h1")
        let text = document.createTextNode(characters)
        nameH1.appendChild(text)
        console.log(nameH1)
        document.getElementsByTagName("body")[0].appendChild(nameH1)
    }

    createCharacter()
    displayCharacter()
}

starWars()