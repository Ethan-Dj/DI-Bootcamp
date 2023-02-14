// // Create a function that takes in a single parameter and returns a new promise.
// // Using setTimeout, after 5000 milliseconds, the promise will either resolve or reject.
// // If the input is a string, the promise resolves with that same string uppercased.
// // If the input is anything but a string it rejects with that same input.
// // Use then to repeat the string twice use catch to console.log the error finally call 
// // a function that console.log ("congratulation")


// function func(param){
//     const myPromise = new Promise(function(resolve, reject){
//         setTimeout(function () {
//             if (typeof param == "string"){
//                 resolve(param.toLocaleUpperCase())
//             } else {
//                 reject(param)
//             }
//         },1000)
//     })
//     return myPromise
// }

// func("hey")
// .then(res=> {
//     console.log(res.repeat(2))
// }).catch(res => {
//     console.log(res)
// }).finally(()=> {
//     console.log("congratulation")
// })
    


// Use fetch to fetch one 1 random gif with the category of "sun", 
// then append the gif to the page. Use this documentation 
// https://developers.giphy.com/docs/api/endpoint#random 
// https://api.giphy.com/v1/gifs/random?tag=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

gifGet()

function gifGet(){
let word;
    fetch("http://random-word-api.herokuapp.com/word?number=1")
    .then(firstPromise =>{
        const result = firstPromise.json()
        return result
    })
    .then(secondPromise => {
        console.log(secondPromise[0])
        word = secondPromise[0]
        showIMG(word)
    })

    function showIMG (wordAdd){
        fetch(`https://api.giphy.com/v1/gifs/random?tag=${wordAdd}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
        .then(firstPromise => {
                const result = firstPromise.json()
                return result
        })
        .then(secondPromise => {
            const imgURL = secondPromise.data//.images.original.url
            if (imgURL.data.length === 0){
                throw new Error()
            } else {
                
            const location = document.getElementById("showImage")
            const image = document.createElement("img")
            image.setAttribute("src",imgURL)

            location.appendChild(image)
            }

        }).catch(err =>{
            showError()
        })
    }


    function showError(){
        fetch(`https://api.giphy.com/v1/gifs/random?tag=error404&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
        .then(firstPromise => {
                const result = firstPromise.json()
                return result
        })
        .then(secondPromise => {
            const imgURL = secondPromise.data.images.original.url
            const location = document.getElementById("showImage")
            const image = document.createElement("img")
            image.setAttribute("src",imgURL)
            location.appendChild(image)
        })
    }
    
}





