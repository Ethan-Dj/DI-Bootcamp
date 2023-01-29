const firstDiv = document.body.firstElementChild.textContent
console.log(firstDiv)

const nameToChange = document.body.children[1].children[1]
nameToChange.textContent = "Richard"

let firstNameChange = document.body.getElementsByClassName("list")
console.log(firstNameChange)
for (let i = 0; i < firstNameChange.length; i++){
    firstNameChange[i].firstElementChild.textContent = "Ethan"
}

// let sarahLocation = document.body.children[2].children[1]
// sarahLocation.remove()

// gives an array of lists
let allUl = document.body.getElementsByClassName("list");
for (ul of allUl){
    let names = ul.children
    for (person of names){
        if (person.textContent == "Sarah"){
            person.remove()
        }
    }
}