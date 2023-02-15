// function makeAllCaps(arrayWords){
//     let wordsStrings = true
//     let upper = arrayWords.map(elem => {
//         if (typeof elem !== "string"){
//             wordsStrings = false
//         } else {
//             return elem.toLocaleUpperCase()
//         }
//     })
//     return new Promise((resolve,reject)=> {
//         if (wordsStrings == true){
//             resolve(upper)
//         } else{
//             reject("All items need to be strings")
//             console.log("The array entered contains items that are not words")
//         }
//     })
// }

// function sortWords(arrayWordsTrue){
//     return new Promise((resolve,reject)=> {
//         if (arrayWordsTrue.length >= 4){
//             resolve(arrayWordsTrue.sort())
//         } else{
//             reject("array to short")
//         }
//     })
// }

// const words = ["hello","you","allo"]

// makeAllCaps(words)
// .then(res => sortWords(res))
// .then(res => console.log(res))
// .catch(err => {
//     console.log(err)
// })

const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`


function toJS(morse){
    return new Promise((resolve,reject)=> {
        if (morse.keys.length == 0){
            reject("morse is empty")
        } else {
            resolve(JSON.parse(morse))
        }
    })
}

function toMorse(morseJS){
    const arrayEnt = valEntered.split("")
    let arrayOfMorse = []
    return new Promise((resolve,reject)=> {
        arrayEnt.forEach(elem => {
            if (morseJS[elem] === undefined){
                reject(elem)
            } else {
                arrayOfMorse.push(morseJS[elem])
            }
        })
        resolve(arrayOfMorse)
    })
}

const locat = document.getElementById("text").addEventListener("input", logit)
let valEntered = ""

function logit (e){
    valEntered = e.target.value.toLocaleLowerCase()
    toJS(morse)
    .then(res => toMorse(res))
    .then(res=> {
        const location = document.getElementById("display")
        location.innerHTML =""
        res.forEach(elem => {
            
            const textBox = document.createElement("p")
            const block = document.createElement("br")
            const text = document.createTextNode(elem)

            location.appendChild(textBox).appendChild(text)
            
        })

    })
    .catch(err => console.log(err))
}