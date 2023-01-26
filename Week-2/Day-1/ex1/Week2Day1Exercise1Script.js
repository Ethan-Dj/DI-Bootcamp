const adressNumber = 22;
const adressStreet = "Ben Gurion";
const country = "Israel";

const globalAdress = `The globale adress is ${adressNumber} ${adressStreet} ${country}`

console.log(globalAdress)

const birthYear = 2000;
const futureYear = 2028;
const sentance = `I will be ${futureYear - birthYear}`

console.log(sentance)

const pets = ["cat","dog","fish","rabbit","cow"];
console.log(pets[1]);

let newList = pets.splice(1,1,"horse");
console.log(pets)

let gth = newList.length;
console.log(gth)