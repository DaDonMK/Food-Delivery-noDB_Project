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
        let realMinus = 0 -this.props.minus
        // console.log("realMinus: "+ realMinus)
        if(!this.state.totalArr.includes(realMinus)){
                    this.state.totalArr.push(realMinus)

        }

        let mappedDisplay = this.props.cart.map((element, i) => {
            if(!this.state.totalArr.includes(element.name.price)){
                    this.state.totalArr.push(element.name.price)

                    // this.state.total = this.state.total + element.name.price - this.props.minus
                    // console.log('total with minus is: '+ this.state.total)
            }

            
        // let totalMapped = this.state.totalArr.reduce((acc, curr) => {
        //     this.state.total =  acc + curr
        // })
            // console.log("prices are " + this.state.total)
            // console.log("prices array is" + this.props.cart)
            // console.log("state total " +this.state.total)
            return <p>ITEM {element.id}: {element.name.name} PRICE: ${element.name.price}</p>
            
         })
        // console.log("total Arr is:" + this.state.totalArr)

         return (
             <div className = 'Cart-Display'>
                <p>{mappedDisplay}</p>
                <p>{this.totalMapped}</p>
                <Total totalArr = {this.state.totalArr} />
                {/* <p>TOTAL: ${this.state.total}</p> */}
           </div> 
           )
        
        
    }
}

 export default CartDisplay