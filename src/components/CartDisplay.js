import React, {Component} from 'react'

class CartDisplay extends Component{

    constructor(){
        super()

        this.state= {
            total : 0
        }
    }

    render(){
        
        let mappedDisplay = this.props.cart.map((element, i) => {
            this.state.total = this.state.total + element.name.price
            return <p>ITEM {element.id}: {element.name.name} PRICE: ${element.name.price}</p>
            
         })

         return (
             <div className = 'Cart-Display'>
                <p>{mappedDisplay}</p>
                <p>TOTAL: ${this.state.total}</p>
           </div> 
           )
        
        
    }
}

 export default CartDisplay