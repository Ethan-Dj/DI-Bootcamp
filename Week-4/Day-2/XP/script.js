// // ex1 
// const sum = (a,b) => {return a+b}

// console.log(`${sum(2,3)}`)

// // ex2

// // pt1 

// function convert(kilos){
//     console.log(kilos*1000)
// }

// convert(2)

// //pt2 

// const convert = function(kilos){
//     console.log(kilos*1000)
// }

// convert(3)

// // pt3

// A function declaration creates a named function,
// function expression creates an anonymous function.

// //pt 4

// const func = kilos => console.log(kilos*1000)

// func(5)

// // ex3

// (function(childNum, partnerName, geoLocation, job){
//     let sentance = `You will have ${childNum}, married to ${partnerName}, 
//     living ${geoLocation}, working as a ${job}`
//     let text = document.createTextNode(sentance)
//     let ready = document.createElement("h1").appendChild(text)
//     document.body.appendChild(ready)
// })(3,"jack","Goa","Buider")

// // ex 4

// (function(name,img){
//     let navLocation = document.getElementsByTagName("a")[0]
//     let textp = document.createTextNode(name)
//     navLocation.appendChild(textp)

//     let imgLocation = document.getElementById("image")
//     imgLocation.src = img


// })("Bill","water.jpg")

// // ex5 pt1 

// function makeJuice(size){

//     function addIngedients(ing1, ing2, ing3){
//         sentance = `The client wants a ${size} drink with ${ing1} ${ing2} ${ing3} `
//         console.log(sentance)
//     }

//     return addIngedients
// }

// const inside = makeJuice("big")
// inside("a","b","c")

//ex5 pt 2

function makeJuice(size){

    let ingredients = []

    function addIngedients(ing1, ing2, ing3){
        ingredients.push(ing1,ing2,ing3)
        displayJuice()
    }

    
    function displayJuice(){
        let sentance = `The client wants a ${size} drink with `
        ingredients.forEach(function(elem,index){
           sentance += `${elem}${index+1 == ingredients.length ? "." : ", "}`
           console.log(sentance)
        })

        let location = document.querySelector("h1")
        location.innerText = ""
        let text = document.createTextNode(sentance)
        location.appendChild(text)
        sentance = ""
    }

    return addIngedients
}

let func = makeJuice("large")
func("a","b","c")
func("d","e","f")

