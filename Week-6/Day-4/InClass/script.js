const  products = [
    {
        id: 0,
        name: "Deluxe Bicycle",
        url: "https://image.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-600w-1498702814.jpg",
        price: 499.98
    },
    {
        id: 1,
        name: "Super Deluxe bagpack",
        url: "https://image.shutterstock.com/image-photo/yellow-school-backpack-isolated-on-600w-534499549.jpg",
        price: 134.99
    },
    {
        id: 2,
        name: "Super Duper Scooter",
        url: "https://image.shutterstock.com/image-illustration/yellow-retro-vintage-scooter-isolated-600w-1421727647.jpg",
        price: 1090.95
    },
    {
        id: 3,
        name: "Smartphone",
        url: "https://image.shutterstock.com/image-vector/concept-touch-screen-smartphone-blank-600w-1433190200.jpg",
        price: 399.99
    }
];

let basket = [];
(function() {
    basket = JSON.parse(localStorage.getItem("basket"))
    console.log(basket)
    products.forEach(elem => {
        const location = document.getElementById("display")
        const div = document.createElement("div")
        div.setAttribute("id",`${elem.id}`)
        div.addEventListener("click",addToBasket)
        location.appendChild(div)

        const nameElem = document.createElement("h3")
        const nameText = document.createTextNode(elem.name)

        const imgElem = document.createElement("img")
        imgElem.setAttribute("src",elem.url)

        const priceElem = document.createElement("h4")
        const priceText = document.createTextNode(elem.price)

        div.appendChild(nameElem).appendChild(nameText)
        div.appendChild(imgElem)
        div.appendChild(priceElem).appendChild(priceText)
    })
})();


function addToBasket(e){
    e.preventDefault()
    const product_target = Number(e.currentTarget.id)
    const pushOBJ = {
        name: products[product_target].name,
        price: products[product_target].price
    }
    if (basket == null){
        basket = []
    }

    const alreadyThere = basket.map(obj => JSON.stringify([obj.name, obj.price]))
    const pushArray = JSON.stringify([pushOBJ.name, pushOBJ.price])
    console.log(alreadyThere,pushArray)

    if (alreadyThere.includes(pushArray)){
        alert('This item is already in your basket')
    } else {
        basket.push(pushOBJ)
        const basketStringify = JSON.stringify(basket)
        localStorage.setItem("basket",basketStringify)
    }
}

document.getElementById("pay").addEventListener("click", payment)

function payment(e){
    e.preventDefault()
    console.log(localStorage.getItem("basket"))
    window.location.href = "index1.html"
}

