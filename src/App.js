import React, { useEffect, useState } from "react";

const API_URL = "http://localhost:8080/api/v1/student";

function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", dob: "" });

  // Fetch students
  const fetchStudents = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setStudents(data);
  };

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add new student
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

  // Delete student
  const deleteStudent = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchStudents();
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Student Hub</h1>

      <form onSubmit={handleSubmit}>
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
          placeholder="DOB"
          value={form.dob}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Student</button>
      </form>

      <hr />

      <h2>Student List</h2>
      <ul>
        {students.map((s) => (
          <li key={s.id}>
            <b>{s.name}</b> - {s.email} - {s.dob}
            <button onClick={() => deleteStudent(s.id)}>❌ Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
