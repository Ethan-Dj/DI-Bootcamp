// Exercise 1

// // #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne()
// // #1.2 What will happen if the variable is declared 
// // with const instead of let? There will be an error message

// //#2
// //let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
// // #2.2 What will happen if the variable is declared 
// // with const instead of let? There will be an error


// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()
// funcFive()

// //#4
// //let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // // #4.1 - run in the console:
// funcSix()
// // // #4.2 What will happen if the variable is declared 
// // // with const instead of let ? Nothing, the code will stil run

// // //#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// // // #5.1 - run the code in the console
// // // #5.2 What will happen if the variable is declared 
// // // with const instead of let ? Nothing, the code wil still work

// ///////////////////////////////////////////////////////////////////////////////////////

// Exercise 2

// function winBattle(){
//     return true;
// }

// const vinBattle = () => true;
// let experiencePoints = 1
// if (vinBattle() == true){
//     experiencePoints = 10
// }
// console.log(experiencePoints)

// Exercise 3

// const strings = thing => {
//     typeof thing  === "string" ? console.log("it is a sting") : console.log("it is not a sting")
// }

// strings("hello")

// Exercise 4

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.forEach(function(element,index){
//     console.log(`#${index+1} choise is ${element}`)
// })

//Exercise 5 
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];

// const labelling = () =>{
//     colors.forEach(function(element,index){
//         if (index > 2){
//             console.log(`My ${index+1}${ordinal[0]} favourite color is ${element}`)}
//         else{
//             console.log(`My ${index+1}${ordinal[index+1]} favourite color is ${element}`)
//         } 
//     })
// }

// labelling()

// Exercise 6
let bankAmount = 0;
const VAT = 0.17
const details = [200,-100,146,167,2900]
let sum = 0 

const taxes = () => {
    details.forEach(function(elem){
        let result = elem*VAT
        sum += result
    })
    console.log(parseFloat(sum).toFixed(2))
}

taxes()
