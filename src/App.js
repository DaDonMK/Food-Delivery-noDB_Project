import './App.css';
import React, {Component} from 'react'
import axios from 'axios'
import Header from './components/Header';
import Cart from './components/Cart'
import Finder from './components/Finder'

class App extends Component {
  constructor(){
    super()

    this.state = {
      allFood : [],
      cart: []
    }
    this.foodInCart = this.foodInCart.bind(this)
    this.clearCart = this.clearCart.bind(this)
    // this.updateCart = this.updateCart.bind(this)
  }

  componentDidMount(){
    axios.get('/api/foods')
    .then(response =>{
      this.setState({allFood: response.data})
      console.log(this.state.cart)
    })
    .catch(err => console.log(err + ' inCart'))
  }

  foodInCart(sendElementToCart){
    axios.post('/api/cart',{name: sendElementToCart})
    .then(response =>{
      console.log(response.data)
      this.setState({cart: response.data})
      console.log(this.state.cart)
      // console.log(this.state.cart[1].name.price)
    })
    .catch(err => console.log(err + 'inSendToCart'))
  }

  // updateCart(id){
  //   axios.put(`/api/cart/${id}`)
  //   .then(res => {
  //     this.setState({cart: res.data})
  //     console.log(res.data)
  //   })
  //   .catch(err => console.log(err + ' in updateCart'))
  // }

  clearCart(id) {
    axios.delete(`/api/cart/${id}`)
    .then(response =>{
      this.setState({cart: response.data})

      console.log(this.state.cart)
    })
    .catch(err => console.log(err + ' inClearCart'))
  }


  render(){
    
    return (
    <div className="App">
      <Header />
      <Finder foodInCart = {this.foodInCart} updateCart = {this.updateCart}/>
      <Cart clearCart= {this.clearCart} state={this.state.cart}/>
    </div>
  );
  }
}
  
export default App;
