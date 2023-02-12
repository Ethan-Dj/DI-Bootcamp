
document.getElementsByTagName("form")[0].addEventListener("submit", displayName)

function displayName(e){
    e.preventDefault()
    const formData = new FormData(document.getElementById("form"));
    const data = Object.fromEntries(formData)
    const correct = JSON.stringify(data)

    const location = document.getElementById("display")
    const element = document.createElement("p")

    location.appendChild(element).textContent = data
}

