const tasks = []

function check(stringEntered){
    let booCheck = true
    if (stringEntered == ""){
        booCheck = false
    }
    return booCheck
}

function addItem(evt){
    evt.preventDefault()
    let inputValue = document.getElementById("item").value
    somethingEntered = check(inputValue)
    if (somethingEntered == false){
        alert("You need to enter something!")
        return
    }
    
    let newItemDiv =  document.createElement("div")
    let newItemElement =  document.createElement("input")
    let newItemElementLabel =  document.createElement("label")
    newItemElement.type = "checkbox";
    newItemElementLabel.textContent = `${inputValue}`;
    let listItself = document.getElementById("listTasks")
    newItemDiv.appendChild(newItemElement)
    newItemDiv.appendChild(newItemElementLabel)
    listItself.appendChild(newItemDiv)

    document.getElementById("item").value = ""
}

function clearList(evt){
    evt.preventDefault()
    document.getElementById("listTasks").innerHTML = "";
}

let buttonPressed = document.getElementById("enterButton")
buttonPressed.addEventListener("click",addItem)

let clearButton = document.getElementById("clear")
clearButton.addEventListener("click",clearList)
