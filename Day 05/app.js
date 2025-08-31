const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
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

app.get('/', (req, res) => {
  res.redirect('/students');
});

app.listen(5000, () => {
  console.log('Server running at: http://localhost:5000/students');
});
