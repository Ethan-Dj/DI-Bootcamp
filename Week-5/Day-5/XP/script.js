// buttonevent listener 
// button event listener calls function that gives a random number between 1 and 88
// all data is taken from data base so no need for promise all 
// search the data and append to the page

document.getElementById("random").addEventListener("click", randNum)

function randNum (evt){
    evt.preventDefault()
    const randomNumber = Math.floor(Math.random() * 83)
    document.getElementById("allInfo").innerHTML = `<i id="load" class="fa-solid fa-spinner fa-spin-pulse"></i>`

    getData(randomNumber)
}

async function getData (number){
    try{
    const data = await fetch(`https://www.swapi.tech/api/people/${number}`)
        if (data.status !== 200){
            throw new error("Person cannot be found")
        }
        const dataJson = await data.json()
        const name = dataJson.result.properties.name
        const height = dataJson.result.properties.height
        const gender = dataJson.result.properties.gender
        const brithYear = dataJson.result.properties.birth_year
        const home = await getWorld(dataJson.result.properties.homeworld)
        const array = [name, height, gender, brithYear, home]

        display(name, height, gender, brithYear, home)

    } catch(err){
        displayError(err)
    }
}

async function getWorld(url){
    try{
        const data = await fetch(url)

    if (data.status !== 200){
        throw new error("Planet not found")
    }
    const dataJson = await data.json()
    return dataJson.result.properties.name
    } catch (err){
        displayError(err)
    }
}

function display(name, height, gender, birthYear, home){
    document.getElementById("allInfo").innerHTML =""
    const location = document.getElementById("allInfo")
    const title = document.createElement("h1")
    const textNode = document.createTextNode(name)

    location.appendChild(title).appendChild(textNode)

    const arrayInfo = [height, gender,birthYear, home]

    arrayInfo.forEach(elem => {
        const location = document.getElementById("allInfo")
        const p = document.createElement("p")
        const breakLine = document.createElement("br")
        const textNode = document.createTextNode(elem)

        location.appendChild(p).appendChild(textNode)
        location.appendChild(breakLine)

    })
}

function displayError (err){
    const location = document.getElementById("allInfo")
    const title = document.createElement("h1")
    const textNode = document.createTextNode(err)

    location.appendChild(title).appendChild(textNode)
}