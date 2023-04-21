import React, { useState } from 'react';
import ItemList from './ItemList';
import '../styles/ShoppingCart.css';

function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState('');

  const addItem = (event) => {
    event.preventDefault();

    const newItem = {
      id: items.length + 1,
      name: newItemName,
      isChecked: false
    };

    setItems([...items, newItem]);
    setNewItemName('');
  };

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

  return (
    <div className="shopping-cart">
      <form onSubmit={addItem}>
        <label>
          Add items to list: 
          <input type="text" value={newItemName} onChange={(event) => setNewItemName(event.target.value)} />
        </label>
        <button type="submit">Add</button>
      </form>
      <ItemList items={items} handleDelete={handleDelete} handleCheck={handleCheck} />
    </div>
  );
}

export default ShoppingCart;