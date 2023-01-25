// let arrayRow = []
// let array = []
// let stringArray = ""

// without nesting 

// for (let p = 0; p < 6; p ++ ){
//     arrayRow.push(" * ")
//     console.log(arrayRow.join(""))
// }
 
// with nesting


// let row = [] 

// for (let p = 0; p < 6; p ++ ){
//     row = []
//     for (let i = 0; i <= p; i++){
//     row.push(" * ")
//     }
//     console.log(row.join(""))
// }

//Daily Challenge Gold

const numbers = [5,0,9,1,7,4,2,6,3,8];

let swapsPerPass;
let firstNumber = 0; 
let secondNumber = 0;

while (swapsPerPass != 0){ 
    swapsPerPass = 0;
    for (let i = 0; i < numbers.length; i ++){
        firstNumber = numbers[i];
        secondNumber = numbers[i + 1];

        if (firstNumber > secondNumber){
            numbers[i]= secondNumber
            numbers[i+1]= firstNumber
            swapsPerPass +=1
        }
    }
}

console.log(numbers)