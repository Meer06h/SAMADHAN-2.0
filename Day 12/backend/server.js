const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let todos = [
  { id: 1, task: "Learn MERN", completed: false },
  { id: 2, task: "Build To-Do App", completed: false },
];

app.get("/api/todos", (req, res) => {
  res.json(todos);
});

app.post("/api/todos", (req, res) => {
  const newTodo = {
    id: Date.now(),
    task: req.body.task,
    completed: false,
  };
  todos.push(newTodo);
  res.json(newTodo);
});

// DELETE todo
app.delete("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter((todo) => todo.id !== id);
  res.json({ success: true });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
