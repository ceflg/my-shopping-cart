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

  const handleAddItem = () => {
    const name = document.getElementById('name').value.trim();
    const quantity = document.getElementById('quantity').value.trim();
    const price = document.getElementById('price').value.trim();

    if (name === '') {
      alert('Please enter a name for the item.');
      return;
    }

    const newItem = {
      id: items.length + 1,
      name: name,
      quantity: quantity || 1,
      price: price || 0,
      isChecked: false
    };

    setItems([...items, newItem]);
    document.getElementById('name').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('price').value = '';
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <div>
        <label htmlFor="name">Item name:</label>
        <input type="text" id="name" />
        <br />
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" min="1" />
        <br />
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" min="0" step="0.01" />
        <br />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <ItemList items={items} handleDelete={handleDelete} handleCheck={handleCheck} />
    </div>
  );
}

export default ShoppingCart;