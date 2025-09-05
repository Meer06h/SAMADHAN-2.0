const express = require("express");
const app = express();
const PORT = 5000;
app.use(express.json());
let studentList = [
  { id: 1, name: "Meer", age: 20 },
  { id: 2, name: "Ameen", age: 21 }
];

app.get("/students", (req, res) => res.json(studentList));

app.post("/students", (req, res) => {
  const { name, age } = req.body;
  const newStudent = { id: studentList.length + 1, name, age };
  studentList.push(newStudent);
  res.status(201).json(newStudent);
});

app.put("/students/:id", (req, res) => {
  const student = studentList.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ msg: "Student not found" });
  const { name, age } = req.body;
  student.name = name || student.name;
  student.age = age || student.age;
  res.json(student);
});

app.delete("/students/:id", (req, res) => {
  studentList = studentList.filter(s => s.id !== parseInt(req.params.id));
  res.json({ msg: "Student deleted" });
});

app.use(express.static("frontend"));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));