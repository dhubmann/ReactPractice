import React, { useState } from "react";

const FormBody = ({ itemsData }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className="items content">
      <ul>
        <h3>Details</h3>
        {itemsData.map((item) => (
          <li key={item.id}>
            {item.detail}{" "}
            <input
              id="item"
              name="item"
              key={item.id}
              type="checkbox"
              checked={!item.active}
            />
            <label htmlFor="item">Disable</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormBody;
