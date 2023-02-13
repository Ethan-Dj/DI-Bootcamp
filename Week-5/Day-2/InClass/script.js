// // Create a function that checks if an email contain the '@', if it doesnt, 
// // throw an error and catch it
// checkEmail("johnsmith.com") // throw an exception that is caught
// checkEmail("john@smith.com")  // will still run because the exception was caught

// function checkEmail(email){
//     try {
//         if (email.includes("@")){
//             console.log("email")
//         } else {
//             throw new Error("This is not an email address")
//         }
//     } catch (err){
//         console.log(err.message)
//     }
// }

// const someVar = 'Cannot be reassigned';
// try {
//   someVar = 'Still going to try';
// } catch(e) {
//   console.log(e);
// }

// console.log("after")

// // TypeError
// // is shown

// Create a program using XMLHTTPREQUEST to receive data from the below API 
// and append it to the DOM.
// Use the events onload, onprogress,onerror
// http://universities.hipolabs.com/search?country=Israel

let xhr = new XMLHttpRequest()

// creates request to get data from API
xhr.open("GET","http://universities.hipolabs.com/search?country=Israel")

// send the request to get data
xhr.send()

// exectues the anonymous function as soon as all the data loads
// or some more data loaded
// same as event listener when it comes to executing code
xhr.onload = function () {
    console.log(xhr.response)
    const data = JSON.parse(xhr.response)

    dislayData(data)
}


// displays data on webpage
function dislayData (data){
    const location = document.getElementById("here")
    data.forEach(elem => {
        const {name, web_pages} = elem
        const h1 = document.createElement("h1")
        const p = document.createElement("p")
        
        const heading = document.createTextNode(name)
        const webPage = document.createTextNode(web_pages[0])

        location.appendChild(h1).appendChild(heading)
        location.appendChild(p).appendChild(webPage)
    })

    

}
