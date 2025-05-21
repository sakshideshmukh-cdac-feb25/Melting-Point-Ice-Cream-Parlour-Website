import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthForm.css';

export default function Signup() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('user', JSON.stringify(data.user || { name: form.username }));
        setMessage('Signup successful! Redirecting...');
        setTimeout(() => navigate('/order'), 1000);
      } else {
        setMessage(data.error || 'Signup failed');
      }
    } catch (err) {
      console.error(err);
      setMessage('Server error');
    }
  };

  return (
    <div className="auth-page">
      <form onSubmit={handleSignup} className="auth-form-container space-y-4">
        <h2 className="auth-title">Signup</h2>
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="auth-input"
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="auth-input"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="auth-input"
        />
        <button type="submit" className="auth-button">Signup</button>
        {message && <p className="text-center text-sm mt-2">{message}</p>}
      </form>
    </div>
  );
}
