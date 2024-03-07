import React from "react";

const OptionsModal = ({ closeOptionsModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Options</h2>
        </div>
        <div className="modal-options">
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
          </ul>
        </div>
        <div className="modal-footer">
          <button onClick={closeOptionsModal}>Close Options</button>
        </div>
      </div>
    </div>
  );
};

export default OptionsModal;
