import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const todos = ["Default Todo"];

  const [todo, setTodo] = useState("");
  const [todosData, setTodosData] = useState(todos);
  const [invalid, setInvalid] = useState(false);

  const handleInput = (e) => {
    setTodo(e.target.value);
    if (!/^[a-zA-Z\s]*$/.test(e.target.value)) {
      setInvalid(true);
    } else {
      setInvalid(false);
    }
  };

  const addTodo = () => {
    setTodosData([...todosData, todo]);
  };

  useEffect(() => {
    setTodo("");
  }, [todosData]);

  return (
    <>
      <div className="container">
        <p>Hello World</p>
        <ul>
          {todosData.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
        <input
          type="text"
          value={todo}
          onChange={handleInput}
          pattern="[a-zA-Z]+"
          style={{ color: invalid ? "red" : "" }}
        />
        <button onClick={addTodo} disabled={!todo || invalid}>
          Add Todo
        </button>
      </div>
    </>
  );
}

export default App;
