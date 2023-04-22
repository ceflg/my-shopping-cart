import React from 'react';
import '../styles/ItemList.css';

function ItemList(props) {
  const handleDelete = (id) => {
    props.handleDelete(id);
  };

  const handleCheck = (id) => {
    props.handleCheck(id);
  };

  return (
    <div className="item-list">
      <h3>Shopping List :</h3>
      <ul>
        {props.items.map((item) => (
          <li key={item.id}>
            <label>
              <input type="checkbox" checked={item.isChecked} onChange={() => handleCheck(item.id)} />
              <input type="text" defaultValue={item.item} onChange={(e) => {
                const newItem = { ...item, item: e.target.value };
                props.handleUpdate(newItem);
              }} />
              <input type="text" defaultValue={item.quantity} onChange={(e) => {
                const newItem = { ...item, quantity: e.target.value };
                props.handleUpdate(newItem);
              }} />
              <input type="text" defaultValue={item.units} onChange={(e) => {
                const newItem = { ...item, units: e.target.value };
                props.handleUpdate(newItem);
              }} />
            </label>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList