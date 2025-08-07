import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import './Cart.css';

function Cart() {
  const { cart, setcart } = useContext(CartContext);
  const [purchased, setPurchased] = useState([]);

  function remove(index) {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setcart(updatedCart);
  }

  function buyNow(index) {
    const item = cart[index];
    setPurchased([...purchased, item]);
    remove(index);
    alert("Thank you for your purchase!");
  }

  function handleProceedToPay() {
    alert("Thanks for shopping!");
    setPurchased([]); 
  }

  const totalPrice = purchased.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <h1 className="empty-cart">Your cart is empty</h1>
      ) : (
        cart.map((product, index) => (
          <div className="cart-item" key={index}>
            <h1>{product.brand}</h1>
            <h2>{product.description}</h2>
            <p>Price $: {product.price}</p>
            <img src={product.thumbnail} alt={product.brand} />
            <div className="cart-buttons">
              <button onClick={() => remove(index)}>Remove</button>
              <button onClick={() => buyNow(index)}>Buy Now</button>
            </div>
          </div>
        ))
      )}

     
      {purchased.length > 0 && (
        <div className="purchase-summary">
          <h3>Purchase Summary</h3>
          <ul>
            {purchased.map((item, idx) => (
              <li key={idx}>
                {item.brand} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <p>Total Items: {purchased.length}</p>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          <button className="pay-button" onClick={handleProceedToPay}>
            Proceed to Pay
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;