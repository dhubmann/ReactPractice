import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const items = [
    { id: 1, name: "Item 1", detail: "Detail 1", active: true },
    { id: 2, name: "Item 2", detail: "Detail 2", active: false },
  ];

  const [itemsData, setItemsData] = useState(items);

  const handleUpdateItems = (updatedItems) => {
    setItemsData([...updatedItems]);
  };

  return (
    <>
      <h3>Practice: Passing Data between Components</h3>
      {itemsData.map((item) => (
        <p key={item.id}>
          {item.id}: {item.name} | {item.detail} |{" "}
          {item.active ? "active" : "disabled"}
        </p>
      ))}
      <Form itemsData={itemsData} handleUpdateItems={handleUpdateItems} />
    </>
  );
}

export default App;
