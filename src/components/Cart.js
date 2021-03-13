import React, {Component} from 'react'


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
    alerted(){
        alert("FOOD is on its way! Be Ready!")
    }


    render(){
        return(
            <div className='Cart-section'>
                <header>Cart</header>
                <button onClick={this.alerted}>CheckOut</button>
                <input type="numer" onChange={(event) => this.inputChange(event.target.value)}></input>
                <button onClick={this.deleteIndex}>delete</button>
            </div>
        )
    }
}