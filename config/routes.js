const express = require('express')
const routes = express.Router()

let db = [
    {"1": {passageiro: 'Raquel', Age: '19', cpf: '124505', valor: '70,00'} },
    {"2": {passageiro: 'Edmundo', Age: '45', cpf: '145265', valor: '37,50'} },
    {"3": {passageiro: 'Jair', Age: '57', cpf: '154047', valor: '70,00'} }
]

routes.get('/passengers', (req, res) => {
    return res.json(db)
})

routes.post('/add', (req, res) => {
    const body = req.body

    if (!body)
        return res.status(400).end()

    db.push(body)
    return res.json(body)
})

routes.delete('/:id', (req,res) => {
    const id = req.params.id

    let newDB = db.filter(item => {
        if(!item[id])
           return item
    })
    
     db = newDB

     return res.send(newDB)
})
 
   
module.exports = routes 