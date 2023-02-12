// // const noData = document.getElementById("noData")

// // document.addEventListener("submit", check)

// // function check(e){
// //     const limit = Number(e.target.limit.value)
// //     const name = e.target.query.value.trim()
// //     if (limit < 10 ){
// //         e.preventDefault()
// //     }

// //     if (name.length < 5){
// //         e.preventDefault()
// //     }

// // }

// let jsonString = `
// {
//     "quiz": {
//         "sport": {
//             "q1": {
//                 "question": "Which one is correct team name in NBA?",
//                 "options": [
//                     "New York Bulls",
//                     "Los Angeles Kings",
//                     "Golden State Warriros",
//                     "Huston Rocket"
//                 ],
//                 "answer": "Huston Rocket"
//             }
//         },
//         "maths": {
//             "q1": {
//                 "question": "5 + 7 = ?",
//                 "options": [
//                     10,
//                     11,
//                     12,
//                     13
//                 ],
//                 "answer": 12
//             },
//             "q2": {
//                 "question": "12 - 8 = ?",
//                 "options": [
//                     1,
//                     2,
//                     3,
//                     4
//                 ],
//                 "answer": 4
//             }
//         }
//     }
// }`


// // Parse this JSON string into a JS object
// // Use array or object methods to display THE VALUES OF THE OPTIONS OF THE FIRST SPORT QUESTION
// // Create another variable to stringify the JS object. Console.log the variable
// // Then use pretty print (look at the lesson)


// // 1
// let objOfJson = JSON.parse(jsonString)

// let answers = objOfJson.quiz.sport.q1.options

// answers.forEach(elem => {
//     let location = document.getElementById("options")
//     let p = document.createElement("p")
//     let answerOptions = document.createTextNode(elem)
//     location.appendChild(p).appendChild(answerOptions)
// });

// let stringIt = JSON.stringify(objOfJson)

// const pretty = JSON.stringify(objOfJson, null, 2);
// console.log(pretty);


const array = [5,4,3,4,3,2]

const filtered = array.filter(elem => {
    let test = elem*2
    if (test > 6 ){
        return test
    }
})

console.log(filtered)