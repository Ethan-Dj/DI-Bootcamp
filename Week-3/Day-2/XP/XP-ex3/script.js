var allBoldItems = [];

function getBold_items(){
    allBoldItems = document.getElementsByTagName("strong")
    console.log(allBoldItems)
}

function highlight() {
    for (let boldP of allBoldItems){
        boldP.style.color = "red"
    }
}

function returnNormal(){
    for (let nonBold of allBoldItems){
        nonBold.style.color = "black"
    }
}

getBold_items()
// highlight()
// returnNormal()
let para = document.getElementsByTagName("p")[0];
console.log(para)
para.addEventListener("mouseover", highlight);

para.addEventListener("mouseout",returnNormal)