const inputButton = document.getElementById("button")

inputButton.addEventListener("click", check)


function isLetter(str) {
    return /^[a-zA-Z]$/.test(str);
  }

function check(e){
    e.preventDefault()
    const result = document.createElement("h1")
    const appendLocation = document.querySelectorAll("form")[0]
    console.log(appendLocation)
    let stringEntered = e.target.form.textInput.value
    stringEntered.split("")
    let answerDocument;
    let printBoolean = true
    for(let i = 0; i < stringEntered.length; i++){
        let check = isLetter(stringEntered[i])
        if (check == false){
            console.log("not a letter")
            let text = document.createTextNode("Characters present that are not letters")
            result.appendChild(text)
            appendLocation.appendChild(result)
            printBoolean = false
            break
        }   
    }
    if (printBoolean != false){
        let text = document.createTextNode("Letters only")
        result.appendChild(text)
        appendLocation.appendChild(result)
    }
}

