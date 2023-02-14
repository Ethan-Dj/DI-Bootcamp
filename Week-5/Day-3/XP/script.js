// // ex1 
// function compareToTen(num){
//     return newPromis = new Promise((resolve,reject)=> {
//         if (num > 10 ){
//             reject(num)
//         } else {
//             resolve(num)
//         }
//     })
// }

// compareToTen(11)
// .then(promise => {
//     console.log("less than 10")
// })
// .catch(promise => {
//     console.log("more than 10")
// })

// // ex2 pt1

// function selfResolve(){
//     return new Promise(resolve => {
//         setTimeout(function() {
//             resolve()
//             },2000)
//     })
// }

// selfResolve().then(res => console.log("success"))


// // ex2 pt 2 

// function compareToTen(num){
//     return newPromis = new Promise((resolve,reject)=> {
//         if (typeof num == "number"){
//             throw new Error(num)
//         } else {
//             resolve(num)
//         }
//     })
// }

// Promise.resolve(compareToTen(11))
// .then(promise => {
//     console.log("less than 10")
// })
// .catch(promise => {
//     console.log("this is not a number")
// })

// compareToTen("harry")

//ex 3
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.

function valueSolve(val){
    return new Promise((resolve,reject) =>{
        if (val == 5){
            resolve(val)
        } else {
            reject(val)
        }
    })
}

valueSolve(3)
.then(val => {
    console.log("this is 3")
}) 
.catch(val => {
    console.log("this is not 3")
})