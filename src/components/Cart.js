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
        alert(`FOOD coming your WAY at "${x}"!`)
       
        // mappedDisplay = null
    }

    render(){
        
        // let mappedDisplay = this.props.state.map((element, i) => {
        //     return <p>{element.name.name} ${element.name.price}</p>
        //     // return "hello"
        //  })
        //  console.log("Getting passed:" + this.props.state)
        return(
            <div className='Cart-section'>
                <header>Cart</header>
                <input type="number" placeholder= "Enter Item Number" onChange={(event) => this.inputChange(event.target.value)}></input>
                <button onClick={this.deleteIndex}>Delete</button>
                <button onClick={this.alerted}>CheckOut</button>
                {/* <p>{mappedDisplay}</p> */}
                <CartDisplay cart = {this.props.state}/>
            </div>
        )
    }
}