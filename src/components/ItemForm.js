import React, { useState } from 'react';
import '../styles/ItemForm.css';

function ItemForm(props) {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemUnits, setItemUnits] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedItemName = itemName.trim();
    const trimmedItemUnits = itemUnits.trim();

    if (trimmedItemName && trimmedItemUnits) {
      const newItem = {
        name: trimmedItemName,
        quantity: parseInt(itemQuantity),
        units: trimmedItemUnits
      };

      props.addItem(newItem);

      setItemName('');
      setItemQuantity(1);
      setItemUnits('');
    }
  };

  return (
    <form className="item-form" onSubmit={handleSubmit}>
      <div className="item-input">
        <label htmlFor="itemName">Item:</label>
        <input type="text" id="itemName" value={itemName} onChange={(event) => setItemName(event.target.value)} />
      </div>
      <div className="item-input">
        <label htmlFor="itemQuantity">Quantity:</label>
        <input type="number" id="itemQuantity" value={itemQuantity} onChange={(event) => setItemQuantity(event.target.value)} />
      </div>
      <div className="item-input">
        <label htmlFor="itemUnits">Units:</label>
        <input type="text" id="itemUnits" value={itemUnits} onChange={(event) => setItemUnits(event.target.value)} />
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;