import Header from '../Header'
import './index.css'
import {RiCheckboxCircleFill} from 'react-icons/ri'
import {Link} from 'react-router-dom'

const Order = () => {
  return (
    <>
      <Header />
      <div className="order-container">
        <div className="order-1stcontainer">
          <div className="order-inner-container">
            <RiCheckboxCircleFill className="order-image" />
            <p className="order-name">Hey Susanka Chada</p>
            <p className="order-text">Your Order is Confirmed!</p>
            <p className="order-description">
              Order Confirmed! Your package is now on a wild ride—if it shows up
              with a suntan, don’t ask questions!
            </p>
            <div className="order-button-container">
              <Link to="/cart">
                <button className="order-checkitem">Check Item </button>
              </Link>
              <Link to="/">
                <button className="order-checkitem1">Back to Home </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Order
