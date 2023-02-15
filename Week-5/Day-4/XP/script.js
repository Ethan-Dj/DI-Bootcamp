// ex1 
// fetch("https://www.swapi.tech/api/starships/9/")
// //     .then(response => response.json())
// //     .then(objectStarWars => console.log(objectStarWars.result));

// async function starWars(){
//     try{
//         const response = await fetch ("https://www.swapi.tech/api/starships/9/")
//         if(response.status !== 200){
//             throw new Error("we have an error")
//         }
        
//         const responseJSON = await response.json()
//         console.log(responseJSON.result.properties)
//     } catch(err){
//         console.log(err)
//     }
// }

// starWars()

// ex 2
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// result will be: calling, resolved