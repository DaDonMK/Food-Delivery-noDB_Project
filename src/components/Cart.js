import React, {Component} from 'react'
import CartDisplay from './CartDisplay'


export default class Cart extends Component{
    constructor(){
        super()

        this.state ={
            input: '',
            minus : null
        }
        this.inputChange = this.inputChange.bind(this)
        this.deleteIndex = this.deleteIndex.bind(this)
        this.alerted = this.alerted.bind(this)
    }

    inputChange(val){
        this.setState({input:val})
    }

    deleteIndex=() => {
        let y = (this.state.input);
        let popFromPriceArr = y - 1
        // let minusVal = 0
        this.setState({minus: popFromPriceArr})
        this.props.clearCart(this.state.input);
        // console.log(this.props.state[y-1])
        // if(this.props.state.length <= 1){
        //      minusVal =  this.props.state[y-1].name.price
        //     this.setState({minus: minusVal})

        // }else{
        //     this.setState({minus: 10})
        // }


        // this.setState({input: ''})
        // return (this.state.minus)
        // this.setState({minus: this.})
        // <CartDisplay minus={y} />
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
                <input  placeholder= "Enter Item Number" onChange={(event) => this.inputChange(event.target.value)}></input>
                <button id="cart-btn" onClick={this.deleteIndex}>Delete</button>
                <button id="cart-btn" onClick={this.alerted}>Check Out</button>
                {/* <p>{mappedDisplay}</p> */}
                <CartDisplay cart = {this.props.state} minus = {this.state.minus}/>
            </div>
        )
    }
}