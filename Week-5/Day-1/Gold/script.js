
//document.getElementById("form").addEventListener("submit", displayName)

document.getElementsByTagName("form")[0].addEventListener("submit", displayName)

function displayName(e){
    e.preventDefault()
    console.log(e)
    let location = document.getElementById("display")
    let txt1 = document.createTextNode(document.getElementById("fname").value)
    let txt2 = document.createTextNode(document.getElementById("lname").value)
    let p = document.createElement("p")

    location.appendChild(p).appendChild(txt1)
    location.appendChild(p).appendChild(txt2)
}