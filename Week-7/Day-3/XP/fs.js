// Ex1

// const fs = require('fs')

// const info = fs.readFile("ex.txt",'utf-8', (err,data) => {
//     console.log(data)
// })


// Ex2
// const fs = require('fs')

// const data = "This is a file created in js"

// fs.writeFile("test1.txt",data,"utf-8", (err) => {

// }
// )

// Ex 3
// const fs = require('fs')

// const data = "This was actually appended"
// fs.appendFile("test1.txt",data,"utf-8", err => {

// })


// Ex 4
const fs = require('fs')

fs.unlink("delete.txt", err => {
})