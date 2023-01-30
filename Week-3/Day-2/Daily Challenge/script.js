function retrieveValues(e){
    e.preventDefault();
    let noun = document.getElementById("noun").value
    let adjective = document.getElementById("adjective").value
    let person = document.getElementById("person").value
    let verb = document.getElementById("verb").value
    let place = document.getElementById("place").value

    let checkValueEntered = [noun,adjective,person,verb,place]
    for (let words of checkValueEntered){
        if (words == ""){
            let enterWord = document.createElement("h1")
            let content = document.createTextNode("Please enter words! Refresh the Page ")
            document.body.appendChild(enterWord.appendChild(content))
            break
        } 
    }

    checkValueEntered.sort(function(){return 0.5 - Math.random()});

    let story = checkValueEntered.join(" ")

    let storyTag = document.createElement("h1")
    let content = document.createTextNode(story)
    let insideStory = document.getElementById("story")
    insideStory.appendChild(storyTag.appendChild(content))

}

let formsLocation = document.getElementById("lib-button")
formsLocation.addEventListener("click", retrieveValues)