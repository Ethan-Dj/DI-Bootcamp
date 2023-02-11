//////////////////////////////////////////////////////////////////////////////////////

// This sets up the page

(function (){
    for (let i = 0; i < 9; i++){

        const location = document.getElementById("gameContainer")
        const divCont = document.createElement("div")
        const elem1 = document.createElement("H1")
        const text1 = document.createTextNode(``)

        location.appendChild(divCont).appendChild(elem1).appendChild(text1)

        divCont.classList.add("square")
        divCont.setAttribute("id",`${i}`)

        divCont.addEventListener("click", addElem)

    }
})();

document.getElementsByTagName("Button")[0].addEventListener("click", X)
document.getElementsByTagName("Button")[1].addEventListener("click", O)

document.getElementsByTagName("Button")[2].addEventListener("click",easy)
document.getElementsByTagName("Button")[3].addEventListener("click",hard)

/////////////////////////////////////////////////////////////////////////////////////

// This lets the user decide if they want to be X or O

let isX = true
function X (){
     isX = true
     document.getElementsByTagName("Button")[0].style.backgroundColor = "green"
     document.getElementsByTagName("Button")[1].removeEventListener("click", O)
}

function O(){
    isX= false
    document.getElementsByTagName("Button")[1].style.backgroundColor = "green"
    document.getElementsByTagName("Button")[0].removeEventListener("click", X)
}

//////////////////////////////////////////////////////////////////////////////////////

// buttons for hard or easy 
let lvlChosen = false
let isHard = false
function easy (){
    isHard = false
    lvlChosen = true
    document.getElementsByTagName("Button")[2].style.backgroundColor = "green"
    document.getElementsByTagName("Button")[2].removeEventListener("click", O)
    document.getElementsByTagName("Button")[3].removeEventListener("click", O)
}

function hard (){
    isHard = true
    lvlChosen = true
    document.getElementsByTagName("Button")[3].style.backgroundColor = "green"
    document.getElementsByTagName("Button")[2].removeEventListener("click", O)
    document.getElementsByTagName("Button")[3].removeEventListener("click", O)
}


// this sets up the initial parametes, spaces left and where each player has gone

let spaceLeft = [0,1,2,3,4,5,6,7,8]
let personGoes = []
let computerGoes = []

///////////////////////////////////////////////////////////////////////////////////

// This function is called when the a tile event listener is activated 

function addElem(evt){
    let now = Number(evt.target.id)
    if(isX == true && lvlChosen == true){
        playGame("X",now)
    } else if (isX == false && lvlChosen == true) {
        playGame("O",now)
    } else {
        alert("Choose a level")
    }
}

///////////////////////////////////////////////////////////////////////////////////////////

// This part of the code starts the game 

function playGame(val, now){
    document.getElementById(`${now}`).firstElementChild.textContent = val
    document.getElementById(`${now}`).removeEventListener("click", addElem)
    spaceLeft = spaceLeft.filter(elem => `${elem}` !== `${now}`)
    personGoes.push(now)
    checkWinnerUser(now)
}

///////////////////////////////////////////////////////////////////////////////////////////////

function computerGo(){
    
    let random = spaceLeft[Math.floor(Math.random()*spaceLeft.length)]
    let randomIndex = 0
    if (isHard == true){
        randomIndex = smartCheck()
    } else {
        randomIndex = random
    }

    computerGoes.push(randomIndex)
    if(isX == false){
        document.getElementById(`${randomIndex}`).firstElementChild.textContent = "X"
        spaceLeft = spaceLeft.filter(elem => `${elem}` !== `${randomIndex}`)
        document.getElementById(`${randomIndex}`).removeEventListener("click", addElem)
    } else {
        document.getElementById(`${randomIndex}`).firstElementChild.textContent = "O"
        spaceLeft = spaceLeft.filter(elem => `${elem}` !== `${randomIndex}`)
        document.getElementById(`${randomIndex}`).removeEventListener("click", addElem)
        
    }
    checkWinnerComputer()
}

///////////////////////////////////////////////////////////////////////////////////////

// function that blcoks the user from getting 3 in a row

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

function smartCheck(){
    let goodPosition = []
    winCombos.forEach(elem => {
        let test = 0
        let check = 0
        personGoes.includes(elem[0]) ? test ++ : check += elem[0]
        personGoes.includes(elem[1]) ? test ++ : check += elem[1]
        personGoes.includes(elem[2]) ? test ++ : check += elem[2]
        if (test == 2){
            goodPosition.push(check)
        }
    })
    let random = spaceLeft[Math.floor(Math.random()*spaceLeft.length)]

    let whatToReturn = 10 // number that cannot be used
    
    goodPosition.forEach(elem => {
        if (spaceLeft.includes(elem)){
            whatToReturn = elem
            return
        }
    })

    if (whatToReturn == 10){
        return random
    } else {
        return whatToReturn
    }
}

////////////////////////////////////////////////////////////////////////////////////////

// checks if the user won 

function checkWinnerUser(){
    let personWins = false
    winCombos.forEach(elem => {
        if (personGoes.includes(elem[0])){
            if (personGoes.includes(elem[1])){
                if (personGoes.includes(elem[2])){
                    personWins = true
                }
            }
        } 
    })
    if (personWins == true){
        const location = document.getElementById("refresh")
        const button = document.createElement("button")
        location.appendChild(button).textContent = "User Won! Refresh"
        button.addEventListener("click", refreshPage)

    } else if(spaceLeft.length == 0 ){
        const location = document.getElementById("refresh")
        const button = document.createElement("button")
        location.appendChild(button).textContent = "Draw, Refresh"
        button.addEventListener("click", refreshPage)
    } else{
        computerGo()
    }
}

////////////////////////////////////////////////////////////////////////////

// checks if the computer won

function checkWinnerComputer(){
    let computerWins = false
    winCombos.forEach(elem => {
    if (computerGoes.includes(elem[0])){
        if (computerGoes.includes(elem[1])){
            if (computerGoes.includes(elem[2])){
                computerWins = true
            }
        }
    } 
    })
    if (computerWins == true){
        const location = document.getElementById("refresh")
        const button = document.createElement("button")
        location.appendChild(button).textContent = "Computer Won! Refresh"
        button.addEventListener("click", refreshPage)
    }
}

//////////////////////////////////////////////////////////////////////////////////

// refreshes the page when even listener activated

function refreshPage(){
    window.location.reload()
}


