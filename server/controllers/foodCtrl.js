// import * as foods from '.../food.json'
const cart = []
let id = 1

module.exports = {

    read: (req, res) => {
        res.status(200).send(cart)
    },
    
    create: (req, res) => {
        const {name} = req.body
        const {price} = req.body
        cart.push(
            {
                id: id,
                name: req.body.name,
                price: price
            }
        )
         id++
        res.status(200).send(cart)
    },

    update: (req, res) => {
        const {id} = req.params
        const {name} = req.body
        let price = 0
        let foodIndex = 0
        cart.map((element, index) => {
            if(element.id === +id){
                foodIndex = index
                price = index.price
            }
        })
        let updateName = {
            id: +id,
            name: req.body.name,
            price: price
        }
        cart.splice(foodIndex, 1, updateName)
        res.status(200).send(cart)
    },
    delete: (req, res) => {
        const {id} = req.params
        let index2 = 0

        cart.map((element, i) => {
            if(element.id === +id){
                index2 = i
            }
        })

        cart.splice(index2, 1)
        res.status(200).send(cart)
    }



}