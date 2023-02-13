// // q1 

// const xhr = new XMLHttpRequest();

// xhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")

// xhr.send()

// xhr.onload = function(e) {
//     const retrieved = JSON.parse(xhr.response)
//     displayData(retrieved.data)
    
// }

// function displayData(data){
//     console.log(data)
// }


// q2 

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")

xhr.send()

xhr.onload = function(e) {
    const retrieved = JSON.parse(xhr.response)
    displayData(retrieved.data)
    
}

function displayData(data){
    console.log(data)
}