


document.getElementById("enter").addEventListener("submit", retrieveValues)

function retrieveValues(evt){
    evt.preventDefault()

    document.getElementById("display").innerHTML = "<h3>Loading...</h3>"

    const from = document.getElementById("fromCurrency").value.toUpperCase()
    const to = document.getElementById("toCurrency").value.toUpperCase()
    const amount = Number(document.getElementById("amount").value)

    convert(from,to,amount)
}

async function convert(from,to,amount){
    try{
        if (`${amount}` == "NaN"){
            throw new Error("nan")
        }
        if (amount <= 0){
            throw new Error("emptyOrZero")
        }

        const data = await fetch(`https://v6.exchangerate-api.com/v6/e5ce8029d04b653caadeb473/pair/${from}/${to}`)
        const dataJSON = await data.json()

        if (dataJSON.result == "error"){
            throw new Error("currency")
        }

        const total = dataJSON.conversion_rate*amount
        const roundedTotal = Math.round(total*100)/100

        display(from,to,roundedTotal,amount)


    } catch (err){
        document.getElementById("display").innerHTML = ""
        if (err == "Error: nan"){
            alert("Please enter a number into the amount!")
        } else if (err == "Error: emptyOrZero"){
            alert("Please enter a number greater than 0!")
        } else if (err == " Error: currency"){
            alert("Please enter currency codes that exsist!")
        }
    }
}

function display (from,to,total,amount){
    const location = document.getElementById("display")
    location.innerHTML = ""
    const textElem = document.createElement("h3")
    const textNode = document.createTextNode(`Converting ${amount}, from ${from}, to ${to}, gives ${total}`)

    location.appendChild(textElem).appendChild(textNode)
}