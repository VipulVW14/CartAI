import React from 'react';

const CartItem = ({ item, onAdd, onRemove, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md mb-4">
      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
      <div className="flex-1 ml-4">
        <h4 className="font-semibold text-lg">{item.name}</h4>
        <p className="text-gray-600">${item.price}</p>
      </div>
      <div className="flex items-center">
        <button 
          onClick={() => onRemove(item)} 
          className="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
        >
          -
        </button>
        <span className="px-4">{item.quantity}</span>
        <button 
          onClick={() => onAdd(item)} 
          className="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
        >
          +
        </button>
      </div>
      <button 
        onClick={() => onDelete(item)} 
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-4"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
