//part 1

// function helloWorld(){
//     alert("hello world")
// }

// setTimeout(helloWorld,1000)

// part2 

// function newPara (){
//     const para = document.querySelector("#container")
//     const text = document.createTextNode("Hello World")
//     para.appendChild(text)
// }

// setTimeout(newPara,1000)

//part 3

let idInterval;


function newPara (){
    const para = document.querySelector("#container");
    const textPara = document.createElement("p");
    const text = document.createTextNode("Hello World");
    const breaks = document.createElement("br");
    textPara.appendChild(text)
    para.appendChild(textPara)
    para.appendChild(breaks)

}

function stop(){
    clearInterval(idInterval)
}
idInterval = setInterval(newPara,1000)

document.addEventListener("click",stop)


