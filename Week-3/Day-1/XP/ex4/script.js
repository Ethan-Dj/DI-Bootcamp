let booksId = document.getElementsByClassName("listBooks");

let Book1 = {
    title: "Book1",
    author: "Author1",
    img: "Book-Cover.jpeg",
    alreadyRead: true,
}

let Book2 = {
    title: "Book2",
    author: "Author2",
    img: "Other-Book-Cover.jpeg",
    alreadyRead: false,
}

let arrays = [Book1, Book2];

let tableRows = document.getElementsByTagName("tr");

tableRows[0].children[0].textContent = `${Book1["title"]} was written by ${Book1["author"]}`
tableRows[0].children[1].textContent = `${Book2["title"]} was written by ${Book2["author"]}`

cell1 = tableRows[1].children[0]
cell2 = tableRows[1].children[1]

let img1 = document.createElement("img");
img1.src = Book1["img"];
cell1.appendChild(img1);

let img2 = document.createElement("img");
img2.src = Book2["img"];
cell2.appendChild(img2);

tableRows[1].children[0].children[0].style.width = "100px"
tableRows[1].children[1].children[0].style.width = "100px"

if (Book1["alreadyRead"] == true){
    tableRows[0].children[0].style.color="red";
}

if (Book2["alreadyRead"] == true){
    tableRows[0].children[0].style.color="red";
}