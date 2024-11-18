import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const nav=useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isLogin) {
      // Handle login
      try {
        const response = await axios.get('http://localhost:3001/users');
        const user = response.data.find((user) => user.email === email && user.password === password);
        if (user) {
          alert('Login successful!');
          setEmail("");
          setPassword("");
          nav("/dashboard");
          // Redirect to dashboard or perform other actions
        } else {
          alert('Invalid credentials');
          setEmail("");
          setPassword("");
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    } else {
      // Handle signup
      try {
        const newUser  = { name, email, password };
        await axios.post('http://localhost:3001/users', newUser );
        alert('Signup successful! You can now log in.');
        setEmail("");
        setPassword("");
        setIsLogin(true); // Switch to login form after signup
      } catch (error) {
        setEmail("");
        setPassword("");
        console.error('Error creating user:', error);
      }
    }
  };

  return (
    <div className='container'>
        <div className='form-container'>
      <h1>{isLogin ? 'Login' : 'Signup'}</h1>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div>
            <label>
              Name:
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <br />
          </div>
        )}
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <br />
        <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
      </form>
      <p>
        {isLogin ? "Don't have an account? " : 'Already have an account? '}
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Signup' : 'Login'}
        </button>
      </p>
      </div>
    </div>
  );
};

export default Login;