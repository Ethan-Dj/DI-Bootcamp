(async function() {
    const data = await fetch(`https://v6.exchangerate-api.com/v6/e5ce8029d04b653caadeb473/codes/`)
    const dataJSON = await data.json()
    const array = dataJSON.supported_codes
    array.forEach(elem => {

        /////////////////////////////////////////////////////////////////////////////////
        const currency = `${elem[0]}-${elem[1]}`

        const location = document.getElementById("CurrencyFrom")
        const element = document.createElement("option")
        const text = document.createTextNode(currency)
        element.setAttribute("value",elem[0])
        element.setAttribute("id",elem[0])


        location.appendChild(element).appendChild(text)

        ////////////////////////////////////////////////////////////////////////////////////
        const currency1 = `${elem[0]}-${elem[1]}`

        const location1 = document.getElementById("CurrencyTo")
        const element1 = document.createElement("option")
        const text1 = document.createTextNode(currency1)
        element1.setAttribute("value",elem[0])
        element.setAttribute("id",`${elem[0]}F`)


        location1.appendChild(element1).appendChild(text1)

        //////////////////////////////////////////////////////////////////////////////////////
        
    })
})();


document.getElementById("enter").addEventListener("submit", retrieveValues)

function retrieveValues(evt){
    evt.preventDefault()

    document.getElementById("display").innerHTML = "<h3>Loading...</h3>"

    const from = document.getElementById("CurrencyFrom").value
    const to = document.getElementById("CurrencyTo").value
    const amount = Number(document.getElementById("amount").value)
    console.log(from,to)

    convert(from,to,amount)
}

document.getElementById("switch").addEventListener("click", switchCurrency)

function switchCurrency(evt){
    evt.preventDefault()

    document.getElementById("display").innerHTML = "<h3>Loading...</h3>"

    const from = document.getElementById("CurrencyFrom").value
    const to = document.getElementById("CurrencyTo").value

    document.getElementById("CurrencyFrom").value = to
    document.getElementById("CurrencyTo").value = from

    const amount = Number(document.getElementById("amount").value)

    convert(to,from,amount)
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