//part 1

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

fruits.splice(0,1)

fruits.sort((a,b) => a.localeCompare(b))

fruits.shift()

fruits.sort((a,b) => a.localeCompare(b))

fruits.push("Kiwi")

fruits.reverse()

console.log(fruits)

//part 2

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(moreFruits[1][1][0])
