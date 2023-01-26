//99 bottles of beer on the wall
//99 bottles of beer
//Take 1 down, pass it around
//98 bottles of beer on the wall

// 4 funtions one for each line

function numberAtStart (i){
    console.log(`${i} bottles of bear on the wall`)
    console.log(`${i} bottles of bear`)
}

function takeOneDown (p){
    console.log(`Take ${p} down, pass it around`)
}

function remaining (array) (
    let remain = array[0]-array[1]
    console.log(`${remain} bottles of bear on the wall`)
)

function isNumber (string){
    string


}

function song (){
    letAskNumber = prompt("How many bottles would you like to start with?")
    number = isNumber(letAskNumber)
    let p = 0
    for (i = number; i >0 ; i -= 1){
        down ++
        nuumberAtStart(number)
        takeOneDown(down)
        remaining([number,down])

    }
}