import React, { useEffect, useState } from "react";
import { FaTrashAlt, FaPlus } from "react-icons/fa";
import "./App.css";

const API_URL = "http://localhost:8080/api/v1/student";

function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", dob: "" });

  const fetchStudents = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setStudents(data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({ name: "", email: "", dob: "" });
    fetchStudents();
  };

  const deleteStudent = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchStudents();
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Student Hub</h1>
        <p>Manage your students easily</p>
      </header>

      <form className="form" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="dob"
          type="date"
          value={form.dob}
          onChange={handleChange}
          required
        />
        <button type="submit">
          <FaPlus /> Add Student
        </button>
      </form>

      <h2 className="list-title">Student List</h2>
      <ul className="student-list">
        {students.map((student) => (
          <li key={student.id} className="student-card">
            <div className="student-info">
              <strong>{student.name}</strong>
              <span>{student.email}</span>
              <span>DOB: {student.dob}</span>
            </div>
            <button
              className="delete-btn"
              onClick={() => deleteStudent(student.id)}
              title="Delete"
            >
              <FaTrashAlt />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
