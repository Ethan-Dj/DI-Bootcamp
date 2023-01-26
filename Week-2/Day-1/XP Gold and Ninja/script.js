let sentence = ["my","favorite","color","is","blue"];

let sentanceConnected = `${sentence[0]} ${sentence[1]} ${sentence[2]} ${sentence[3]} ${sentence[4]}`

console.log(sentanceConnected)

let str1 = "mix";
let str2 = "pod";

let array = sentanceConnected.split("")

console.log(array)

array.splice(0,2)

console.log(array)

let back = array.join("")

console.log(back)

let num1 = prompt("Choose a number!")


