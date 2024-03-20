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
      price: 5.97,
    },
    {
      id: 3,
      status: "CANCELLED",
      cancellation_reason: "Item not available",
      name: "Item 3",
      price: 3.27,
    },
    {
      id: 4,
      status: "ACTIVE",
      cancellation_reason: null,
      name: "Item 4",
      price: 12.25,
    },
    {
      id: 5,
      status: "CANCELLED",
      cancellation_reason: "Item not available",
      name: "Item 5",
      price: 7.89,
    },
    {
      id: 6,
      status: "ACTIVE",
      cancellation_reason: null,
      name: "Item 6",
      price: 14.55,
    },
  ];

  const [items, setItems] = useState(itemsData);

  return (
    <div className="container">
      <h3>Item Overview</h3>
      <table id="items">
        <tbody>
          <tr id="heading">
            <th>Name</th>
            <th>Description</th>
            <th>Currency</th>
            <th>Price</th>
            <th>Status</th>
            <th>Select Item</th>
          </tr>
          {items.map((item) => (
            <tr key={item.id}>
              <th>{item.name}</th>
              <th>{item.name}</th>
              <th>€</th>
              <th>{item.price}</th>
              <th>{item.status}</th>
              <th>
                <input type="checkbox" disabled={item.status !== "ACTIVE"} />
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      <button>Order</button>
      <button>Cancel Selection</button>
    </div>
  );
};

export default Overview;
