import React, {Component} from 'react'
import axios from 'axios'
import Display from './Display'

export  default class Finder extends Component{
    constructor(props){
        super(props)

        this.state = {
            menu : [],
            count: 0
        }
         this.getMenu = this.getMenu.bind(this)
    }

    componentDidMount(){
        this.getMenu()
    }

    getMenu(){
        axios.get('/api/foods')
        .then(res => {
            this.setState({menu: res.data})
            // console.log('elements:' + res.data)
        })
        .catch(err => console.log(err +' in getMenu'))
    }
   

    render(){

        console.log(this.state.menu)
        const mappedMenu = this.state.menu.map((element, i) => (
            <Display 
            key = {i}
            element = {element}
            foodInCart = {this.props.foodInCart}
            updateCart = {this.props.updateCart}
            // Menu = {this.props.getMenu}
            />
            
    ))
        return(
            <div className = 'Finder'>
                <p>{mappedMenu}</p>
            </div>
        )
    }

}
