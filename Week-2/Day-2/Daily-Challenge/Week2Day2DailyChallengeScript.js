const sentance = "The cake was not that bad and pretty nice";

const wordNot = sentance.indexOf("not")

const wordBad = sentance.indexOf("bad")

const difference = Math.abs(wordBad - wordNot)

console.log(difference)
console.log(wordNot)
console.log(wordBad)

let split = sentance.split("")

console.log(split)

if (wordBad > wordNot) {
    split.splice(wordNot, difference+3, "good")
    const result = split.join("")
    console.log(result)
} else {
    console.log(sentance)
}