import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CartItem from './CartItem';
import Vapi from "@vapi-ai/web";

const vapi = new Vapi("28ff6416-7ee9-46a4-9ee9-dfd143722be3");

const Cart = () => {
  const [items, setItems] = useState([]);
  const apiUrl = 'https://ba35792f-e489-47ea-8048-056691ae22e0-00-37oiiyqiwu46b.picard.replit.dev:5000/api/cart';

  useEffect(() => {
    // Fetch cart items on component mount
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(apiUrl);
        setItems(response.data.items);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

     // Fetch items initially
     fetchCartItems();

     // Set up polling every 5 seconds
     const intervalId = setInterval(fetchCartItems, 500);

     return () => {
      clearInterval(intervalId); // Clean up the interval on unmount
     };
  }, []);

  const handleAdd = async (item) => {
    try {
      await axios.post(`${apiUrl}/add`, {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
        image: item.image
      });
      const response = await axios.get(apiUrl);
      setItems(response.data.items);
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  const handleRemove = async (item) => {
    try {
      await axios.post(`${apiUrl}/remove`, { id: item.id });
      const response = await axios.get(apiUrl);
      setItems(response.data.items);
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const handleDelete = async (item) => {
    try {
      await axios.post(`${apiUrl}/delete`, { id: item.id });
      const response = await axios.get(apiUrl);
      setItems(response.data.items);
    } catch (error) {
      console.error('Error deleting item from cart:', error);
    }
  };

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4 md:p-4 md:m-4 bg-gray-100 md:min-h-[700px] rounded-lg border-2">
      <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
      {items.length > 0 ? (
        <>
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onAdd={handleAdd}
              onRemove={handleRemove}
              onDelete={handleDelete}
            />
          ))}
          <h3 className="text-xl font-semibold mt-4">Total: ${totalPrice}</h3>
        </>
      ) : (
        <p className="text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
