import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.new_price * item.quantity);
    }, 0);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">Your cart is empty</p>
        </div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={`${item.id}-${item.size}`} className="flex items-center gap-6 p-4 border rounded-lg">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
              
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600">Size: {item.size}</p>
                <p className="text-orange-500 font-bold">${item.new_price}</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded">
                  <button
                    onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                    className="px-3 py-1 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-3 py-1">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                    className="px-3 py-1 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                
                <button
                  onClick={() => removeFromCart(item.id, item.size)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          
          <div className="border-t pt-6 mt-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Total</h2>
              <p className="text-2xl font-bold text-orange-500">${calculateTotal().toFixed(2)}</p>
            </div>
            
            <button className="w-full mt-6 bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;