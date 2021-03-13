import React, {Component} from 'react'
import Cart from './Cart'

export default class Display extends Component{
    handleCart = () => {
        const {element} = this.props

        let sendElementToCart = {
            name: element.name,
            price: element.price
        }
       
        this.props.foodInCart(sendElementToCart)
        // this.props.Menu()
        
    }
    
    render(){
         console.log(this.props.element)
        return(
            <div className = "Display">

                 <p>ITEM: {this.props.element.name} PRICE: ${this.props.element.price}</p>
                 <img src= {this.props.element.img} alt='food'></img>
                 <br />
                 <button onClick={this.handleCart}>{this.props.element.name}</button>
                 
            </div>
            
        )
    }
}