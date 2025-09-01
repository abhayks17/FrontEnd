import React, { useState } from 'react'
import "./Signup.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function Signup() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Password:', password);

    try {
      const response = await axios.post("backend-production-389f.up.railway.app/", {
        name: name,
        password: password
      });
    
      console.log("Server response:", response.data);
      alert("Signup successful!");
      navigate("/login");
    } catch (err) {
      console.error("Signup failed:", err.response ? err.response.data : err.message);
      alert("Signup failed. Please try again.");
    }
    
  };



  return (
    <div className="signup">
      <form action="" onSubmit={handleLogin}>
        <div className="coat">
          <h1>Sign Up</h1>
          <div className="name">
            <label htmlFor="">Name</label>
            <input type="text" onBlur={(e) => setName(e.target.value)}/>
          </div>

          <div className="password">
            <label htmlFor="">Password</label>
            <input type="password" onBlur={(e) => setPassword(e.target.value)}/>
          </div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Signup
