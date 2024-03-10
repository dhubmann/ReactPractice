import React, { useState } from "react";

const NewItemModal = ({ closeNewItemModal, items, onUpdateItems }) => {
  const [itemName, setItemName] = useState("");

  const handleItemNameChange = (e) => {
    setItemName(e.target.value);
  };

  const validateInput = (e) => {
    if (e.target.value <= 0) {
      console.log("price invalid");
    }
  };

  // adds new item to items
  const updateItems = () => {
    const newItem = {
      id: items.length + 1,
      status: "ACTIVE",
      cancellation_reason: null,
      name: itemName,
      price: 0.0,
    };
    const updatedItems = [...items, newItem];
    onUpdateItems(updatedItems);
    console.log("items updated");
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>New Item</h2>
        </div>
        <form className="modal-form">
          <label>Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={itemName}
            onChange={handleItemNameChange}
          ></input>
          <label htmlFor="price">Price:</label>
          <input
            id="price"
            name="price"
            type="number"
            step="0.01"
            onChange={validateInput}
          ></input>
        </form>
        <div className="modal-footer">
          <button onClick={updateItems}>Add Item</button>
          <button onClick={closeNewItemModal}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default NewItemModal;
