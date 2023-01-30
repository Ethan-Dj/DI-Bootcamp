let planetsArray = ["Venus","Mars","Jupiter","Saturn","Pluto","earth","Neptune"]

let section = document.getElementsByTagName("section")[0]

for (planets of planetsArray){
    let planet = document.createElement("div")
    planet.classList.add("planet");
    console.log(planet)
    section.appendChild(planet)
}

let colorsForPlanets = ["red","yellow","green","blue","pink"]
for (planets in planetsArray){
    document.body.children[0].children[planets].style.backgroundColor = colorsForPlanets[planets]
}