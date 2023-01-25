function stringToArray (){
    string = prompt("Enter a sentance!")
    array = string.split(" ")
    return array
}

function arrays (array){
    let lengthCheck = [];
    let length = 0;
    let finalArray = [];
    let emptySpace = []

    // creates array of word length
    for (i = 0; i < array.length; i++){
        lengthCheck.push(array[i].length)
    }


    //finds the longest word in our array
    for (i = 0; i < array.length; i ++){
        if (lengthCheck[i] > length){
            length = lengthCheck[i]
        }
    }  


    //determines the empty space for each line
    for (i = 0; i < array.length; i++){
        let specificWordLength = 0;
        specificWordLength = array[i].length
        emptySpace.push(length - specificWordLength)
    }   

    
    //creates an array with corresponding empty space
    for (i = 0; i < array.length; i++){
        finalArray.push(array[i])
        for (t = 0; t < emptySpace[i]; t++){
            finalArray[i] += " "}
    }
    return finalArray
}


// makes the string of stars
function stars (length){
    let starString = ""
    for (i = 0; i < (length + 4); i ++){
        starString += "*"
    }
    return starString
}


// produces the final result
function allTogether (){
    let array = stringToArray()
    let finalArray = arrays(array)
    stars = stars(finalArray[0].length)
    console.log(stars)
    for (i = 0; i < finalArray.length; i++){
        let string = ""
        string += "* "
        string += finalArray[i]
        string += " *"
        console.log(string)
    }
}


allTogether()