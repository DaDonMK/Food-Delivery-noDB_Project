import React, {Component} from 'react'
import Total from './Total'

class CartDisplay extends Component{

    constructor(){
        super()

        this.state= {
            totalArr : [],
            total : 0
        }
    }

    render(){
        // let realMinus = 0 - this.props.minus
        let arr = []
        let total = 0
        // console.log("realMinus: "+ realMinus)
        let price = []
        // if(!this.state.totalArr.includes(realMinus)){

        // }
                    // this.state.totalArr.push(realMinus)

        let mappedDisplay = this.props.cart.map((element, i) => {
            if(!arr.includes(element.name.price)){
                    arr.push(element.name.price)

                price.push(element.name.price)
            }

        
       

            return <p>ITEM {i + 1}: {element.name.name} PRICE: ${element.name.price}</p>
            
         })


        if(this.props.minus !== null){
            price.splice(this.props.minus, 1)
        }

        console.log('price arr: '+ price)

         let mapTotal = arr.map((element) => {
             total += element
             return element
         })
         console.log('total is '+ mapTotal)
        // console.log("total Arr is:" + this.state.totalArr)

         return (
             <div className = 'Cart-Display'>
                <p>{mappedDisplay}</p>
                <p>{this.totalMapped}</p>
                {/* <Total totalArr = {arr} /> */}
                <p>TOTAL: ${total}</p>
           </div> 
           )
        
        
    }
}

 export default CartDisplay