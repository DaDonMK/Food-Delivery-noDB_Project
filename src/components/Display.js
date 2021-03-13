import React, {Component} from 'react'

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
        return(
            <div className = "Display">

                 <p>{this.props.element.name}</p>
                 <button onClick={this.handleCart}>{this.props.element.name}</button>
            </div>
            
        )
    }
}