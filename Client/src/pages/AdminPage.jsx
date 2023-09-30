import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function AdminPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post('http://localhost:5000/admin/login', { id, password })
      .then(res => {
        if (res.data.login === "success") {
          alert('로그인 성공');
          localStorage.setItem('ID', res.data.id);
          navigate('/');
        } else {
          alert('로그인 실패');
        }
      })
      .catch(error => {
        console.error('로그인 요청 오류:', error);
        alert("로그인 실패");
      });
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <div>
        <label htmlFor="id"> ID </label>
        <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} />
        <label htmlFor="pw">Password</label>
        <input type="password" id="pw" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      <button onClick={handleLogin}> Login </button>
    </div>
  );
};
