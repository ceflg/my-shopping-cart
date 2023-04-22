import React, { useState } from 'react';
import ItemList from './ItemList';
import '../styles/ShoppingCart.css';

function ShoppingCart() {
  const [items, setItems] = useState([]);

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleCheck = (id) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, isChecked: !item.isChecked };
      } else {
        return item;
      }
    }));
  };

  const handleAdd = () => {
    const newItemName = document.getElementById('newItemName').value;
    const newItemQuantity = document.getElementById('newItemQuantity').value;
    const newItemPrice = document.getElementById('newItemPrice').value;

    if (items.some(item => item.name === newItemName)) {
      alert(`Item ${newItemName} already exists in the list!`);
    } else {
      const newItem = {
        id: items.length + 1,
        name: newItemName,
        quantity: newItemQuantity,
        price: newItemPrice,
        isChecked: false
      };
      setItems([...items, newItem]);
    }

    document.getElementById('newItemName').value = '';
    document.getElementById('newItemQuantity').value = '';
    document.getElementById('newItemPrice').value = '';
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <div>
        <div className="input-group">
          <label htmlFor="newItemName">Item Name:</label>
          <input type="text" id="newItemName" />
        </div>
        <div className="input-group">
          <label htmlFor="newItemQuantity">Quantity:</label>
          <input type="text" id="newItemQuantity" />
        </div>
        <div className="input-group">
          <label htmlFor="newItemPrice">Price:</label>
          <input type="text" id="newItemPrice" />
        </div>
        <button onClick={handleAdd}>Add Item</button>
      </div>
      <ItemList items={items} handleDelete={handleDelete} handleCheck={handleCheck} />
    </div>
  );
}

export default ShoppingCart;