import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [userText, setUserText] = useState("");

  return (
    <div className="app-container">
      <h1>Day 07 – React State Magic ✨</h1>

      <div className="counter-display">{count}</div>
      <button onClick={() => setCount(count + 1)}>➕ Add</button>
      <button onClick={() => setCount(count - 1)}>➖ Subtract</button>
      <button onClick={() => setCount(0)}>🔄 Reset</button>

      <input
        type="text"
        placeholder="Type something..."
        value={userText}
        onChange={(e) => setUserText(e.target.value)}
      />
      <p className="live-text">🔍 Preview: {userText || "Start typing..."}</p>
    </div>
  );
}

export default App;
