// function string () {
//     string = prompt("Please Enter a Word")
//     return string
// }

// function toArray (string){
//     let array = string.split("")
//     return array
// }

// function middleLetters (array) {
//     let middleNo = (array.length+1)%2
//     let MiddleLetters;
//     if (middleNo == 0 ){
//         middleLetters = [(array.length + 1)/2]
//     } else {
//         middleLetters = [array.length/2,(array.length/2)+ 1]
//     }
//     return [middleLetters,array]
// }

// function arrayRightAndLeft (middleLettersAndArray){
//     let arrayRight = [];
//     let arrayLeft = [];

//     // array on the right 
//     if (middleLettersAndArray[0].length == 1){
//         for (i = 0 ; i < middleLettersAndArray[0]-1; i ++){
//             arrayLeft.push(middleLettersAndArray[1][i])
//         }
//     } else {
//         for (i = 0 ; i < middleLettersAndArray[0][0]-1; i ++){
//             arrayLeft.push(middleLettersAndArray[1][i])
//         }
//     }

//     //array on the left
//     if (middleLettersAndArray[0].length == 1){
//         for (i = middleLettersAndArray[1].length -1 ; i >= middleLettersAndArray[0] ; i -= 1){
//             arrayRight.push(middleLettersAndArray[1][i])
//         }
//     } else {
//         for (i = middleLettersAndArray[1].length -1 ; i >= middleLettersAndArray[0][1] ; i -= 1){
//             arrayRight.push(middleLettersAndArray[1][i])
//         }
//     }
    
//     if (arrayLeft.join("") === arrayRight.join("")){
//         console.log(`Your word ${middleLettersAndArray[1].join("")} is symetrical`)
//     } else {
//         console.log(`Your word ${middleLettersAndArray[1].join("")} is not symetrical`)
//     }
// }

// arrayRightAndLeft(middleLetters(toArray(string())))