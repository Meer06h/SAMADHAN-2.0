import React, { useState } from "react";
import "./App.css";

function App() {
  const [listItems, setListItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim() === "") return;
    setListItems([...listItems, inputValue]);
    setInputValue("");
  };

  const deleteItem = (i) => {
    setListItems(listItems.filter((_, index) => index !== i));
  };

  const toggleDone = (i) => {
    const updated = [...listItems];
    updated[i] = { text: updated[i].text || updated[i], done: !updated[i].done };
    setListItems(updated);
  };

  return (
    <div className="main-container">
      <h1>To-Do List for SAMADHAN📝</h1>
      <div className="input-section">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={addItem}>Add</button>
      </div>
      <ul>
        {listItems.map((item, index) => {
          const text = item.text || item;
          const done = item.done || false;
          return (
            <li
              key={index}
              className={done ? "done" : ""}
              onClick={() => toggleDone(index)}
            >
              {text}
              <button onClick={(e) => { e.stopPropagation(); deleteItem(index); }}>
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
