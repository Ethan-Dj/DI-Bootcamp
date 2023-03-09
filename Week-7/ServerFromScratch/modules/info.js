
const db = ("../config/db.js")
// allows us to access the database through the  db.js file 

function getAllEntered(){
    return db("products")
    .select("id","value")
}
// the above function returns a promise that resolves to an array of objects 
// this is a promise because we getting data from the web and this takes time

// in js, if data is being CRUD than it is definately a promise

function inputValue (value){
    return db("products")
    .insert(value)
}


module.exports = {
    inputValue,
    getAllEntered
}