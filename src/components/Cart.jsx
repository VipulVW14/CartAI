import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CartItem from './CartItem';

const Cart = () => {
  const [items, setItems] = useState([]);
  const apiUrl = 'https://voicedemoapi.soluperts.com/api/cart';

  useEffect(() => {
    // Fetch cart items on component mount
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(apiUrl);
        setItems(response?.data?.items);
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
      // Prepare the item to add
      const itemToAdd = {
        Id: item.id,
        Name: item.name,
        Price: item.price,
        Quantity: 1, // Assuming you want to add one at a time
        Image: item.image
      };
  
      await axios.post(`${apiUrl}/add`, { Items: [itemToAdd] }); // Send directly as Items
  
      // Refresh cart items after adding
      const response = await axios.get(apiUrl);
      setItems(response.data.items);
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };
  
  const handleRemove = async (item) => {
    try {
      // Prepare the item to remove (decrease quantity)
      const itemToRemove = {
        Id: item.id,
        Quantity: 1 // Decrease quantity by 1
      };
  
      await axios.post(`${apiUrl}/delete`, { Items: [itemToRemove] }); // Send directly as Items
  
      // Refresh cart items after removal
      const response = await axios.get(apiUrl);
      setItems(response.data.items);
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };
  
  const handleDelete = async (item) => {
    try {
      // Prepare the item to delete
      const itemToDelete = {
        Id: item.id
      };
  
      await axios.post(`${apiUrl}/delete`, { Items: [itemToDelete] }); // Send directly as Items
  
      // Refresh cart items after deletion
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
