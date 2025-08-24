let students = [];

document.addEventListener('DOMContentLoaded', function() {
    load();
    show();
});

document.getElementById('form').addEventListener('submit', add);
document.getElementById('clear').addEventListener('click', clear);

function add(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const roll = document.getElementById('roll').value.trim();
    const dept = document.getElementById('dept').value.trim();
    const email = document.getElementById('email').value.trim();
    const gender = document.getElementById('gender').value;
    
    if (!name || !phone || !roll || !dept || !email || !gender) {
        alert('Please fill in all fields!');
        return;
    }
    
    if (students.some(s => s.roll === roll)) {
        alert('A student with this roll number already exists!');
        return;
    }
    
    const student = {
        id: Date.now(),
        name: name,
        phone: phone,
        roll: roll,
        dept: dept,
        email: email,
        gender: gender
    };
    
    students.push(student);
    
    save();
    
    show();
    
    document.getElementById('form').reset();
    
    alert('Student added successfully!');
}

function show() {
    const list = document.getElementById('list');
    
    if (students.length === 0) {
        list.innerHTML = '<div class="empty">No students added yet. Add a student to see details here.</div>';
        return;
    }
    
    let html = '';
    
    students.forEach(s => {
        html += `
            <div class="card">
                <h3>${s.name}</h3>
                <div class="info">
                    <p><strong>Phone:</strong> ${s.phone}</p>
                    <p><strong>Roll Number:</strong> ${s.roll}</p>
                    <p><strong>Department:</strong> ${s.dept}</p>
                    <p><strong>Email:</strong> ${s.email}</p>
                    <p><strong>Gender:</strong> ${s.gender}</p>
                </div>
            </div>
        `;
    });
    
    list.innerHTML = html;
}

function clear() {
    if (confirm('Are you sure you want to clear all students? This cannot be undone.')) {
        students = [];
        save();
        show();
        alert('All students have been cleared!');
    }
}

function save() {
    localStorage.setItem('students', JSON.stringify(students));
}

function load() {
    const data = localStorage.getItem('students');
    if (data) {
        students = JSON.parse(data);
    }
}

console.log('Student Details System loaded successfully!');
