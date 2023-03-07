

const {getAll, addImg} = require('..modules/image.js')

const _getAll = (req,res) => {
    getAll()
    .then(data => res.json(data))
    .catch(err => console.log(err))
}

const _addImg = (req,res) => {
    addImg(req.body)
    .then(data => res.json(data))
    .catch(err => console.log(err))
}

module.exports = {_getAll, _addImg}