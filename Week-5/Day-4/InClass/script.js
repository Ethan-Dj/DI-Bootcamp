// // Exercise Game - The word game You need to create 4 functions, 
// //each of them return a promises
// //The 1st function, receives 2 famous persons name from the user 
// // if the names are not a string -> reject else - resolve with the name of the 2 ppl in an array

// function names(name1, name2){
//     if (typeof name1 == "string" && typeof name1 == "string"){
//         return [name1,name2]
//     } else {
//         throw new Error("One of the two names is not a")
//     }
// }

// //The 2nd function, receives a noun if the noun is less than 3 
// //letters - reject else - resolve with the noun

// function nouns(noun){
//     if(noun.length <= 3){
//         throw new Error("The noun is too short")
//     } else {
//         return(noun)
//     }
// }

// // The 3rd function, receives a city if the city doesn't start with
// // an uppercase letter -> reject else - resolve with the city name

// function city(city){
//     if (city[0] === city[0].toUpperCase()){
//         return city 
//     } else {
//         throw new Error("First letter of city does not have a capital letter")
//     }
// }

// //The 4st function, receives a verb (finishing with "ing") if it doesn't end
// // with "ing" -> reject (use the endWith string method) else resolve with the verb

// function verb(verb){
//     const cut = verb.length-3
//     const ing = verb.substring(cut,verb.length)
//     if (ing == "ing"){
//         return verb
//     } else {
//         throw new Error("not an ing verb")
//     }
// }

// // The last function, is an async function - 
// // it receives all the above promises, and return a 
// // sentence with it Ex: "Beyonce is playing football with Barack Obama in Paris"

// async function asynchro(){
//     try{
//         const res1 = await names("Beyonce", "Barack Obama")
//         const res2 = await nouns("football")
//         const res3 = await city ("Paris")
//         const res4 = await verb("playing")
//         console.log(res1, res2, res3, res4)

//     } catch (err){
//         console.log(err)
//     }
// }
// asynchro()


