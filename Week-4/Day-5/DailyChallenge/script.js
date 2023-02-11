

function check(word1, word2){
    let word1Array = word1.split("")
    let word2Array = word2.split("")

    function ordering(word){
        let sorted = word.sort()
        return sorted.join("")
    }

    ordering(word1Array) === ordering(word2Array) ? 
    console.log("anagram"): console.log("not anagram")
    
}

check("yes","sey")