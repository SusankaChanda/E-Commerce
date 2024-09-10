// Write your code here
import {Link} from 'react-router-dom'
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const total = cartList.reduce((sum, eachItem) => {
        return sum + eachItem.price * eachItem.quantity
      }, 0)
      return (
        <div className="cart_summery_container">
          <h1 className="summery_title">
            Order Total:<span> RS {total}/-</span>
          </h1>
          <p className="cart_simmery_paragraph">
            {cartList.length} Items in cart
          </p>
          <Link to="/checkout" className="link-item">
            <button className="cart_summery_button">Checkout</button>
          </Link>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
