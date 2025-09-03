const studentForm = document.getElementById("studentForm");
const studentName = document.getElementById("studentName");
const studentAge = document.getElementById("studentAge");
const studentList = document.getElementById("studentList");
let editingId = null;

async function loadStudents() {
  const res = await fetch("http://localhost:5000/students");
  const data = await res.json();
  studentList.innerHTML = "";
  data.forEach(s => {
    const li = document.createElement("li");
    li.innerHTML = `${s.name} (${s.age}) 
      <div>
        <button onclick="editStudent(${s.id}, '${s.name}', ${s.age})">Edit</button>
        <button onclick="deleteStudent(${s.id})">Delete</button>
      </div>`;
    studentList.appendChild(li);
  });
}

studentForm.addEventListener("submit", async e => {
  e.preventDefault();
  const name = studentName.value;
  const age = parseInt(studentAge.value);
  if (editingId) {
    await fetch(`http://localhost:5000/students/${editingId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, age })
    });
    editingId = null;
  } else {
    await fetch("http://localhost:5000/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, age })
    });
  }
  studentForm.reset();
  loadStudents();
});

window.editStudent = (id, name, age) => {
  editingId = id;
  studentName.value = name;
  studentAge.value = age;
};

window.deleteStudent = async id => {
  await fetch(`http://localhost:5000/students/${id}`, { method: "DELETE" });
  loadStudents();
};

loadStudents();
