document.querySelector("button").addEventListener("click", getData)

function getData(e){
    e.preventDefault()
    try {
        const form = document.querySelector("form")
        let data = new FormData(form)
        const obj = Object.fromEntries(data)
        obj.complete = false
        const dateStartObj = new Date(obj.startTime)
        const dateEndObj = new Date(obj.endTime)
        const timeNow = new Date()
        if (dateStartObj > dateEndObj){
            throw new Error("end before start")
        }
        if (dateStartObj <= timeNow || dateEndObj <= timeNow){
            throw new Error("start/end before now")
        }

        const currentData = localStorage.getItem("data")

        if (localStorage.getItem("data") == null){
            localStorage.setItem("data", JSON.stringify([obj]))
            console.log([obj])
        } else {
            const allData = localStorage.getItem("data")
            console.log(allData)
            const objToModify = JSON.parse(allData)
            objToModify.push(obj)
            localStorage.setItem("data",JSON.stringify(objToModify))
            console.log(objToModify)
        }

    } catch (err){
        console.log(err)
    }
}

function listPage(title){
    const test = localStorage.getItem(title)
    console.log(test)
}