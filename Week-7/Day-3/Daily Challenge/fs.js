const fs = require("fs")

let counter = 0 
let indexList = []
const result = fs.readFile("RightLeft.txt","utf-8", (err,data) => {
    const counterData = [...data]
    JSON.stringify(counterData)
    counterData.forEach((elem,index) => {
        if (elem == "<"){
            counter -- 
            if (counter == -1){
                indexList.push(index)
            }
        } else {
            counter ++ 
            if (counter == -1){
                indexList.push(index)
            }
        }
    })
    console.log(indexList[0])
})

