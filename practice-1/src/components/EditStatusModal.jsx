import React, { useEffect, useState } from "react";
import "../styles/components/edit_status_modal.css";

const EditStatusModal = ({ closeEditStatusModal, items, onUpdateItems }) => {
  const [selectedItemId, setSelectedItemId] = useState("");
  const [saveButtonDisabled, setSaveButtonDisabled] = useState(true);
  const [activateItem, setActivateItem] = useState(false);
  const [cancelItem, setCancelItem] = useState(false);

  const selectItemId = (e) => {
    setSelectedItemId(e.target.value);
    // console.log("Selected Id: ", e.target.value);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (name === "activate") {
      setActivateItem(checked);
    } else if (name === "cancel") {
      setCancelItem(checked);
    }
    setSaveButtonDisabled(!(activateItem || cancelItem));
  };

  const updateItem = () => {
    if (selectedItemId) {
      const updatedItems = items.map((item) => {
        if (item.id === parseInt(selectedItemId)) {
          if (activateItem && !cancelItem) {
            return { ...item, status: "ACTIVE" };
          } else if (cancelItem && !activateItem) {
            return { ...item, status: "CANCELLED" };
          }
        } else {
          return item;
        }
      });
      onUpdateItems(updatedItems);
      // console.log("Item updated");
    }
  };

  // Helper function to set checkbox by default depending on item's status
  const getCheckboxStates = (status) => {
    let activate = false;
    let cancel = false;
    if (status === "ACTIVE") {
      activate = true;
    } else if (status === "CANCELLED") {
      cancel = true;
    }
    return { activate, cancel };
  };

  useEffect(() => {
    if (selectedItemId) {
      const selectedItem = items.find(
        (item) => item.id === parseInt(selectedItemId)
      );
      const { activate, cancel } = getCheckboxStates(selectedItem.status);
      setActivateItem(activate);
      setCancelItem(cancel);
    } else {
      setActivateItem(false);
      setCancelItem(false);
    }
  }, [selectedItemId, items]);

  useEffect(() => {
    setSaveButtonDisabled(!selectedItemId || !(activateItem || cancelItem));
  }, [selectedItemId, activateItem, cancelItem]);

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Edit Status</h2>
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
              <label>Status</label>
              {selectedItemId &&
                items.map((item) =>
                  item.id === parseInt(selectedItemId) ? (
                    <span key={item.id}>{item.status}</span>
                  ) : null
                )}
            </li>
            <li>
              <label>Activate Item</label>
              <input
                name="activate"
                checked={activateItem}
                onChange={handleCheckboxChange}
                disabled={!selectedItemId || cancelItem}
                type="checkbox"
              />
            </li>
            <li>
              <label>Cancel Item</label>
              <input
                name="cancel"
                checked={cancelItem}
                onChange={handleCheckboxChange}
                disabled={!selectedItemId || activateItem}
                type="checkbox"
              />
            </li>
          </ul>
        </div>
        <div className="modal-footer">
          <button onClick={updateItem} disabled={saveButtonDisabled}>
            Save Changes
          </button>
          <button onClick={closeEditStatusModal}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default EditStatusModal;
