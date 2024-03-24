import "./index.scss";
import React, { useState } from "react";
import axios from "axios";

const LoadItems = () => {
  const [myData, setMyData] = useState([]);
  const [myDatasets, setMyDatasets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const url = "https://jsonplaceholder.typicode.com/todos/1";

  const handleClick = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(url);
      console.log("---TEST---", response.data);
      setMyData(response.data);
    } catch (error) {
      console.error("Error while loading data: ", error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const url2 = "https://jsonplaceholder.typicode.com/todos";

  const handleClick2 = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(url2);
      console.log("---TEST---", response.data);
      setMyDatasets(response.data);
    } catch (error) {
      console.error("Error while loading data: ", error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="data">
        <h2>Load Items</h2>
        <button onClick={handleClick}>Load one Test Dataset</button>
        <p>Test Dataset:</p>
        <p>
          ID: {myData.id} | Title: {myData.title} | Completed:{" "}
          {myData.completed ? " Yes" : " NO"}
        </p>
        <br />
        <button onClick={handleClick2}>Load All Test Datasets</button>
        <p>All Test Datasets:</p>
        <ul>
          {/* Iterate through myData and display each item's properties */}
          {myDatasets.map((item) => (
            <li key={item.id}>
              {/* Access and display individual properties here */}
              ID: {item.id} | Title: {item.title} | Completed:{" "}
              {item.completed ? "Yes" : "No"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LoadItems;
