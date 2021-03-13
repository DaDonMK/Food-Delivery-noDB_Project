import React, {Component} from 'react'

class CartDisplay extends Component{

    render(){
        if(this.props.erase === 5){
            return <p>Nothing to see here</p>
        }else{
        let mappedDisplay = this.props.cart.map((element, i) => {
            return <p>ITEM {element.id}: {element.name.name} PRICE: ${element.name.price}</p>
         })

         return (<p>{mappedDisplay}</p>)
        }
    }
}

 export default CartDisplay