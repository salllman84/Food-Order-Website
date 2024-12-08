import React, { useState } from 'react';
import Header from '../components/Header';
import CartItem from '../components/CartItem';
import TotalPrice from '../components/TotalPrice';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'; // To link to Menu or Home

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { name: 'Pizza', price: 10.99, quantity: 2 },
    { name: 'Burger', price: 5.99, quantity: 1 }
  ]);
  
  const removeItem = (index) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <Header />
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty. <Link to="/menu">Continue Shopping</Link></p>
        ) : (
          cartItems.map((item, index) => (
            <CartItem key={index} {...item} removeItem={() => removeItem(index)} />
          ))
        )}
      </div>
      {cartItems.length > 0 && <TotalPrice total={totalPrice} />}
      <div className="cart-actions">
        <button disabled={cartItems.length === 0}>Proceed to Checkout</button>
        <Link to="/menu">
          <button>Continue Shopping</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
