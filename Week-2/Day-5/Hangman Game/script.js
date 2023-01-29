var word = ""
var guessedLetters = "";

function getWord (){
    word = prompt("Player 1 Choose a word")
    return word
}

function chooseLetter() {
    let letter = prompt("Choose a letter")
    return letter
}

function stars(word){
    let starsString = ""
    for (i = 0; i < word.length; i++ ){
        starsString += "*"
    }
    return starsString
}

function guessWord(){
    let word = getWord();
    let guessedCorretly = stars(word);
    let guessedCorretlyArray = guessedCorretly.split("");
    let wordArray = word.split("");
    let wrongLettersArray = [];
    let changes;
    let numberOfAttempts = 0;

    while (guessedCorretlyArray.join("") != word){
        // checks number of attempts
        if (numberOfAttempts == 9){
            console.log("You have had 10 attempts! You loose :(")
            break
        }
        
        letterGuess = chooseLetter();
        changes = false
        for (i = 0; i < word.length ; i++){
            if (letterGuess == word[i]){
                guessedCorretlyArray[i] = letterGuess;
                changes = true;
            } 
        }

        if (changes == false){
            let alreadyGuessed = false;
            // checks if the wrong guessed letter is in the wrong array
            for (i = 0; i < wrongLettersArray.length ; i++){
                if (letterGuess === wrongLettersArray[i]){
                    alreadyGuessed = true
                }
            }
            // adds letter to wrong array list
            if (alreadyGuessed == false){
                wrongLettersArray.push(letterGuess);
                numberOfAttempts ++
                alreadyGuessed == false
            } else if (alreadyGuessed == true){
                alert("You have already guessed this letter, try a different one!")
            }

        }
        console.log(wrongLettersArray)
        console.log(guessedCorretlyArray.join(""))
        console.log(numberOfAttempts) 
    }
    }
   
guessWord()