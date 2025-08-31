import "./App.css";

export default function StudentCard({ student }) {
  return (
    <div className="student-card">
      <h2>{student.name}</h2>
      <p>ID: {student.id}</p>
    </div>
  );
}
