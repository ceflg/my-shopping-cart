import React from 'react';
import '../styles/ItemList.css';

function ItemList(props) {
  return (
    <div className="item-list">
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Is Checked</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td><input type="checkbox" checked={item.isChecked} onChange={() => props.handleCheck(item.id)} /></td>
              <td><button onClick={() => props.handleDelete(item.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ItemList;