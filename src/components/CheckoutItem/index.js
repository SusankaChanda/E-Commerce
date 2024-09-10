import './index.css'
const CheckoutItem = props => {
  const {eachDetails} = props
  const {id, title, brand, quantity, price, imageUrl} = eachDetails
  return (
    <li className="cart-item">
      <img className="cart-product-image" src={imageUrl} alt={title} />
      <div className="cart-item-details-container">
        <div className="cart-product-title-brand-container">
          <p className="cart-product-title">{title}</p>
          <p className="cart-product-brand">by {brand}</p>
        </div>
        <p className="cart-total-price">Rs {price * quantity}/-</p>
      </div>
    </li>
  )
}
export default CheckoutItem
