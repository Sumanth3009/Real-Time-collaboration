import React, { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Email:', email);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ color: '#282c34', marginBottom: '20px' }}>Register</h2>
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left', width: '300px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="username" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: '10px', width: '100%', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ccc', transition: 'border-color 0.3s' }}
            onFocus={(e) => e.target.style.borderColor = '#61dafb'}
            onBlur={(e) => e.target.style.borderColor = '#ccc'}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '10px', width: '100%', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ccc', transition: 'border-color 0.3s' }}
            onFocus={(e) => e.target.style.borderColor = '#61dafb'}
            onBlur={(e) => e.target.style.borderColor = '#ccc'}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '10px', width: '100%', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ccc', transition: 'border-color 0.3s' }}
            onFocus={(e) => e.target.style.borderColor = '#61dafb'}
            onBlur={(e) => e.target.style.borderColor = '#ccc'}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#61dafb', border: 'none', borderRadius: '5px', cursor: 'pointer', color: '#fff', fontWeight: 'bold', transition: 'background-color 0.3s' }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#21a1f1'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#61dafb'}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;