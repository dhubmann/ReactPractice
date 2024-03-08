import React, { useEffect, useState } from "react";

const OptionsModal = ({ closeOptionsModal, items }) => {
  const [selectedItemId, setSelectedItemId] = useState("");
  const [activateItem, setActivateItem] = useState(false);

  const selectItemId = (e) => {
    setSelectedItemId(e.target.value);
    console.log("Selected Id: ", e.target.value);
  };

  const updateItem = () => {
    console.log("Item updated");
  };

  useEffect(() => {
    const selectedItem = items.find(
      (item) => item.id === parseInt(selectedItemId)
    );
    if (selectedItem && selectedItem.status === "ACTIVE") {
      setActivateItem(true);
    } else {
      setActivateItem(false);
    }
  }, [selectedItemId, items]);

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Options</h2>
        </div>
        <div className="items-dropdown">
          <label htmlFor="items">Choose an item: </label>
          <select value={selectedItemId} onChange={selectItemId}>
            <option value=""></option>
            {items.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}: €{item.price}
              </option>
            ))}
          </select>
        </div>
        <div className="modal-options">
          <ul>
            <li>
              <label>Item Status Info</label>
              {selectedItemId &&
                items.map((item) =>
                  item.id === parseInt(selectedItemId) ? (
                    <span key={item.id}>: {item.status}</span>
                  ) : null
                )}
            </li>
            <li>
              <label>Activate Item</label>
              <input
                checked={activateItem}
                onChange={(e) => setActivateItem(e.target.checked)}
                type="checkbox"
              />
            </li>
            <li>
              <label>Cancel Item</label>
              <input type="checkbox" />
            </li>
            <li>
              <label>Change Name</label>
              <input type="checkbox" />
            </li>
            <li>
              <label>Change Price</label>
              <input type="checkbox" />
            </li>
          </ul>
        </div>
        <div className="modal-footer">
          <button onClick={updateItem}>Save Changes</button>
          <button onClick={closeOptionsModal}>Close Options</button>
        </div>
      </div>
    </div>
  );
};

export default OptionsModal;
