import React from 'react'

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// 引入store中的方法
import { login,logout } from '../store/modules/authSlice';
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login());
    navigate('/'); // 登录后跳转到首页
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      这是登陆页面
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
