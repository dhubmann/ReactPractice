import "./index.scss";
import React, { useState } from "react";

const Overview = () => {
  const itemsData = [
    {
      id: 1,
      status: "ACTIVE",
      cancellation_reason: null,
      name: "Item 1",
      price: 10.99,
    },
    {
      id: 2,
      status: "ACTIVE",
      cancellation_reason: null,
      name: "Item 2",
      price: 5.99,
    },
    {
      id: 3,
      status: "CANCELLED",
      cancellation_reason: "Item not available",
      name: "Item 3",
      price: 4.99,
    },
  ];

  const [items, setItems] = useState(itemsData);

  return (
    <div className="container">
      <h3>Item Overview</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}: €{item.price}
            <input type="checkbox" disabled={item.status !== "ACTIVE"} />
            {item.status === "CANCELLED" ? (
              <span className="cancelled-span">CANCELLED</span>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Overview;
