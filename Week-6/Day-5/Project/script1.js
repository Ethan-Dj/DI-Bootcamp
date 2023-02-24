let orderByStart;
function load(){
    const dataJSON = localStorage.getItem("data")
    console.log(dataJSON)
    const data = JSON.parse(dataJSON)
    data.forEach(elem => {
        elem.endTime = new Date(elem.endTime)
        elem.startTime = new Date(elem.startTime)
    })
    orderByStart = data.sort((a, b) => b.endTime - a.endTime);
    console.log(orderByStart)
    const location = document.getElementById("reminders")
    orderByStart.forEach((elem,index) => {
        console.log(elem)
        const div = document.createElement("div")
        div.setAttribute("id",`${index}`)

        // Title of Reminder
        const textElemTitle = document.createElement("h2")
        textElemTitle.textContent = `Reminder Title: ${elem.name}`
        location.appendChild(div).appendChild(textElemTitle)
        
        // Title day remaining
        const daysTillFinish = timeLeft(elem)
        const textElemDays = document.createElement("h4")
        textElemDays.textContent = `This reminder experies in ${daysTillFinish} day(s)`
        location.appendChild(div).appendChild(textElemDays)

        // Has item been completed
        const form = document.createElement("form")
        const box = document.createElement("input")
        box.setAttribute("type","checkbox")
        box.setAttribute("name","complete")
        box.setAttribute("id",`${index}`)
        if (elem.complete == true) {
            box.checked = true
        }

        box.addEventListener("change",(function(e){
            e.preventDefault()
            if (elem.complete == true){
                elem.complete = false
            } else {
                elem.complete = true
            }
            localStorage.setItem("data",orderByStart)
        }))

        const label = document.createElement("label")
        label.innerHTML = "Completed?"
        label.setAttribute("for","complete")

        form.appendChild(box)
        form.appendChild(label)
        location.appendChild(form)

        // delete button
        const deleteButton = document.createElement("button")
        deleteButton.setAttribute("id",`${index}d`)
        deleteButton.textContent ="Delete Reminder"
        deleteButton.addEventListener("click", deleteItem)
        location.appendChild(deleteButton)

        // see all data
        // Makes the button 
        const seeAllData = document.createElement("button")
        seeAllData.setAttribute("id", `${index}s`)
        seeAllData.innerHTML = "+/-"
        seeAllData.addEventListener("click",flip)
        location.appendChild(seeAllData)
        
        // creates the text elem filled
        const dataWhere = document.createElement("p")
        dataWhere.setAttribute("id", `${index}p`)
        dataWhere.style.display = "none"
        dataWhere.textContent = JSON.stringify(orderByStart[index])
        location.appendChild(dataWhere)    

        // Basic editing functionality
        const edit = document.createElement("button")
        edit.setAttribute("id", `${index}e`)
        edit.innerHTML = "Edit in box below?"
        edit.addEventListener("click",inputIn)
        location.appendChild(edit)
    })
}

function inputIn(e){
    e.preventDefault()
    const stringId = e.target.id
    const id = stringId.split("")[0]
    document.getElementById("text").innerHTML = 
    `${id}${JSON.stringify(orderByStart[id])}`
}

document.getElementById("change").addEventListener("click",edit)

function edit (e){
    const change = document.getElementById("text").value
    const id = change.split("")[0]
    if (change == "Edit reminders here!"){
        return
    } else {
        const nClass = change.substring(1)
        orderByStart[id] = JSON.parse(nClass)
        localStorage.setItem("data",JSON.stringify(orderByStart))
        load()
    }
}

function flip(e){
    e.preventDefault()
    const stringId = e.target.id
    const id = stringId.split("")[0]
    const here = document.getElementById(`${id}p`)
    if (here.style.display == "none"){
        here.style.display = "block"
    } else {
        here.style.display = "none"
    }

}

function timeLeft(reminderObject){
    console.log(reminderObject.endTime)
    const timeEnd = reminderObject.endTime
    const timeNow = new Date()
    const daysUntilFinish = Math.round((timeEnd - timeNow)/(1000 * 60 * 60 * 24))
    return daysUntilFinish
}


function taskCompleted(e){
    e.preventDefault()
    console.log(e.target.id)
}

function deleteItem(e){
    e.preventDefault()
    let deleteId = e.target.id
    const id = deleteId.split("")[0]
    orderByStart.splice(id,1)
    localStorage.setItem("data",JSON.stringify(orderByStart))
    document.getElementById("reminders").innerHTML = ""

    load()
}

load()