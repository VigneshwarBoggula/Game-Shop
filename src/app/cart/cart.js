import React, { useState, useEffect } from 'react';
import Navbar from './NavBar';
import './cart.css';
import trashIcon from './trash.svg';

const CartItem = ({ id, name, image, price, quantity, removeFromCart, reduceQuantity, increaseQuantity }) => {
  return (
    <li className="cart-item">
      <img className="item-img" src={require(`./${image}`)} alt={name} />
      <div className="item-details">
        <h3 className="item-name">{name}</h3>
        <div className="quantity">
          <button className="minus-button" onClick={() => reduceQuantity(id)}>-</button>
          <input type="text" className="quantity-input" value={quantity} readOnly />
          <button className="plus-button" onClick={() => increaseQuantity(id)}>+</button>
          <button className="delete-button" onClick={() => removeFromCart(id)}><img src={trashIcon} alt="Delete" /></button>
        </div>
        <span className="item-price">${price}</span>
      </div>
    </li>
  );
};

const OrderSummary = ({ subtotal, shippingCost, taxEstimate, total }) => {
  return (
    <div id="receipt">
      <h3 id="order-summary">Order Summary</h3>
      <ul id="total-summary">
        <li className="subtotal-item">Subtotal: <span>${subtotal}</span></li>
        <li className="subtotal-item">Shipping Cost: <span>${shippingCost}</span></li>
        <li className="subtotal-item">Tax Estimate: <span>${taxEstimate}</span></li>
        <li className="subtotal-item"><h2>Total:</h2> <h2><span>${total}</span></h2></li>
      </ul>
      <button id="checkout">Checkout</button>
    </div>
  );
};

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Scrimblo's Adventure", image: "game.jpg", price: 79.99, quantity: 1 },
    { id: 2, name: "A Peaceful Walk", image: "game2.jpg", price: 1.99, quantity: 1 }
  ]);

  const [subtotal, setSubtotal] = useState(0);
  const [taxEstimate, setTaxEstimate] = useState(0);
  const [total, setTotal] = useState(0);

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const reduceQuantity = (id) => {
    setCartItems(prevCartItems =>
      prevCartItems
        .map(item =>
          item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const increaseQuantity = (id) => {
    setCartItems(prevCartItems =>
      prevCartItems
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  useEffect(() => {
    const shippingCost = 5.00;
    const taxRate = 0.15;
    const calculateSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    const calculateTaxEstimate = (calculateSubtotal * taxRate).toFixed(2);
    const calculateTotal = (parseFloat(calculateSubtotal) + parseFloat(shippingCost) + parseFloat(calculateTaxEstimate)).toFixed(2);

    setSubtotal(calculateSubtotal);
    setTaxEstimate(calculateTaxEstimate);
    setTotal(calculateTotal);
  }, [cartItems]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div id="shopping-cart">
          <h1 id="cart-title">Your Cart</h1>
          <ul>
            {cartItems.map(item => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                quantity={item.quantity}
                removeFromCart={removeFromCart}
                reduceQuantity={reduceQuantity}
                increaseQuantity={increaseQuantity}
              />
            ))}
          </ul>
        </div>
        <OrderSummary
          subtotal={subtotal}
          shippingCost={5.00}
          taxEstimate={taxEstimate}
          total={total}
        />
      </div>
    </div>
  );
};

export default ShoppingCart;
