import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'
import Checkout from './components/Checkout'
import Order from './components/Order'

import './App.css'

class App extends Component {
  state = {
    cartList: [],
  }

  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

  incrementCartItemQuantity = data => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(eachItem =>
        eachItem.id === data.cartItemDetails.id
          ? {...eachItem, quantity: eachItem.quantity + 1}
          : eachItem,
      ),
    }))
  }

  decrementCartItemQuantity = data => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(eachItem =>
        eachItem.id === data.cartItemDetails.id
          ? eachItem.quantity > 1
            ? {...eachItem, quantity: eachItem.quantity - 1}
            : {...eachItem, quantity: 1}
          : eachItem,
      ),
    }))
  }
  getUniqueList = (eachItem, product) => {
    if (eachItem.id !== product.id) {
      return eachItem
    } else {
      return {...eachItem, quantity: eachItem.quantity + product.quantity}
    }
  }

  addCartItem = product => {
    const {cartList} = this.state
    const isFind = cartList.find(eachItem => eachItem.id === product.id)
    if (isFind) {
      const fetchedList = cartList.map(eachItem =>
        this.getUniqueList(eachItem, product),
      )
      this.setState({cartList: fetchedList})
    } else {
      this.setState(prevState => ({cartList: [...prevState.cartList, product]}))
    }
  }

  removeCartItem = product => {
    const {cartList} = this.state
    const filteredList = cartList.filter(eachItem => eachItem.id !== product)
    this.setState({cartList: filteredList})
  }

  render() {
    const {cartList} = this.state
    const totalprice = cartList.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0,
    )
    const totalquantity = cartList.reduce((acc, item) => acc + item.quantity, 0)
    return (
      <CartContext.Provider
        value={{
          price: totalprice,
          quantity: totalquantity,
          cartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          removeAllCartItems: this.removeAllCartItems,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/products" component={Products} />
          <ProtectedRoute
            exact
            path="/products/:id"
            component={ProductItemDetails}
          />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/order" component={Order} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
