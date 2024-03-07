import { useState } from "react";
import "./App.css";
import OptionsModal from "./components/OptionsModal";

function App() {
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
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
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
