const express = require('express');
const app = express();

app.use(express.json());

let students = [
  { id: 1, name: 'Meer' },
  { id: 2, name: 'Ameen' }
];

app.get('/students', (req, res) => {
  res.json(students);
});

app.post('/students', (req, res) => {
  const { name } = req.body;
  const newStudent = { id: students.length + 1, name };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});