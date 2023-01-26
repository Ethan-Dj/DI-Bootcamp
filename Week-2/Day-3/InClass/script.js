for (let i = 1; i <= 15; i++){
    if (i%2 == 0 ){
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}

//part2
const prices = [23, 15, 34, 10];

let sum = 0;

for(let c = 0; c < prices.length; c++){
    sum += prices[c];
}

console.log(sum)