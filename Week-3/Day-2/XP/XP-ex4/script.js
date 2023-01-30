function calculateVolume (e){
    e.preventDefault()
    const radius = document.querySelector("[name = radius]").value
    const volume = document.querySelector("[name = volume]").value
    console.log(radius)
    let resultElement = document.createElement("h1")

    if (radius != ""){
        let volumeCalculated = (radius^3)*(4/3)*Math.PI
        let resultVolume = document.createTextNode(`The volume is: ${volumeCalculated}`)
        resultElement.appendChild(resultVolume)
        document.body.appendChild(resultElement)

    } else if (volume != ""){
        let radiusCalculated = ((volume/Math.PI)*(3/4))^(1/3)
        let resultVolume = document.createTextNode(`The radius is: ${radiusCalculated}`)
        resultElement.appendChild(resultVolume)
        document.body.appendChild(resultElement)
    }
    
}

const form = document.getElementsByTagName("form")[0]

form.addEventListener("submit", calculateVolume)