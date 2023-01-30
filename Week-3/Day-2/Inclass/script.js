// Exercise 1 - basic addEventListener
// Create two buttons - id of "red", id of "blue"
// When we click on the red button -> Change the backgroundcolor of the page to red
// When we click on the blue button -> Change the backgroundcolor of the page to blue

// let firstButton = document.querySelector("#firstButton")
// console.log(firstButton)

// function changeColor (e){
//     let color= e["target"].textContent.toLowerCase()
//     document.body.style.backgroundColor = color
// }

// addEventListener("click", changeColor);

// Exercise 2 - using the event object


function changeColor (e){
    let color= e["target"].textContent.toLowerCase()
    document.body.style.backgroundColor = color
}

function colors(){
    const colors = ["blue", "yellow", "green", "pink"];

    let insideDiv = document.querySelector("#container");

    for (let color of colors){
        const colorButtons = document.createElement("button");
        const text = document.createTextNode(color)
        colorButtons.appendChild(text)
        console.log(colorButtons)
        insideDiv.appendChild(colorButtons) 
        addEventListener("click", changeColor);
    }
}

colors()






// Using a loop, add one button per color inside the div container (do it directly in the JS)
// Each button should have an "click" event listener that changes the background color of the document, 
// to the color of the button (do it directly in the JS)