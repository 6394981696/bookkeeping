import React, { useState } from 'react';
import { TextField, Button, Container, Typography, MenuItem } from '@mui/material';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'Author' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8080/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) {
      alert("Registered successfully!");
    } else {
      alert(data.message || "Registration failed");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Register</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <TextField
          select
          label="Role"
          fullWidth
          margin="normal"
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        >
          <MenuItem value="Author">Author</MenuItem>
          <MenuItem value="Borrower">Borrower</MenuItem>
        </TextField>
        <Button variant="contained" type="submit">Register</Button>
      </form>
    </Container>
  );
};

export default Register;
