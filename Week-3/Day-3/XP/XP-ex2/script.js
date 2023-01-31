let counter = 0 
const element = document.querySelector("#container");
let id;

function moveLeft(){
    if (counter != 350){
        const boxContainer = document.getElementById("animate")
        boxContainer.style.left = `${counter}px`
        counter++
        } else if (counter == 350 ){
            clearInterval(id)
        }
}


function myMove(){
    id = setInterval(moveLeft,10)
}






