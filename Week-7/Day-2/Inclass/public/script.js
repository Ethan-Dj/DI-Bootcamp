// This is running on the client side, so even on my computer
// we cannot use node js modules or anything
// this is all client side
const getData = () => {
    fetch("http://localhost:5000/ethan/dj")
    .then(res => res.json())
    .then(data => display(data))
}

function display(data){
    document.getElementById("here").innerHTML = `${data}`
}

getData()