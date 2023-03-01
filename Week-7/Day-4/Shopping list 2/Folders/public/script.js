
function submitForm() {
    const form = document.getElementById("item");
    const item1 = form.elements.item1.value;
    const amount = form.elements.amount.value;
    
    const data = {
        item: item1,
        amount: Number(amount)
    }

    console.log(JSON.stringify(data))

    fetch("/api/", {
    method: "POST",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
}

savedData()

async function savedData(){
    const response = await fetch("/api/")
    const data = await response.json()
    console.log(data)

    display(data)
}

function display(data){
    const location = document.getElementById("here")
    data.forEach(elem => {
        const item = document.createElement("h2")
        const textItem = document.createTextNode(elem.item)

        const amount = document.createElement("h3")
        const textAmount = document.createTextNode(elem.amount)

        location.appendChild(item).appendChild(textItem)
        location.appendChild(amount).appendChild(textAmount)
    })
}


