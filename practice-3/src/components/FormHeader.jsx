import React, { useState } from "react";
import "../styles/form_header.css";

const FormHeader = ({ itemsData, handleUpdateItems }) => {
  const [newItem, setNewItem] = useState("");

  const handleChange = (e) => {
    setNewItem(e.target.value);
  };

  const addNewItem = () => {
    const newItemId = Math.max(...itemsData.map((item) => item.id)) + 1;
    const updatedItems = [
      ...itemsData,
      { id: newItemId, name: newItem, detail: "test" },
    ];
    handleUpdateItems(updatedItems);
    setNewItem("");
  };

  return (
    <div id="header" className="form header">
      <h2>Form Header</h2>
      <input type="text" value={newItem} onChange={handleChange} />
      <button onClick={addNewItem}>Add</button>
    </div>
  );
};

export default FormHeader;
