import React, {Component} from 'react'
import CartDisplay from './CartDisplay'

export default class Cart extends Component{
    constructor(){
        super()

        this.state ={
            input: ''
        }
        this.inputChange = this.inputChange.bind(this)
        this.deleteIndex = this.deleteIndex.bind(this)
        this.alerted = this.alerted.bind(this)
    }

    inputChange(val){
        this.setState({input:val})
    }

    deleteIndex(){
        this.props.clearCart(this.state.input)
        // let x = 5;
        // // this.props.state = [];
        // <CartDisplay erase = {x}/>
        
    }
    alerted(){
        let x = prompt("Enter your address:");
        alert(`FOOD ON THE WAY TO: "${x}"`)
       
    }

    render(){
        
        
        return(
            <div className='Cart-section'>
                <header id="cart-header">Cart</header>
                <input type="number" placeholder= "Enter Item Number" onChange={(event) => this.inputChange(event.target.value)}></input>
                <button id="cart-btn" onClick={this.deleteIndex}>Delete</button>
                <button id="cart-btn" onClick={this.alerted}>Check Out</button>
                {/* <p>{mappedDisplay}</p> */}
                <CartDisplay cart = {this.props.state}/>
            </div>
        )
    }
}