import { useState } from "react";
import "./styles/App.css";
// import OptionsModal from "./components/OptionsModal";
import EditStatusModal from "./components/EditStatusModal";

function App() {
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

  const modals = {
    newItemModal: false,
    editStatusModal: false,
    otherModals: false,
  };

  const [items, setItems] = useState(itemsData);
  const [modalState, setModalState] = useState(modals);
  // const [isShownEditStatusModal, setIsShownEditStatusModal] = useState(false);

  const showModal = (modal) => {
    setModalState((prevState) => ({
      ...prevState,
      [modal]: true,
    }));
  };

  const closeModal = (modal) => {
    setModalState((prevState) => ({
      ...prevState,
      [modal]: false,
    }));
  };

  // const showEditStatusModal = () => {
  //   setIsShownEditStatusModal(true);
  // };

  // const closeEditStatusModal = () => {
  //   setIsShownEditStatusModal(false);
  // };

  const handleUpdateItems = (updatedItems) => {
    setItems(updatedItems);
    // console.log("update items");
  };

  return (
    <>
      {!modalState.editStatusModal && (
        <div className="container">
          <div className="overview-container">
            <h2>Item Overview</h2>
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
          <div className="options-container">
            <h3>Options</h3>
            <button onClick={() => showModal("newItemModal")}>New Item</button>
            <button onClick={() => showModal("editStatusModal")}>
              Edit Status
            </button>
          </div>
        </div>
      )}
      {modalState.editStatusModal && (
        <EditStatusModal
          closeEditStatusModal={() => closeModal("editStatusModal")}
          items={items}
          onUpdateItems={handleUpdateItems}
        />
      )}
    </>
  );
}

export default App;
