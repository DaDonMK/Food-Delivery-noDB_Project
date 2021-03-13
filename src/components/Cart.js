import React, {Component} from 'react'
// import CartDisplay from './CartDisplay'

export default class Cart extends Component{
    constructor(){
        super()

        this.state ={
            input: ''
        }
        this.inputChange = this.inputChange.bind(this)
        this.deleteIndex = this.deleteIndex.bind(this)
    }

    inputChange(val){
        this.setState({input:val})
    }

    deleteIndex(){
        this.props.clearCart(this.state.input)
        
    }
    alerted(mappedDisplay){
        alert("FOOD is on its way! Be Ready!")
        mappedDisplay = null
    }

    render(){
        
        let mappedDisplay = this.props.state.map((element, i) => {
            return <p>{element.name.name} ${element.name.price}</p>
            // return "hello"
         })
         console.log("Getting passed:" + this.props.state)
        return(
            <div className='Cart-section'>
                <header>Cart</header>
                <button onClick={this.alerted}>CheckOut</button>
                <input type="number" onChange={(event) => this.inputChange(event.target.value)}></input>
                <button onClick={this.deleteIndex}>delete</button>
                <p>{mappedDisplay}</p>
                {/* <CartDisplay cart = {this.props.state}/> */}
            </div>
        )
    }
}