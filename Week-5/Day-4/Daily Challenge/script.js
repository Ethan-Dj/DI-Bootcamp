// //ex1

// async function testing (word){
//     if (word.length ==0){
//         throw new Error("No Word Entered")
//     }
//     return word
// }


// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'foo');
// });


// async function returnPromises() {
//     try{
//         const allPromise = await Promise.all([testing("hello"),promise2,promise3])
//         console.log(allPromise)
//     } catch (err){
//         console.log(err)
//     }
// }

// returnPromises()

// ex2

document.getElementById("form").addEventListener("submit", show)

function show(e){
    e.preventDefault()
    const latCity1 = document.getElementById("latCity1").value
    const longCity1 = document.getElementById("longCity1").value

    const latCity2 = document.getElementById("latCity2").value
    const longCity2 = document.getElementById("longCity2").value

    getData([latCity1,longCity1,latCity2,longCity2])
}

async function getData(array){
    // console.log(array)
    document.getElementById("times").innerHTML = ""

    async function isNumbers(array){
        array.forEach(elem => {
            const isNum = Number(elem)
            if (isNum == "underfined"){
                throw new Error("Can only take numbers")
            }
        })
        return array
    }

    async function pullData(array,num){
        const data = await fetch(`https://api.sunrise-sunset.org/json?lat=${array[num]}&lng=${array[num+1]}&date=today`)
        console.log(data)
        const retreive = await data.json()
        console.log(retreive)
        display(retreive.results.sunrise)
        return retreive.results.sunrise
    }

    const allPromise = Promise.all([isNumbers(array),pullData(array,0),pullData(array,2)])

    try{
        const lists = await allPromise
    } catch (err){
        console.log(err)
    }
}

function display (time){
    const location = document.getElementById("times")
    const textCont = document.createElement("h1")
    const text = document.createTextNode(time)

    location.appendChild(textCont).appendChild(text)
}