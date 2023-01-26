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

function remaining (array) {
    let remain = array[0]-array[1]
    console.log(`${remain} bottles of bear on the wall`)
}

function isNumber (string){
    while(isNaN(string) == true){
        console.log("Not ")
        string = prompt("Enter a number")
    }
    while(string == ""){
        console.log("Not ")
        string = prompt("Enter a number")
    }
    return string

}

function song (){
    letAskNumber = prompt("How many bottles would you like to start with?")
    number = isNumber(letAskNumber)
    let down = 0
    for (i = number; i > 0 ; i = i - 1){
        down += 1
        numberAtStart(number)
        takeOneDown(down)
        remaining([number,down])
    }
}

song()