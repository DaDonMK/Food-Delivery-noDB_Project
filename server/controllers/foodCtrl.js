const cart = []
let id = 1

module.exports = {

    read: (req, res) => {
        res.status(200).send(cart)
    },
    
    create: (req, res) => {
        const {price} = req.body
        const {quant} = req.body
        cart.push(
            {
                id: id,
                name: req.body.name,
                quant: quant + 1,
                price: price
            }
        )
         id++
        res.status(200).send(cart)
    },

    update: (req, res) => {
        const {id} = req.params
        const {quant} = req.body
        let upQuant = null
        let foodIndex = 0
        cart.map((element, index) => {
            if(element.id === +id){
                foodIndex = index
                upQuant = +quant + 1
            }
        })
        let updateName = {
            id: +id,
            name: req.body.name,
            quant: upQuant,
            price: req.body.price,
        }
        cart.splice(foodIndex, 0, updateName)
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