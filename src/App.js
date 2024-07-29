import { useRef, useState } from 'react';
import './App.css'; // Import your CSS file

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const handleAddTode = () => {
    const text = inputRef.current.value.trim();
    if (text !== "") {
      const newItem = { completed: false, text };
      setTodos([...todos, newItem]);
      inputRef.current.value = "";
    }
  };

  const handleItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="to-do-container">
        <h2>TO DO LIST</h2>
        <ul>
          {todos.map(({ text, completed }, index) => (
            <div className="item" key={index}>
              <li
                className={completed ? "done" : ""}
                onClick={() => handleItemDone(index)}
              >
                {text}
              </li>
              <span onClick={() => handleDeleteItem(index)} className="trash">
                ❌
              </span>
            </div>
          ))}
        </ul>
        <input ref={inputRef} placeholder="Enter item..." />
        <button onClick={handleAddTode}>ADD</button>
      </div>
    </div>
  );
}

export default App;