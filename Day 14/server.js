const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();
app.use(express.json());

const people = [];
const SAFE_WORD = "supersecret";

app.get("/", (req, res) => {
  res.send("Server is running. Use /signup, /signin, or /me");
});

app.post("/signup", async (req, res) => {
  const { name, secret } = req.body;
  if (!name || !secret) {
    return res.status(400).json({ message: "Name and secret are required" });
  }
  const existingPerson = people.find((p) => p.name === name);
  if (existingPerson) {
    return res.status(400).json({ message: "This person already exists!" });
  }
  const lockedSecret = await bcrypt.hash(secret, 10);
  people.push({ name, secret: lockedSecret });
  res.json({ message: "Person added successfully!" });
});

app.post("/signin", async (req, res) => {
  const { name, secret } = req.body;
  if (!name || !secret) {
    return res.status(400).json({ message: "Name and secret are required" });
  }
  const person = people.find((p) => p.name === name);
  if (!person) {
    return res.status(400).json({ message: "Wrong details" });
  }
  const isMatch = await bcrypt.compare(secret, person.secret);
  if (!isMatch) {
    return res.status(400).json({ message: "Wrong details" });
  }
  const pass = jwt.sign({ name: person.name }, SAFE_WORD, { expiresIn: "1h" });
  res.json({ message: "Welcome back!", pass });
});

app.get("/me", (req, res) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(403).json({ message: "Pass required" });
  const pass = authHeader.split(" ")[1];
  if (!pass) return res.status(403).json({ message: "Pass missing" });
  try {
    const opened = jwt.verify(pass, SAFE_WORD);
    res.json({ message: "This is you", person: opened.name });
  } catch (err) {
    res.status(401).json({ message: "Pass is not valid or has expired" });
  }
});

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
