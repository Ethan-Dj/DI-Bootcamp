db = require('../config/db.js')

const getAll = () => {
    return db('images')
    .select('id','long','lat','img')
    .orderBy("id DESCS")
}

const addImg = (long,lat,img) => { // taking parameters
    return db('images')
    .insert(long,lat,img) // inserting ket and value 
}

module.exports = {
    getAll,
    addImg
}
