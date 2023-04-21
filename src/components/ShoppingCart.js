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

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <div>
        <label htmlFor="newItem">New Item:</label>
        <input type="text" id="newItem" />
        <button onClick={() => {
          const newItemName = document.getElementById('newItem').value;
          if (items.some(item => item.name === newItemName)) {
            alert(`Item ${newItemName} already exists in the list!`);
          } else {
            const newItem = {
              id: items.length + 1,
              name: newItemName,
              isChecked: false
            };
            setItems([...items, newItem]);
          }
        }}>Add Item</button>
      </div>
      <ItemList items={items} handleDelete={handleDelete} handleCheck={handleCheck} />
    </div>
  );
}

export default ShoppingCart;