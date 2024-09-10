import React from 'react'

const CartContext = React.createContext({
  cartList: [
    {
      id: 1,
      title: 'Wireless Bluetooth Headphones',
      brand: 'Sony',
      quantity: 2,
      price: 150,
      imageUrl: 'https://example.com/images/headphones.jpg',
    },
    {
      id: 2,
      title: 'Smartphone',
      brand: 'Samsung',
      quantity: 1,
      price: 800,
      imageUrl: 'https://example.com/images/smartphone.jpg',
    },
    {
      id: 3,
      title: 'Smartwatch',
      brand: 'Apple',
      quantity: 1,
      price: 350,
      imageUrl: 'https://example.com/images/smartwatch.jpg',
    },
    // Add more items as needed...
  ],
  removeAllCartItems: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
  price: 0,
  quantity: 0,
})

export default CartContext
