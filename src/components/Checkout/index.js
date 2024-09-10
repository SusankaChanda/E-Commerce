import Header from '../Header'
import CheckoutItem from '../CheckoutItem'
import CartContext from '../../context/CartContext'
import {FaShoppingCart} from 'react-icons/fa'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {FaChevronUp} from 'react-icons/fa'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const Checkout = () => {
  const [isTrue, setIsTrue] = useState(true)

  return (
    <CartContext.Consumer>
      {value => {
        const {cartList, price, quantity} = value
        let length = cartList.length

        const shipping = price > 1000 ? 'FREE' : 40
        const output = price > 1000 ? 0 : 40
        const total = price + Math.round(price * 0.05) + output

        const getChange = () => {
          setIsTrue(false)
        }

        const getChanged = () => {
          setIsTrue(true)
        }

        return (
          <>
            <Header />
            <div className="checkout-container">
              <h1 className="checkout-heading">Order Summery</h1>
              <div className="checkout-inner-container">
                <div className="checkout-item-container">
                  <FaShoppingCart className="checkout-image" />
                  <p className="checkout-quentity">
                    {length} <span className="checkout-item">item</span>
                  </p>
                  {isTrue ? (
                    <RiArrowDropDownLine
                      className="checkout-dropdown-image"
                      onClick={getChange}
                    />
                  ) : (
                    <FaChevronUp
                      className="checkout-dropup-image"
                      onClick={getChanged}
                    />
                  )}
                </div>
                <div>
                  <p className="checkout-price">{price}/-</p>
                </div>
              </div>
              {isTrue && (
                <ul className="checkout-ul-container">
                  {cartList.map(eachItem => (
                    <CheckoutItem eachDetails={eachItem} key={eachItem.id} />
                  ))}
                </ul>
              )}
              <hr />
              <div className="checkout-sub-container">
                <p className="checkout-subtotal">SubTotal</p>
                <p className="checkout-subprice">{price}</p>
              </div>
              <div className="checkout-sub-container1">
                <p className="checkout-subtotal">Shipping</p>
                <p className="checkout-subprice">{shipping}</p>
              </div>
              <div className="checkout-sub-container2">
                <p className="checkout-tax">Tax</p>
                <p className="checkout-taxprice">{Math.round(price * 0.05)}</p>
              </div>
              <hr />
              <div className="checkout-sub-container3">
                <p className="checkout-subtotal">Order Total</p>
                <p className="checkout-subprice">{total}</p>
              </div>
              <div className="checkout-sub-container4">
                <Link to="/cart">
                  <button className="checkout-checkitem">Check Item</button>
                </Link>
                <Link to="/order">
                  <button className="checkout-placeout">Place Order</button>
                </Link>
              </div>
            </div>
          </>
        )
      }}
    </CartContext.Consumer>
  )
}

export default Checkout
