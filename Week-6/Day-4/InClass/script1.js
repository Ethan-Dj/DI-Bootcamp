(function (){
    const basket = JSON.parse(localStorage.getItem("basket"))
    if (basket.length > 0){
        basket.forEach(elem => {
            const location = document.getElementById("total")
            const div = document.createElement("div")
            location.appendChild(div)
    
            const nameElem = document.createElement("h3")
            const nameText = document.createTextNode(elem.name)
    
            const priceElem = document.createElement("h4")
            const priceText = document.createTextNode(elem.price)
    
            div.appendChild(nameElem).appendChild(nameText)
            div.appendChild(priceElem).appendChild(priceText)
        })
    }
    
})()

document.getElementById("clear").addEventListener("click",clearFunc)

function clearFunc(){
    localStorage.clear()
    window.location.reload()
}