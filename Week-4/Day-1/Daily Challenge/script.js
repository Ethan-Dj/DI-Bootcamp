const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

// let usernames = []
// gameInfo.forEach(function(element,index){
//     usernames.push(`${element["username"]}!`)
// })
// console.log(usernames)

let scores = []
gameInfo.forEach(function(element){
    element["score"] > 5 ? scores.push(element["username"]) : null
})

console.log(scores)