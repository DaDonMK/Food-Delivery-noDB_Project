const express = require('express')
const app = express()
const bc = require('./controllers/foodCtrl')

const data = require('../food.json')
// console.log(json)

const port = 4000

app.use(express.json())



app.get('/api/foods', function(req, res){
    res.send(JSON.stringify(data))
})
app.get('/api/cart', bc.read)
app.post('/api/cart', bc.create)
// app.post('/api/foods-in-cart', json)

app.put('/api/cart/:id', bc.update)
app.delete('/api/cart/:id', bc.delete)

app.listen(port, () => console.log('Server running on ' + port))
