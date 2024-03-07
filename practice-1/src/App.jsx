import { useState } from "react";
import "./App.css";
import OptionsModal from "./components/OptionsModal";

function App() {
  const items = [
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
      id: 1,
      status: "CANCELLED",
      cancellation_reason: "Item not available",
      name: "Item 3",
      price: 4.99,
    },
  ];

  const [isShownOptionsModal, setIsShownOptionsModal] = useState(false);

  const showOptionsModal = () => {
    setIsShownOptionsModal(true);
  };

  const closeOptionsModal = () => {
    setIsShownOptionsModal(false);
  };

  return (
    <>
      {!isShownOptionsModal && (
        <div className="container">
          <div className="overview-container">
            <h2>Item Overview</h2>
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  {item.name}: €{item.price}
                  <input type="checkbox" disabled={item.status !== "ACTIVE"} />
                </li>
              ))}
            </ul>
          </div>
          <div className="options-container">
            <button onClick={showOptionsModal}>Options</button>
          </div>
        </div>
      )}
      {isShownOptionsModal && (
        <OptionsModal closeOptionsModal={closeOptionsModal} />
      )}
    </>
  );
}

export default App;
