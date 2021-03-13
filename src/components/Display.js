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

                 <p id="name-price">{this.props.element.name} </p>
                 <br />
                 <p id="name-price"> ${this.props.element.price}</p>
                 <img src= {this.props.element.img} alt='food'></img>
                 <br />
                 <button id="order-button" onClick={this.handleCart}>{this.props.element.name}</button>
                 
            </div>
            
        )
    }
}