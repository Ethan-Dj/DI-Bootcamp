// function banner(){
//     console.log("here")
//     let divLocation = document.createElement("div")
//     let divContent = document.createTextNode("You only have 10 minutes left")
//     divLocation.appendChild(divContent)
//     document.querySelector(".container").appendChild(divLocation)
//     document.body.idList.toggle("banner")
// }

// setTimeout(banner, 2000);

let idInterval;
let counter = 10;

function createBanner(){
    // find element with id = container
    const section = document.querySelector("#container")
    // add paragraph to that container
    const banner = document.createElement("p")
    // append the newly created element to the section!
    section.appendChild(banner)
    // add atrribute to the paragraph element we just created
    banner.setAttribute("id","banner")
    // append banner to section 
    idInterval = setInterval(changeNumber, 1000)
}

createBanner()

function changeNumber(){
    if (counter == 0){
        clearInterval(idInterval)
    } else {
        const bannerPara = document.querySelector("#banner")
        bannerPara.textContent = `${counter}`
        counter --
    }
}

