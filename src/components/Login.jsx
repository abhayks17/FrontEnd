import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log('Name:', name);
    console.log('Password:', password);

    try {
      const response = await axios.post("https://backend-0an7.onrender.com/login", {
        name,
        password
      });

      console.log("Server response:", response.data);
      alert("Login successful!");
      navigate("/home");
    } catch (err) {
      console.error("Login failed:", err.response ? err.response.data : err.message);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <div className="container">
          <h1>Login</h1>

          <div className="name">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="password">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
