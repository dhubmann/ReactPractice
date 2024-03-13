import React from "react";

const FormBody = ({ itemsData }) => {
  return (
    <div className="items content">
      <ul>
        <h3>Details</h3>
        {itemsData.map((item) => (
          <li key={item.id}>
            {item.detail} <input key={item.id} type="checkbox" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormBody;
