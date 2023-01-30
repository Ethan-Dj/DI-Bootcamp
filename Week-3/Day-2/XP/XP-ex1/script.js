//ex1 part 1
console.log(document.querySelectorAll("h1")[0].textContent)

//ex1 part 2
let noOfParas = document.querySelectorAll("p").length
let pToRemove = document.querySelectorAll("p")[noOfParas-1]
pToRemove.remove()

// ex1 part 3

function changeColor(){
    h2Tags.style.color="green"
}

let h2Tags = document.querySelectorAll("h2")[0]
h2Tags.addEventListener("click", changeColor)

//ex1 part 4

let h3Tags = document.querySelectorAll("h3")[0]
h3Tags.addEventListener("click",displayNone)

function displayNone(e){
    h3Tags.style.display = "none"
}

//ex1 part 5

let allPTags = document.querySelectorAll("p")

function makePBold (){
    for (let paras of allPTags){
        paras.style.fontWeight = "bold"
    }
}

let buttonSelect = document.querySelectorAll("button")[0]
buttonSelect.addEventListener("click", makePBold)


