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