function changeColor (e){
    e.preventDefault();
    document.body.firstElementChild.style.backgroundColor = "green";
}

function changeHeight(e){
    e.preventDefault();
    document.body.firstElementChild.style.height = "300px";
}

function addBorder(e){
    e.preventDefault();
    document.body.firstElementChild.style.border = "2px solid";
}

function middle(e){
    e.preventDefault();
    document.body.style.display = "flex"
    document.body.style.justifyContent = "center"
}

document.addEventListener("click",changeColor)
document.addEventListener("mouseover",changeHeight)
document.addEventListener("mouseout",addBorder)
document.addEventListener("dblclick",middle)