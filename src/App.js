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
      cart : [],
    }
    this.foodInCart = this.foodInCart.bind(this)
  }

  componentDidMount(){
    axios.get('/api/foods')
    .then(response =>{
      this.setState({cart: response.data})
      // console.log(response)
    })
    .catch(err => console.log(err + ' inCart'))
  }

  foodInCart(sendElementToCart){
    axios.post('/api/cart',{name: sendElementToCart})
    .then(response =>{
      // console.log(response.data)
      this.setState({cart: response.data})
      console.log(this.state.cart)
      console.log(this.state.cart[1].name.price)

    })
    .catch(err => console.log(err + 'inSendToCart'))
  }

  clearCart(id) {
    axios.delete(`/api/cart/${id}`)
    .then(response =>{
      this.setState({cart: response.data})
      // console.log(this.state.cart)
    })
    .catch(err => console.log(err + ' inClearCart'))
  }


  render(){
    
    // console.log(data)
    return (
    <div className="App">
      <Header />
      <Finder foodInCart = {this.foodInCart}/>
      <Cart clearCart= {this.clearCart}/>
      {/* <img src='https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/master/pass/Smashburger-recipe-120219.jpg'></img> */}

    </div>
  );
  }
}
  
export default App;
