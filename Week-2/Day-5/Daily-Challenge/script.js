//99 bottles of beer on the wall
//99 bottles of beer
//Take 1 down, pass it around
//98 bottles of beer on the wall

// 4 funtions one for each line

function numberAtStart (i){
    if (i == 1){
        console.log(`${i} bottle of bear on the wall`)
        console.log(`${i} bottle of bear`)
    } else{
        console.log(`${i} bottles of bear on the wall`)
        console.log(`${i} bottles of bear`)
    }   
}

function takeOneDown (p){
    if (p == 1){
        console.log(`Take ${p} down, pass it around`)
    } else{
        console.log(`Take ${p} down, pass them around`)
    }
}

function remaining (number,down) {
    let remain = number-down
    if (remain == 1){
        console.log(`${remain} bottle of bear on the wall`)
    } else {
        console.log(`${remain} bottles of bear on the wall`)
    }
    return remain
} 

function isNumber (userAnswer){
    while(isNaN(userAnswer) == true || userAnswer == ""){
        console.log("Not")
        userAnswer = prompt("Enter a number")
    }
    return userAnswer
}

function song (){
    let letAskNumber = prompt("How many bottles would you like to start with?")
    let numberStart = isNumber(letAskNumber)
    let numberCounter = number
    let down = 0
    for (let i = number; i > 0 ; i = i - 1){
        down += 1
        numberAtStart(numberCounter)
        takeOneDown(down)
        numberMove = remaining(numberStart,down)
    }
}
song()