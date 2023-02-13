

const buttonEnt = document.getElementById("submit");
buttonEnt.addEventListener("submit", displaySearch);

const buttonDlt = document.getElementById("deleteAll")
buttonDlt.addEventListener("click", deleteAll)

//////////////////////////////////////////////////////////////////////////

// deletes everythin

function deleteAll(evt){
    evt.preventDefault()
    document.getElementById("images").innerHTML = ""
}

//////////////////////////////////////////////////////////////////////////

// deals with displaying data

function displaySearch (evt) {
    evt.preventDefault();
    const search = document.getElementsByTagName("input")[0].value

    let xhr = new XMLHttpRequest()
    xhr.open("Get",`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)

    xhr.send()


    xhr.onload = function () {
        const returned = xhr.response
        const obj = JSON.parse(returned).data
        const random = (Math.floor(Math.random() * obj.length)) - 1
        const randomOBJ = obj[random]

        // create an image and button

        const location = document.getElementById("images")
        const div = document.createElement("div")
        
        const imageElement = document.createElement("img")
        imageElement.setAttribute("src",`${randomOBJ.images.original.url}`)
        div.appendChild(imageElement)


        const deleteButton = document.createElement("button")
        deleteButton.innerHTML ="delete"
        deleteButton.setAttribute("id",`${randomOBJ.images.original.url}`)
        deleteButton.addEventListener("click", delete1)
        div.appendChild(deleteButton)

        div.setAttribute("id", `here${randomOBJ.images.original.url}`)
        location.appendChild(div)

        div.classList.add("nice");
    }
}

function delete1(evt) {
    evt.preventDefault()
    const toDelete = document.getElementById(`here${evt.target.attributes.id.value}`)
    toDelete.remove(toDelete)
}
