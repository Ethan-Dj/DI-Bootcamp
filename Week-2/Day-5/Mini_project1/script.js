
function compareNumbers(userNumber,computerNumber){
    for (let i = 0; i < 3; i++){
        if (userNumber == computerNumber){
            alert(`You win! Your number ${userNumber} is the same as the computer number ${computerNumber}`)
            break
        } else if (i == 2) {
            alert(`You had 3 tries, you loose, the number was ${computerNumber}`)
            break
        } else if (userNumber < computerNumber){
            userNumber = prompt(`Your number ${userNumber} is too small, try again`)
        } else if (userNumber > computerNumber){
                userNumber = prompt(`Your number ${userNumber} is too big, try again`)
        } 
        }
    }

function playTheGame (){
    let computerNumber = 0 
    let wantToPlay = confirm("Do you want to play?")
    if (wantToPlay == false){
        alert("Ok, goodbye!")
        return
    } else {
        alert("Lets play!")
    }

    let userNumber = prompt("Enter a number between 0 and 10")
    if (isNaN(userNumber)){
        alert("Not a number, Goodbye!")
        return
    } else if (userNumber > 10 || userNumber < 0 ){
        alert("Your number is not between 0 and 10, bye")
        return
    } else {
        computerNumber = Math.round(Math.random(0,10)*10)
    }
    compareNumbers(userNumber,computerNumber)
}
