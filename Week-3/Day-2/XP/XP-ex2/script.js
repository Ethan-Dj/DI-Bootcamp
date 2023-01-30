// part 1

let forms = document.querySelectorAll("form")[0]
//console.log(forms)

// part 2

//forms.addEventListener("submit", retrieveValue);

// function retrieveValue(e){
//     console.log(e)
//     e.preventDefault(); 
//     const firstName = e.target.fname.value;
//     const lastName = e.target.lname.value;
//     console.log(firstName)
//     console.log(lastName)
// }

// part 3

var names = []

function listItem (){
    let listInput = document.getElementsByTagName("ul")[0]
    for (let i = 0; i < names.length; i ++){
        let listElement = document.createElement("li");
        let content = document.createTextNode(`${names[i]}`)
        listElement.appendChild(content)
        listInput.appendChild(listElement)
    }

}

function retrieveValue(e){
    e.preventDefault(); 
    const firstName = document.querySelector("[name = fname]").value
    const lastName = document.querySelector("[name = lname]").value

    names.push(firstName)
    names.push(lastName)
    listItem()
}

forms.addEventListener("submit", retrieveValue);

