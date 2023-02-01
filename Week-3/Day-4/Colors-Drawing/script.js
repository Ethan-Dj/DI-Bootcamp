let colorsArray = ["red","yellow","green","pink","purple","blue","black","grey","coral"]
let colorToAppend = ""
let isMouseDown = false


function createColorDivs(){
    let buttonsGrid = document.getElementById("buttonsGrid")
    for (let color of colorsArray){
        let colors = document.createElement("div")
        colors.style.backgroundColor = `${color}`
        colors.id = `${color}`
        buttonsGrid.appendChild(colors)
        colors.addEventListener("click", getsColor)
    }
}

function mouseDown(){
    isMouseDown = true
}

function mouseUp(){
    isMouseDown = false
}


function createDivBlocks(){
    let square = document.getElementById("grid")
    for (let i = 0; i < 1440; i++){
        let individualSquares = document.createElement("div")
        individualSquares.id = `sqaure${i}`
        individualSquares.style.border = "solid 0.25px grey"
        //individualSquares.addEventListener("click", addsColor)
        individualSquares.addEventListener("mousedown",mouseDown)
        individualSquares.addEventListener("mouseup",mouseUp)
        individualSquares.addEventListener("mouseover",addsColor)
        square.appendChild(individualSquares)
        
    }
}

createColorDivs()
createDivBlocks()

function getsColor (evt){
    colorToAppend = evt.target.attributes["0"].value
}

function addsColor (evt){
    if (isMouseDown == true){
        let sqaureToChangeColor = evt.target.attributes["0"].value
        let squareStyle = document.getElementById(sqaureToChangeColor)
        squareStyle.style.backgroundColor = `${colorToAppend}`
    }
}

function clear(){
    let grid = document.getElementById("grid")
    for (let i = 0; i < 1440; i++){
        let child = grid.children[i]
        child.style.backgroundColor = "white"
    }
}

let cleared = document.getElementById("resetButton")
cleared.addEventListener("click",clear)